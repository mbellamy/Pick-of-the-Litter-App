package net.marcusbellamy.litter;

import android.Manifest;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.location.Location;
import android.location.LocationListener;
import android.location.LocationManager;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.provider.Settings;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.v4.app.ActivityCompat;
import android.support.v4.content.ContextCompat;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.util.Base64;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.RelativeLayout;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.reflect.TypeToken;

import net.marcusbellamy.litter.API.LitterAPI;
import net.marcusbellamy.litter.API.UserAPI;
import net.marcusbellamy.litter.Interface.AsyncInterface;
import net.marcusbellamy.litter.Models.Litter;
import net.marcusbellamy.litter.Models.Result;
import net.marcusbellamy.litter.Models.User;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.util.Date;
import java.util.List;

import okhttp3.MediaType;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity implements AsyncInterface {

    private ListView mLitterListView;
    private LinearLayout mDashboardLayout;
    private RelativeLayout mImageLayout;
    private LinearLayout mLoginLayout;
    private ImageView mImageView;
    private EditText mEmailEditText;
    private EditText mPasswordEditText;
    private EditText mLoginEmailEditText;
    private EditText mLoginPasswordEditText;
    private Button mPostButton;
    private Button mDiscardButton;
    private MenuItem mLoginMenuItem;
    private MenuItem mLogoutMenuItem;
    private LocationManager locationManager;
    private Context mContext;
    private Retrofit retrofit;
    private Gson gson;
    private Location userLocation;
    private BottomNavigationView navigation;

    User user;
    private HelperMethods helperMethods;

    private final static int MY_PERMISSION_ACCESS_FINE_LOCATION = 1111;
    private final static int REQUEST_IMAGE_CAPTURE = 2222;
    private final static String BASE_URL = "http://litter-backend.herokuapp.com/";


    private static final int litterRadius = 25;

    private BottomNavigationView.OnNavigationItemSelectedListener mOnNavigationItemSelectedListener
            = new BottomNavigationView.OnNavigationItemSelectedListener() {

        @Override
        public boolean onNavigationItemSelected(@NonNull MenuItem item) {
            switch (item.getItemId()) {
                case R.id.navigation_home:
                    showList();
                    return true;
                case R.id.navigation_dashboard:
                    if (user == null) {
                        showDashboard();
                    } else {
                        showLoggedIn();
                    }
                    return true;
                case R.id.navigation_litter_add:
                    if (user != null) {
                        showCamera();
                    } else {
                        showDashboard();
                    }
                    return true;
            }
            return false;
        }

    };

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        menuInflater.inflate(R.menu.auth, menu);
        mLoginMenuItem = menu.findItem(R.id.loginMenuButton);
        mLogoutMenuItem = menu.findItem(R.id.logoutMenuButton);

        if (user != null) {
            mLoginMenuItem.setVisible(false);
            mLogoutMenuItem.setVisible(true);
        } else {
            mLoginMenuItem.setVisible(true);
            mLogoutMenuItem.setVisible(false);
        }
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.loginMenuButton: {
                mLogoutMenuItem.setVisible(true);
                mLoginMenuItem.setVisible(false);
                navigation.setSelectedItemId(R.id.navigation_dashboard);
            }
            break;
            case R.id.logoutMenuButton: {
                mLoginMenuItem.setVisible(true);
                mLogoutMenuItem.setVisible(false);
                signOut();
                navigation.setSelectedItemId(R.id.navigation_dashboard);
            }
            break;
            default:{

            }
            break;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mContext = this;



        // initialize variables
        helperMethods = new HelperMethods();


        gson = new Gson();
        Gson gsonBuilder = new GsonBuilder()
                .setLenient()
                .create();

        // UI
        mLitterListView = (ListView) findViewById(R.id.litterList);
        mDashboardLayout = (LinearLayout) findViewById(R.id.dashboardView);
        mLoginLayout = (LinearLayout) findViewById(R.id.loginView);
        mImageLayout = (RelativeLayout) findViewById(R.id.imageViewLayout);
        mImageView = (ImageView) findViewById(R.id.imageView);
        mPostButton = (Button) findViewById(R.id.postLitterButton);
        mDiscardButton = (Button) findViewById(R.id.discardLitterButton);
        Button mRegisterButton = (Button) findViewById(R.id.registerButton);
        Button mLoginButton = (Button) findViewById(R.id.loginButton);
        Button mGotoLogin = (Button) findViewById(R.id.gotoLoginButton);
        Button mGotoRegister = (Button) findViewById(R.id.gotoRegisterButton);
        mEmailEditText = (EditText) findViewById(R.id.emailEditText);
        mLoginEmailEditText = (EditText) findViewById(R.id.loginEmailEditText);
        mPasswordEditText = (EditText) findViewById(R.id.passwordEditText);
        mLoginPasswordEditText = (EditText) findViewById(R.id.loginPasswordEditText);


        //default
        startupUI();
        user = gson.fromJson(helperMethods.getData(this, "user", ""), User.class);


        // Litter
        mPostButton.setVisibility(View.GONE);
        mDiscardButton.setVisibility(View.GONE);

        navigation = (BottomNavigationView) findViewById(R.id.navigation);
        navigation.setOnNavigationItemSelectedListener(mOnNavigationItemSelectedListener);

        // location stuff
        locationManager = (LocationManager) this.getSystemService(Context.LOCATION_SERVICE);
        getUserLocation();
        isLocationEnabled();
        checkPermission();

        //retrofit

        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                //.baseUrl("http://192.168.1.169:8080")
                .addConverterFactory(GsonConverterFactory.create(gsonBuilder))
                .build();


        // actions
        mRegisterButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                UserAPI userAPI = retrofit.create(UserAPI.class);

                User user = new User(0,mEmailEditText.getText().toString(),mPasswordEditText.getText().toString(),"22172","username");
                Call<User> call = userAPI.register(user);
                //register user
                Callback<User> callback = new Callback<User>() {
                    @Override
                    public void onResponse(Call<User> call, Response<User> response) {
                        if (response.body().getId() > 0) {
                            signIn(response.body());
                            mLoginMenuItem.setVisible(false);
                            mLogoutMenuItem.setVisible(true);
                            showLoggedIn();
                            return;
                        }
                        new HelperMethods().showMessage(getApplicationContext(), "Error!","Unable to Register.");
                    }

                    @Override
                    public void onFailure(Call<User> call, Throwable t) {
                        new HelperMethods().showMessage(getApplicationContext(), "Error!","Unable to Register.");

                    }
                };
                call.enqueue(callback);
            }
        });
        mGotoLogin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mLoginLayout.setVisibility(View.VISIBLE);
                mDashboardLayout.setVisibility(View.GONE);
            }
        });
        mGotoRegister.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mLoginLayout.setVisibility(View.GONE);
                mDashboardLayout.setVisibility(View.VISIBLE);
            }
        });
        mLoginButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                UserAPI userAPI = retrofit.create(UserAPI.class);
                User user = new User(0,mLoginEmailEditText.getText().toString(), mLoginPasswordEditText.getText().toString(),"", "");
                Call<User> call = userAPI.login(user);
                //Login user
                Callback<User> callback = new Callback<User>() {
                    @Override
                    public void onResponse(Call<User> call, Response<User> response) {
                        if (response.body().getId() > 0) {
                            signIn(response.body());
                            mLoginMenuItem.setVisible(false);
                            mLogoutMenuItem.setVisible(true);
                            showLoggedIn();
                            return;
                        }
                     new HelperMethods().showMessage(getApplicationContext(), "Error!", "Unable to login.");
                    }

                    @Override
                    public void onFailure(Call<User> call, Throwable t) {
                        new HelperMethods().showMessage(getApplicationContext(), "Error!", "Unable to login.");
                    }
                };
                call.enqueue(callback);

            }
        });

        mPostButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                AlertDialog.Builder builder;

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    builder = new AlertDialog.Builder(getApplicationContext(), android.R.style.Theme_Material_Dialog_Alert);
                } else {
                    builder = new AlertDialog.Builder(getApplicationContext());
                }
                builder.setTitle("Post Litter")
                        .setMessage("Are you sure you want to post this litter?")
                        .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                // post litter

                                Litter litter = new Litter(0,user.getId(), new Date().getTime(), 0, 0, userLocation.getLatitude(), userLocation.getLongitude(), mImageView.getDrawable(),"");
                                postLitter(litter);

                            }
                        })
                        .setNegativeButton(android.R.string.no, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                // do nothing
                            }
                        })
                        .setIcon(android.R.drawable.ic_dialog_alert)
                        .show();


            }
        });
        mDiscardButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                mImageView.setImageResource(android.R.color.transparent);
                showCamera();
            }
        });

    }

    @Override
    public void handleLitter(String result) {
        // Create the adapter to convert the array to views
        List<Litter> litters = gson.fromJson(result, new TypeToken<List<Litter>>() {}.getType());
        LitterAdapter adapter = new LitterAdapter(this, litters);

        // Attach the adapter to a ListView
        ListView listView = (ListView) findViewById(R.id.litterList);
        listView.setAdapter(adapter);
    }

    public void checkPermission() {
        if ((ContextCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) || (ContextCompat.checkSelfPermission(this, Manifest.permission.WRITE_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED)) {

            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.WRITE_EXTERNAL_STORAGE},
                    MY_PERMISSION_ACCESS_FINE_LOCATION);
        } else {
            getUserLocation();
        }
    }

    private void getUserLocation() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

            return;
        }
        locationManager.requestLocationUpdates(LocationManager.GPS_PROVIDER,
                2000,
                10, locationListenerGPS);
    }

    protected void onResume(){
        super.onResume();
        isLocationEnabled();
    }

    private void isLocationEnabled() {

        if(!locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)){
            AlertDialog.Builder alertDialog=new AlertDialog.Builder(this);
            alertDialog.setTitle("Enable Location");
            alertDialog.setMessage("Your locations setting is not enabled. Please enabled it in settings menu.");
            alertDialog.setPositiveButton("Location Settings", new DialogInterface.OnClickListener(){
                public void onClick(DialogInterface dialog, int which){
                    Intent intent=new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
                    startActivity(intent);
                }
            });
            alertDialog.setNegativeButton("Cancel", new DialogInterface.OnClickListener(){
                public void onClick(DialogInterface dialog, int which){
                    dialog.cancel();
                }
            });
            AlertDialog alert=alertDialog.create();
            alert.show();
        }

    }

    LocationListener locationListenerGPS=new LocationListener() {
        @Override
        public void onLocationChanged(android.location.Location location) {
            double latitude=location.getLatitude();
            double longitude=location.getLongitude();
            getLitter(litterRadius, latitude, longitude, 0);
            userLocation = location;
        }

        @Override
        public void onStatusChanged(String provider, int status, Bundle extras) {

        }

        @Override
        public void onProviderEnabled(String provider) {

        }

        @Override
        public void onProviderDisabled(String provider) {

        }
    };
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {

        switch (requestCode) {
            case MY_PERMISSION_ACCESS_FINE_LOCATION: {
                // If request is cancelled, the result arrays are empty.
                if (grantResults.length > 0
                        && grantResults[0] == PackageManager.PERMISSION_GRANTED) {

                    getUserLocation();
                    // permission was granted, yay! Do the
                    // contacts-related task you need to do.

                } else {
                    //TODO: permission denied message
                    // permission denied, boo! Disable the
                    // functionality that depends on this permission.
                }
                return;
            }


        }


        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);

        switch (requestCode) {
            case REQUEST_IMAGE_CAPTURE: {
                if (resultCode == RESULT_OK) {
                    Bundle extras = data.getExtras();
                    if (extras != null) {
                        Bitmap imageBitmap = (Bitmap) extras.get("data");
                        mImageLayout.setVisibility(View.VISIBLE);
                        mLoginLayout.setVisibility(View.GONE);
                        mImageView.setImageBitmap(imageBitmap);
                    }
                }
            }
            break;
            default: {
            }
        }
    }



    //retrofit
    public void getLitter(int radius, double lat, double lng, int creator) {
        LitterAPI litterAPI = retrofit.create(LitterAPI.class);
        Call<JsonArray> call = litterAPI.getLitter(radius, lat, lng, creator);
        Callback callback = new Callback() {
            @Override
            public void onResponse(Call call, Response response) {
                JsonArray litters = (JsonArray) response.body();
                System.out.println(litters);
                List<Litter> items = gson.fromJson(litters, new TypeToken<List<Litter>>() {}.getType());
                LitterAdapter litterAdapter = new LitterAdapter(mContext, items);
                mLitterListView.setAdapter(litterAdapter);
            }

            @Override
            public void onFailure(Call call, Throwable t) {

            }
        };
        call.enqueue(callback);
    }
    public void postLitter(final Litter litter) {

            LitterAPI litterAPI = retrofit.create(LitterAPI.class);
            File file = new File(helperMethods.saveImageLocally(litter.getLitter_image()));

            RequestBody files = RequestBody.create(MediaType.parse("image/*"), file);
            RequestBody file_image = RequestBody.create(MediaType.parse("text/plain"), helperMethods.FileToBitmap(file));
            RequestBody created_by = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_created_by());
            RequestBody created_at = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_created_at());
            RequestBody cleaned_by = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_cleaned_by());
            RequestBody cleaned_at = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_cleaned_at());
            RequestBody location_lat = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_location_lat());
            RequestBody location_long = RequestBody.create(MediaType.parse("text/plain"), "" + litter.getLitter_location_long());
            Call<Result> call = litterAPI.postLitter(files, file_image, created_by, created_at, cleaned_by, cleaned_at, location_lat, location_long);
            Callback callback = new Callback() {
                @Override
                public void onResponse(Call call, Response response) {
                    Result status = (Result) response.body();
                    if (status.getStatus().equals("created")) {
                        mImageView.setImageResource(android.R.color.transparent);
                        new HelperMethods().showMessage(getApplicationContext(),"Success!", "Litter has been posted!");
                        showList();
                    } else {
                        System.out.print(status.getStatus());
                    }
                }

                @Override
                public void onFailure(Call call, Throwable t) {
                    new HelperMethods().showMessage(getApplicationContext(),"Error!", "Unable to post Litter!");

                }
            };
            call.enqueue(callback);





    }


    public void startupUI() {
        mDashboardLayout.setVisibility(View.GONE);
        mLoginLayout.setVisibility(View.GONE);
        mImageLayout.setVisibility(View.GONE);
        mLitterListView.setVisibility(View.VISIBLE);
    }
    public void showDashboard() {
        mLitterListView.setVisibility(View.GONE);
        mLoginLayout.setVisibility(View.VISIBLE);
        mDashboardLayout.setVisibility(View.GONE);
        mImageLayout.setVisibility(View.GONE);
        mPostButton.setVisibility(View.GONE);
        mDiscardButton.setVisibility(View.GONE);
    }

    public void showCamera() {
        mImageLayout.setVisibility(View.VISIBLE);
        mLoginLayout.setVisibility(View.GONE);
        mLitterListView.setVisibility(View.GONE);
        mDashboardLayout.setVisibility(View.GONE);
        mPostButton.setVisibility(View.VISIBLE);
        mDiscardButton.setVisibility(View.VISIBLE);
        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(getPackageManager()) != null) {
            startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
        }
    }
    public void showLoggedIn() {
        if (user != null) {
            mLitterListView.setVisibility(View.VISIBLE);
            mLoginLayout.setVisibility(View.GONE);
            mDashboardLayout.setVisibility(View.GONE);
            mImageLayout.setVisibility(View.GONE);
            mPostButton.setVisibility(View.GONE);
            mDiscardButton.setVisibility(View.GONE);
            if (userLocation != null) {
                getLitter(litterRadius, userLocation.getLatitude(), userLocation.getLongitude(), user.getId());
            }
        } else {
            showDashboard();
        }
    }
    public void showList(){
        mLitterListView.setVisibility(View.VISIBLE);
        mLoginLayout.setVisibility(View.GONE);
        mDashboardLayout.setVisibility(View.GONE);
        mImageLayout.setVisibility(View.GONE);
        mPostButton.setVisibility(View.GONE);
        mDiscardButton.setVisibility(View.GONE);
        if (userLocation != null) {
            getLitter(litterRadius, userLocation.getLatitude(), userLocation.getLongitude(), 0);
        }
    }
    public void signOut() {
        helperMethods.removeData(this, "user");
        user = null;
    }
    public void signIn(User loggedInUser) {
        user = loggedInUser;
        String stringUser = gson.toJson(loggedInUser);
        helperMethods.setData(mContext, "user", stringUser, false);
    }

}



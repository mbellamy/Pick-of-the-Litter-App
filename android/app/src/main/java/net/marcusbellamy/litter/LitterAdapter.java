package net.marcusbellamy.litter;

import android.content.Context;
import android.content.DialogInterface;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.location.Address;
import android.location.Location;
import android.net.Uri;
import android.os.Build;
import android.support.v7.app.AlertDialog;
import android.util.Base64;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.squareup.picasso.Picasso;

import net.marcusbellamy.litter.API.LitterAPI;
import net.marcusbellamy.litter.API.UserAPI;
import net.marcusbellamy.litter.Models.Litter;
import net.marcusbellamy.litter.Models.Result;
import net.marcusbellamy.litter.Models.User;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by fullscreen on 8/11/17.
 */

public class LitterAdapter extends ArrayAdapter<Litter> {
    private Context context;
    private Retrofit retrofit;
    private User user;

    private AlertDialog.Builder builder;

    private final static String BASE_URL = "http://litter-backend.herokuapp.com/";

    public LitterAdapter(Context context, List<Litter> litters) {

        super(context, 0, litters);
        this.context = context;

        Gson gsonBuilder = new GsonBuilder()
                .setLenient()
                .create();

        retrofit = new Retrofit.Builder()
                .baseUrl(BASE_URL)
                .addConverterFactory(GsonConverterFactory.create(gsonBuilder))
                .build();

        HelperMethods helperMethods = new HelperMethods();
        user = gsonBuilder.fromJson(helperMethods.getData(getContext(), "user", ""), User.class);



    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        // Get the data item for this position


        final Litter litter = getItem(position);
        // Check if an existing view is being reused, otherwise inflate the view
        if (convertView == null) {
            convertView = LayoutInflater.from(getContext()).inflate(R.layout.litter_adapter, parent, false);
        }
        // Lookup view for data population
        TextView litterAddress = (TextView) convertView.findViewById(R.id.litterAddress);
        ImageView litterImage = (ImageView) convertView.findViewById(R.id.litterImage);
        Button mFlagButton = (Button) convertView.findViewById(R.id.litterFlagButton);
        Button mCleanButton = (Button) convertView.findViewById(R.id.litterCleanButton);
        mFlagButton.setVisibility(View.VISIBLE);

        //check if these litter object belong to the use
        if (litter != null && user != null) {
            if (litter.getLitter_created_by() == user.getId()) {
                mFlagButton.setVisibility(View.GONE);
                if (litter.getLitter_cleaned_at() > 0) {
                    mCleanButton.setVisibility(View.GONE);
                    convertView.setBackgroundColor(convertView.getResources().getColor(android.R.color.holo_green_dark));
                }
            }
        }
        mFlagButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    builder = new AlertDialog.Builder(context, android.R.style.Theme_Material_Dialog_Alert);
                } else {
                    builder = new AlertDialog.Builder(context);
                }
                builder.setTitle("Flag Image")
                        .setMessage("Are you sure you want to flag this image?")
                        .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {
                                // continue with delete
                                LitterAPI litterAPI = retrofit.create(LitterAPI.class);
                                //set flag

                                if (litter != null) {
                                    Call<Result> call = litterAPI.setLitterFlag(litter.getLitter_id());

                                    Callback callback = new Callback() {
                                        @Override
                                        public void onResponse(Call call, Response response) {
                                            //TODO:
                                            Result status = (Result) response.body();
                                            if (status.getStatus().equals("flagged")) {
                                                new HelperMethods().showMessage(getContext(),"Success!", "Image Flagged for review!");
                                            }
                                        }

                                        @Override
                                        public void onFailure(Call call, Throwable t) {
                                            new HelperMethods().showMessage(getContext(),"Error!", "Image unable to be flagged!");

                                        }
                                    };
                                call.enqueue(callback);
                                }
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
        mCleanButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                if (user == null) {
                    return;
                }



                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                    builder = new AlertDialog.Builder(context, android.R.style.Theme_Material_Dialog_Alert);
                } else {
                    builder = new AlertDialog.Builder(context);
                }
                builder.setTitle("Clean litter")
                        .setMessage("Are you sure you want to clean this litter?")
                        .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int which) {

                                //set litter as cleaned
                                LitterAPI litterAPI = retrofit.create(LitterAPI.class);
                                if (litter != null) {
                                    litter.setLitter_cleaned_by(user.getId());
                                    litter.setLitter_cleaned_at(new Date().getTime());
                                }
                                Call<Result> call = litterAPI.setLitterCleaned(litter);
                                Callback callback = new Callback() {
                                    @Override
                                    public void onResponse(Call call, Response response) {
                                        Result status = (Result) response.body();
                                        if (status.getStatus().equals("cleaned")) {
                                            new HelperMethods().showMessage(getContext(), "Success!", "Image Flagged for review!");
                                        }
                                    }

                                    @Override
                                    public void onFailure(Call call, Throwable t) {
                                        new HelperMethods().showMessage(getContext(), "Error!", "Unable to remove litter from database!");

                                    }
                                };
                                call.enqueue(callback);
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
        // Populate the data into the template view using the data object
        HelperMethods helperMethods = new HelperMethods();

        try {
            if (litter != null) {
                List<Address> address = helperMethods.geocodePoint(getContext(), litter.getLocation());
                if (address != null) {
                    litterAddress.setText(address.get(0).getAddressLine(0));
                }
            }
        } catch (NullPointerException e) {
            new HelperMethods().showMessage(getContext(),"Error!", "Unable to obtain location!");

        }

// add when revert back to binary image storage
//
//        Picasso.Builder builder = new Picasso.Builder(context);
//        builder.listener(new Picasso.Listener()
//        {
//            @Override
//            public void onImageLoadFailed(Picasso picasso, Uri uri, Exception exception)
//            {
//                exception.printStackTrace();
//            }
//        });
//        builder.build().load(BASE_URL + litter.getLitter_image_url()).into(litterImage);
        if (litter != null) {
            litterImage.setImageBitmap(helperMethods.base64ToBitmap(litter.getLitter_image_url()));
        }

        // Return the completed view to render on screen
        return convertView;
    }
}

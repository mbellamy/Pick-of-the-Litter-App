package net.marcusbellamy.litter;

import android.content.Context;
import android.content.DialogInterface;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.drawable.Drawable;
import android.location.Address;
import android.location.Geocoder;
import android.location.Location;
import android.media.Image;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.support.v7.app.AlertDialog;
import android.util.Base64;
import android.util.Log;
import android.widget.ImageView;
import android.widget.Toast;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;

import static android.content.ContentValues.TAG;
import static android.content.Context.MODE_PRIVATE;

/**
 * Created by cavalierrevolt on 11/5/17.
 */

public class HelperMethods {

    //constants
    private final static String MY_PREF = "MySharedPreferences";

    //shared preferences
    SharedPreferences sharedPreferences;
    SharedPreferences.Editor editor;

    //methods
    //shared preference
    public Boolean setData(Context context, String name, String data, Boolean flag) {
        //set sharedpreference string
        editor = context.getSharedPreferences(MY_PREF, MODE_PRIVATE).edit();
        // send null with flag to remove
        if (data == null && flag) {
            editor.remove(name);
            return true;
        }
        if (flag) {
            return editor.putString(name, data).commit();
        } else {
            editor.putString(name, data).apply();
            return true;
        }
    }
    public String getData(Context context, String name, String defaultValue) {
        // get shared preference string
        sharedPreferences = context.getSharedPreferences(MY_PREF, MODE_PRIVATE);
        return sharedPreferences.getString(name, defaultValue);
    }
    public Boolean removeData(Context context, String name) {
        return setData(context, name, null, true);
    }

    //image functions
    public String saveImageLocally(Drawable drawable) {
        File root = Environment.getExternalStorageDirectory();
        File cachePath = new File(root.getAbsolutePath() + "/DCIM/Camera/image.jpg");
        try {
            cachePath.createNewFile();
            FileOutputStream ostream = new FileOutputStream(cachePath);
            convertToBitmap(drawable, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight()).compress(Bitmap.CompressFormat.JPEG, 100, ostream);
            ostream.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return cachePath.getPath();
    }
    public Bitmap convertToBitmap(Drawable drawable, int widthPixels, int heightPixels) {
        Bitmap mutableBitmap = Bitmap.createBitmap(widthPixels, heightPixels, Bitmap.Config.ARGB_8888);
        Canvas canvas = new Canvas(mutableBitmap);
        drawable.setBounds(0, 0, widthPixels, heightPixels);
        drawable.draw(canvas);
        return mutableBitmap;
    }
    public List<Address> geocodePoint(Context context, Location location) {
        Geocoder gc = new Geocoder(context);
        if(gc.isPresent()) {
            try {
               return gc.getFromLocation(location.getLatitude(), location.getLongitude(), 1);
            } catch (Exception e) {
                new HelperMethods().showMessage(context,"Error!", "Unable to obtain location.");
            }

        }
        return null;
    }
    public Bitmap base64ToBitmap(String encodedImage) {
        byte[] decodedString = Base64.decode(encodedImage, Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(decodedString, 0, decodedString.length);
    }
    public String FileToBitmap(File file) {
        Bitmap bm = BitmapFactory.decodeFile(file.getPath());
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bm.compress(Bitmap.CompressFormat.JPEG, 100, baos);
        byte[] b = baos.toByteArray();

        return Base64.encodeToString(b, Base64.DEFAULT);
    }
    public void showMessage(Context context, String title, String message) {
        AlertDialog.Builder builder;
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            builder = new AlertDialog.Builder(context, android.R.style.Theme_Material_Dialog_Alert);
        } else {
            builder = new AlertDialog.Builder(context);
        }
        builder.setTitle(title)
                .setMessage(message)
                .setPositiveButton(android.R.string.yes, new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int which) {
                        // continue with delete
                    }
                })
                .setIcon(android.R.drawable.ic_dialog_alert)
                .show();
    }
}


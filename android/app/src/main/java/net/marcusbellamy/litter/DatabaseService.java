package net.marcusbellamy.litter;

import android.os.AsyncTask;
import android.util.Log;

import net.marcusbellamy.litter.Interface.AsyncInterface;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;


/**
 * Created by fullscreen on 8/11/17.
 */

public class DatabaseService extends AsyncTask {
    private AsyncInterface mCallback;

    public DatabaseService(AsyncInterface callback) {
        super();
        mCallback= callback;
    }

    @Override
    protected void onPreExecute() {
        super.onPreExecute();
    }

    @Override
    protected void onPostExecute(Object o) {
        super.onPostExecute(o);
        mCallback.handleLitter(o.toString());
    }

    @Override
    protected String doInBackground(Object... params) {
        String API_URL = "http://192.168.1.169:8080/API";
        int radius = (int) params[0];
        double lat = (double) params[1];
        double lng = (double) params[2];
        try {
            URL url = new URL(API_URL + "?call=l_g&radius=" + radius + "&lat=" + lat + "&lng=" + lng);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            try {
                BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
                StringBuilder stringBuilder = new StringBuilder();
                String line;
                while ((line = bufferedReader.readLine()) != null) {
                    stringBuilder.append(line).append("\n");
                }

                bufferedReader.close();
                return stringBuilder.toString();
            }
            finally{
                urlConnection.disconnect();
            }
        }
        catch(Exception e) {
            Log.e("ERROR", e.getMessage(), e);
            return null;
        }
    }



}

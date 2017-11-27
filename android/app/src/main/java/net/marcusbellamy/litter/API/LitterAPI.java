package net.marcusbellamy.litter.API;

import net.marcusbellamy.litter.Models.Litter;
import net.marcusbellamy.litter.Models.Result;
import net.marcusbellamy.litter.Models.User;


import com.google.gson.JsonArray;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.Query;

/**
 * Created by cavalierrevolt on 11/5/17.
 */

public interface LitterAPI {
    @GET("API?call=l_g")
    Call<JsonArray> getLitter(@Query("radius") int radius, @Query("lat") double lat, @Query("lng") double lng, @Query("creator") int id);

    @Multipart
    @POST("API?call=l_c")
    Call<Result> postLitter(@Part("file") RequestBody files, @Part("file_image") RequestBody file_image, @Part("created_by") RequestBody created_by, @Part("created_at") RequestBody created_at, @Part("cleaned_by") RequestBody cleaned_by, @Part("cleaned_at") RequestBody cleaned_at, @Part("location_lat") RequestBody location_lat, @Part("location_long") RequestBody location_long);

    @POST("API?call=l_f")
    Call<Result> setLitterFlag(@Query("id") int id);

    @POST("API?call=l_cl")
    Call<Result> setLitterCleaned(@Body Litter litter);
}

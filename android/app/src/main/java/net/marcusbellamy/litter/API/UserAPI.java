package net.marcusbellamy.litter.API;

import net.marcusbellamy.litter.Models.Litter;
import net.marcusbellamy.litter.Models.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.Query;

/**
 * Created by cavalierrevolt on 11/5/17.
 */

public interface UserAPI {
    @POST("Register")
    Call<User> register(@Body User user);

    @POST("Login")
    Call<User> login(@Body User user);
}


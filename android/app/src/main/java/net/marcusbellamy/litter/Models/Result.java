package net.marcusbellamy.litter.Models;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by cavalierrevolt on 11/6/17.
 */

public class Result {

    @SerializedName("status")
    @Expose
    String status;


    public Result(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Result{" +
                "status='" + status + '\'' +
                '}';
    }
}

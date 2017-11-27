package net.marcusbellamy.litter.Models;

import android.graphics.drawable.Drawable;
import android.location.Location;

/**
 * Created by fullscreen on 8/11/17.
 */

public class Litter {
    public int litter_id;
    public int litter_created_by;
    public long litter_created_at;
    public int litter_cleaned_by;
    public long litter_cleaned_at;
    public double litter_location_long;
    public double litter_location_lat;
    public Drawable litter_image;
    public String litter_image_url;

    public Litter(){}
    public Litter(int litter_id, int litter_created_by, long litter_created_at, int litter_cleaned_by,
                  long litter_cleaned_at, double litter_location_lat, double litter_location_long, Drawable litter_image, String litter_image_url) {
        this.litter_id = litter_id;
        this.litter_created_by = litter_created_by;
        this.litter_created_at = litter_created_at;
        this.litter_cleaned_by = litter_cleaned_by;
        this.litter_cleaned_at = litter_cleaned_at;
        this.litter_location_long = litter_location_long;
        this.litter_location_lat = litter_location_lat;
        this.litter_image = litter_image;
        this.litter_image_url = litter_image_url;
    }

    public int getLitter_id() {
        return litter_id;
    }

    public void setLitter_id(int litter_id) {
        this.litter_id = litter_id;
    }

    public int getLitter_created_by() {
        return litter_created_by;
    }

    public void setLitter_created_by(int litter_created_by) {
        this.litter_created_by = litter_created_by;
    }

    public long getLitter_created_at() {
        return litter_created_at;
    }

    public void setLitter_created_at(long litter_created_at) {
        this.litter_created_at = litter_created_at;
    }

    public int getLitter_cleaned_by() {
        return litter_cleaned_by;
    }

    public void setLitter_cleaned_by(int litter_cleaned_by) {
        this.litter_cleaned_by = litter_cleaned_by;
    }

    public long getLitter_cleaned_at() {
        return litter_cleaned_at;
    }

    public void setLitter_cleaned_at(long litter_cleaned_at) {
        this.litter_cleaned_at = litter_cleaned_at;
    }

    public double getLitter_location_long() {
        return litter_location_long;
    }

    public void setLitter_location_long(double litter_location_long) {
        this.litter_location_long = litter_location_long;
    }

    public double getLitter_location_lat() {
        return litter_location_lat;
    }

    public void setLitter_location_lat(double litter_location_lat) {
        this.litter_location_lat = litter_location_lat;
    }

    public Drawable getLitter_image() {
        return litter_image;
    }

    public void setLitter_image(Drawable litter_image) {
        this.litter_image = litter_image;
    }

    public String getLitter_image_url() {
        return litter_image_url;
    }

    public void setLitter_image_url(String litter_image_url) {
        this.litter_image_url = litter_image_url;
    }

    public Location getLocation() {
        Location location = new Location("");
        location.setLatitude(this.getLitter_location_lat());
        location.setLongitude(this.getLitter_location_long());
        return location;
    }
    @Override
    public String toString() {
        return "Litter{" +
                "litter_id=" + litter_id +
                ", litter_created_by=" + litter_created_by +
                ", litter_created_at=" + litter_created_at +
                ", litter_cleaned_by=" + litter_cleaned_by +
                ", litter_cleaned_at=" + litter_cleaned_at +
                ", litter_location_long=" + litter_location_long +
                ", litter_location_lat=" + litter_location_lat +
                ", litter_image='" + litter_image + '\'' +
                '}';
    }
}

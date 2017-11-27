package net.marcusbellamy.litter.Models;

/**
 * Created by cavalierrevolt on 11/5/17.
 */

public class User {

    private int id;
    private String email;
    private String password;
    private String zipcode;
    private String username;
    private static User userInstance = null; // the only instance of the class

    public static User getInstance()
    {
        if (userInstance == null)
        {
            userInstance = new User();
        }
        return userInstance;
    }

    public User() {
    }

    public User(int id, String email, String password, String zipcode, String username) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.zipcode = zipcode;
        this.username = username;

    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getZipcode() {
        return this.zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", zipcode='" + zipcode + '\'' +
                ", username='" + username + '\'' +
                '}';
    }
}
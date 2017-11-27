package net.marcusbellamy.Class;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/** user object **/
public class User {

  private int id;
  private String email;
  private String password;
  private String zipcode;
  private String username;


  public User() {}

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


  /** methods **/

  /** register and authentication **/

  public User Register() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {

      /* build query */
      String query = new StringBuilder()
          .append("INSERT INTO test.table_u1 (user_email, user_username, user_zipcode, user_password) VALUES ('")
          .append(this.email).append("','").append(this.username).append("','").append(this.zipcode)
          .append("','").append(this.password).append("');").toString();

      /* perform sql */
      this.performSQL(stmt, connection, query, this, 1);



    }

    return this;
  }

  public User Authenticate() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {

      /* build query */
      String query = new StringBuilder().append("SELECT * FROM test.table_u1 WHERE user_email='")
          .append(this.email).append("' AND user_password='").append(this.password).append("';").toString();

      /* perform query */
      this.performSQL(stmt, connection, query, this, 0);

    }

    return this;
  }

  private User performSQL(Statement stmt, Connection connection, String query, User user, int type) {
    // type 0 for login; 1 for register

    try {
      stmt = connection.createStatement();

      // type 0 login

      if (type == 0) {
        ResultSet rs = stmt.executeQuery(query);
        this.clear();
        while (rs.next()) {
          /* if user found populate current object with details */
          this.id = rs.getInt("user_id");
          this.username = rs.getString("user_username");
          this.email = rs.getString("user_email");
          this.zipcode = rs.getString("user_zipcode");


        }

        return this;
      }

      // type 1 register
      if (type == 1) {
        int rs = stmt.executeUpdate(query);
        if (rs > 0) {
          /* if row created return user object */
          return user;
        }

      }
      /* empty object on error */
      return new User();


    } catch (SQLException e ) {

      return new User();

    } finally {

      if (stmt != null) {
        try {
          stmt.close();
        } catch (SQLException e) {
          e.printStackTrace();
        }
      }

    }

  }

  /** clear object **/
  private void clear() {

    this.id = 0;
    this.password = "";
    this.email = "";
    this.zipcode = "";
    this.username = "";

  }

  /** to json **/
  private JsonObject toJson() {
    JsonObject json = new JsonObject();
    json.addProperty("id",this.id);
    json.addProperty("email",this.email);
    json.addProperty("username",this.username);
    json.addProperty("zipcode",this.zipcode);

    return json;

  }

  /** check validity **/
  public User isValid() {
    if (this.id <= 0) {
      JsonObject json = new JsonObject();
      json.addProperty("status", "invalid");
      return new User();
    }

    return this;
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

  public String toJSON() {
    Gson gson = new Gson();
    return gson.toJson(this);
  }




}

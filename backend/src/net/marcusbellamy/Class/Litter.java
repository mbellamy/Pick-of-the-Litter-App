package net.marcusbellamy.Class;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.sql.*;
import java.util.Date;

/** litter object **/
public class Litter {

  private int litter_id;
  private int litter_created_by;
  private long litter_created_at;
  private int litter_cleaned_by;
  private long litter_cleaned_at;
  private double litter_location_long;
  private double litter_location_lat;
  private String litter_image;
  public String litter_status;


  public Litter(){}
  public Litter(int litter_id, int litter_created_by, long litter_created_at, int litter_cleaned_by,
      long litter_cleaned_at, double litter_location_long, double litter_location_lat, String litter_image) {
    this.litter_id = litter_id;
    this.litter_created_by = litter_created_by;
    this.litter_created_at = litter_created_at;
    this.litter_cleaned_by = litter_cleaned_by;
    this.litter_cleaned_at = litter_cleaned_at;
    this.litter_location_long = litter_location_long;
    this.litter_location_lat = litter_location_lat;
    this.litter_image = litter_image;
  }

  public String getLitter_status() {
    return litter_status;
  }

  public void setLitter_status(String litter_status) {
    this.litter_status = litter_status;
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

  public void setLitter_location_lat(double getLitter_location_lat) {
    this.litter_location_lat = getLitter_location_lat;
  }

  public String getLitter_image() {
    return litter_image;
  }

  public void setLitter_image(String litter_image) {
    this.litter_image = litter_image;
  }

  /**
   *  create new litter object
   *  on success returns populated object
   *  on failure returns empty object
   *  **/

  public Litter create() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {

      /* build query */
      String query = new StringBuilder()
          .append("INSERT INTO test.table_l1 (litter_created_by, litter_created_at, litter_cleaned_by, litter_cleaned_at, litter_location_long, litter_location_lat, litter_image) VALUES ('")
          .append(this.litter_created_by).append("','").append(this.litter_created_at).append("','").append(this.litter_cleaned_by)
          .append("','").append(this.litter_cleaned_at).append("','").append(this.litter_location_long).append("','").append(this.litter_location_lat).append("',\"").append(this.litter_image).append("\");").toString();

      /* perform sql query */
      return this.performSQL(stmt, connection, query, 0);

    }
    return new Litter();
  }

  /**
   *  updates litter object
   *  on success returns populated object
   *  on failure returns empty object
   *  **/

  public Litter update() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {
      /* build query */

      String query = new StringBuilder()
          .append("UPDATE test.table_l1 SET litter_created_by=" + this.litter_created_by + ", litter_created_at=" + this.litter_created_at + ", litter_cleaned_by=" + this.litter_cleaned_by + ", litter_cleaned_at=" + this.litter_cleaned_at + ", litter_location_long=" + this.litter_location_long + ", litter_location_lat=" + this.litter_location_lat + ", litter_image='" + this.litter_image + "' WHERE litter_id=" + this.litter_id + ";").toString();

      /* perform query */
      return this.performSQL(stmt, connection, query, 1);
    }
    return new Litter();
  }

  /**
   *  deletes litter object
   *  on success returns populated object
   *  on failure returns empty object
   *  **/

  public Litter delete() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {

      /* build query */
      String query = new StringBuilder()
          .append("DELETE FROM test.table_l1 WHERE litter_id=" + this.litter_id + ";").toString();

      /* perform query */
      return this.performSQL(stmt, connection, query, 2);
    }
    return this;
  }

  public Litter flag() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;

    if (connection != null) {

      /* build query */
      String query = new StringBuilder()
              .append("UPDATE test.table_l1 SET litter_flag = litter_flag + 1 WHERE litter_id=" + this.litter_id + ";").toString();

      /* perform query */
      return this.performSQL(stmt, connection, query, 3);
    }
    return this;
  }

  public Litter cleaned() {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;
    long date = new Date().getTime();
    if (connection != null) {

      /* build query */
      String query = new StringBuilder()
              .append("UPDATE test.table_l1 SET litter_cleaned_by = " + this.getLitter_cleaned_by() + ", litter_cleaned_at=" + this.getLitter_cleaned_at() + " WHERE litter_id=" + this.litter_id + ";").toString();

      /* perform query */
      return this.performSQL(stmt, connection, query, 4);
    }
    return this;
  }
  /**
   *  list litter object
   *  on success returns populated jsonarray of litter objects
   *  on failure returns empty jsonarray object
   *  **/

  public JsonArray list(int radius, double lat, double lng, int creator) {
    DB db = new DB();
    Connection connection = db.dbConnection();
    Statement stmt = null;
    String creatorString = " > 0 AND litter_cleaned_by = 0 ";

    if (connection != null) {
      /* build query */
      //check if user created the litter object
      if (creator > 0) {
        creatorString = " = " + creator;
      }

      String q = "SELECT *,(((acos(sin((" + lat + "*pi()/180.00000)) * sin((`litter_location_lat`*pi()/180.00000))+cos((" + lat + "*pi()/180.00000)) * cos((`litter_location_lat`*pi()/180.00000)) * cos((("+ lng + "- `litter_location_long`)* pi()/180.00000))))*180.00000/pi())*60*1.1515)" +
              "as litter_distance " +
              "FROM test.table_l1 WHERE litter_flag=0 AND litter_created_by "  + creatorString +
              " HAVING litter_distance <= " + radius;
      try {
        stmt = connection.createStatement();
        JsonArray jsonArray = new JsonArray();

        /*perform query */
        ResultSet rs = stmt.executeQuery(q);
        while (rs.next()) {
          JsonObject json = new JsonObject();
          json.addProperty("litter_id", rs.getInt("litter_id"));
          json.addProperty("litter_created_at", rs.getLong("litter_created_at"));
          json.addProperty("litter_created_by", rs.getInt("litter_created_by"));
          json.addProperty("litter_cleaned_at", rs.getLong("litter_cleaned_at"));
          json.addProperty("litter_cleaned_by", rs.getInt("litter_cleaned_by"));
          json.addProperty("litter_location_lat", rs.getDouble("litter_location_lat"));
          json.addProperty("litter_location_long", rs.getDouble("litter_location_long"));
          json.addProperty("litter_image_url", rs.getString("litter_image"));
          json.addProperty("litter_distance", rs.getDouble("litter_distance"));
          jsonArray.add(json);
        }
        System.out.println(jsonArray);
        return jsonArray;


      } catch (SQLException e) {

        /* return empty array on error */
        return new JsonArray();

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
    return new JsonArray();
  }


  private void createTable() {
    String query = new StringBuilder()
            .append("CREATE TABLE IF NOT EXISTS table_l1 (litter_created_by INT(11), litter_created_at LONG, litter_cleaned_by, litter_cleaned_at, litter_location_long, litter_location_lat, litter_image) VALUES ('")
            .append(this.litter_created_by).append("','").append(this.litter_created_at).append("','").append(this.litter_cleaned_by)
            .append("','").append(this.litter_cleaned_at).append("','").append(this.litter_location_long).append("','").append(this.litter_location_lat).append("',\"").append(this.litter_image).append("\");").toString();

  }
  /* SQL Statements executed */
  private Litter performSQL(Statement stmt, Connection connection, String query, int type) {

    //save query

    try {
      stmt = connection.createStatement();

      /* type 0 create */

      if (type == 0) {
        System.out.println(query);

        int rs = stmt.executeUpdate(query);
        if (rs > 0) {
          System.out.println(this.toString());
          return this;
        } else {
          return new Litter();
        }
      }

      /* type 1 update */
      if (type == 1) {
        System.out.println(query);

        int rs = stmt.executeUpdate(query);
        if (rs > 0) {

          return this;
        } else {
          return new Litter();
        }
      }

      /* type 2 delete */
      if (type == 2) {

        int rs = stmt.executeUpdate(query);
        if (rs > 0) {

          /* create object set id as -99 to indicate deleted */
          Litter lit = new Litter();
          lit.litter_id = -99;
          return lit;
        } else {
          return new Litter();
        }
      }

      /* type 3 flag */
      if (type == 3) {

        int rs = stmt.executeUpdate(query);
        if (rs > 0) {

          /* return object with id indicting flagged */

          return this;
        } else {
          return new Litter();
        }
      }

      /* type 4 cleaned */
      if (type == 4) {

        int rs = stmt.executeUpdate(query);
        if (rs > 0) {
          /* return object with id indicting cleaned */

          return this;
        } else {
          return new Litter();
        }
      }


      return new Litter();

    } catch (SQLException e) {
      e.printStackTrace();
      Litter tester = new Litter();
              tester.setLitter_status(e.getLocalizedMessage());
      return tester;

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

  /** method to turn object to json **/

  public JsonObject toJSON() {
    JsonObject json = new JsonObject();
    json.addProperty("litter_id", this.litter_id);
    json.addProperty("litter_created_by", this.litter_created_by);
    json.addProperty("litter_created_at", this.litter_created_at);
    json.addProperty("litter_cleaned_by", this.litter_cleaned_by);
    json.addProperty("litter_cleaned_at", this.litter_cleaned_at);
    json.addProperty("litter_location_long", this.litter_location_long);
    json.addProperty("litter_location_lat", this.litter_location_lat);

    return json;
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

  /** methods to return success/fail json **/

  public JsonObject successfulCreation() {
    JsonObject json = new JsonObject();
    json.addProperty("status", "created");
    return json;
  }
  public JsonObject failedCreation() {
    JsonObject json = new JsonObject();
    json.addProperty("status", "failed");
    return json;
  }
  public JsonObject successfulDeletion() {
    JsonObject json = new JsonObject();
    json.addProperty("status", "deleted");
    return json;
  }
  public JsonObject customMessage(String string) {
    JsonObject json = new JsonObject();
    json.addProperty("status", string);
    return json;
  }
}

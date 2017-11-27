package net.marcusbellamy.Class;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB {

  private Connection connection;

  public Connection dbConnection() {


    /* get creds and connect to db **/
    Cred cred = new Cred();

    try {
      Class.forName("com.mysql.cj.jdbc.Driver");
    } catch (ClassNotFoundException e) {
      e.printStackTrace();

      return connection;
    }

    try {
      // make connection
      connection = DriverManager.getConnection(cred.getUrl(), cred.getUsr(), cred.getPas());
      return connection;
    } catch (SQLException e) {

      System.out.println("Connection failed: " + e.getLocalizedMessage());
      return connection;

    }

  }


}

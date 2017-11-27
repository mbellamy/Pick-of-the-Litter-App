package net.marcusbellamy.Servlet;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.marcusbellamy.Class.Helper;
import net.marcusbellamy.Class.User;

@WebServlet(name = "Login")
public class Login extends HttpServlet {

  protected void doPost(HttpServletRequest request,
      HttpServletResponse response)
      throws ServletException, IOException {

    Helper helper = new Helper();
    Gson gson = new Gson();

    User user = gson.fromJson(helper.getBody(request), User.class);

    //login
    user = user.Authenticate();

    // setup response
    response.setContentType("application/json");

    String token = helper.createJWT(String.valueOf(user.getId()), "auth_service", "login", 300000 * 12 * 12);
    response.addHeader("token", token);
    // Get the printwriter object from response to write the required json object to the output stream
    PrintWriter out = response.getWriter();
    // Assuming your json object is **jsonObject**, perform the following, it will return your json object
    out.print(user.isValid().toJSON());
    out.flush();

  }

  protected void doGet(HttpServletRequest request,
      HttpServletResponse response)
      throws ServletException, IOException {
  }
}

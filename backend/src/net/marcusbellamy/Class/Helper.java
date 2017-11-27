package net.marcusbellamy.Class;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.security.Key;
import java.util.Date;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.DatatypeConverter;

public class Helper {

  public String getBody(HttpServletRequest request) throws IOException {

    String body = null;
    StringBuilder stringBuilder = new StringBuilder();
    BufferedReader bufferedReader = null;

    try {
      InputStream inputStream = request.getInputStream();
      if (inputStream != null) {
        bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
        char[] charBuffer = new char[128];
        int bytesRead = -1;
        while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
          stringBuilder.append(charBuffer, 0, bytesRead);
        }
      } else {
        stringBuilder.append("");
      }
    } catch (IOException ex) {
        ex.printStackTrace();
    } finally {
      if (bufferedReader != null) {
        try {
          bufferedReader.close();
        } catch (IOException ex) {
          ex.printStackTrace();
        }
      }
    }

    body = stringBuilder.toString();
    return body;
  }


  //Sample method to construct a JWT
  public String createJWT(String id, String issuer, String subject, long ttlMillis) {
    Cred cred = new Cred();

    //The JWT signature algorithm we will be using to sign the token
    SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;

    long nowMillis = System.currentTimeMillis();
    Date now = new Date(nowMillis);

    //We will sign our JWT with our ApiKey secret
    byte[] apiKeySecretBytes = DatatypeConverter.parseBase64Binary(cred.getApiKey());
    Key signingKey = new SecretKeySpec(apiKeySecretBytes, signatureAlgorithm.getJcaName());

    //Let's set the JWT Claims
    JwtBuilder builder = Jwts.builder().setId(id)
        .setIssuedAt(now)
        .setSubject(subject)
        .setIssuer(issuer)
        .signWith(signatureAlgorithm, signingKey);

    //if it has been specified, let's add the expiration
    if (ttlMillis >= 0) {
      long expMillis = nowMillis + ttlMillis;
      Date exp = new Date(expMillis);
      builder.setExpiration(exp);
    }

    //Builds the JWT and serializes it to a compact, URL-safe string

    return builder.compact();

  }

  /** return response function
   *
   * @param response
   **/
  public void presentResponse(HttpServletResponse response, Object json) {

    response.setContentType("application/json");

    // Get the printwriter object from response to write the required json object to the output stream
    PrintWriter out = null;
    try {
      out = response.getWriter();
    } catch (IOException e) {
      e.printStackTrace();
    }
    // Assuming your json object is **jsonObject**, perform the following, it will return your json object
    if (out != null) {
      out.print(json);
      out.flush();
    }
  }
}

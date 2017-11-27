package net.marcusbellamy.Class;


public class Cred {


  /** returns db login info **/
  private String usr;
  private String pas;
  private String url;
  private String apiKey;

  /**
   *
   */
  public Cred() {
    super();
    // TODO Auto-generated constructor stub
    this.apiKey = "apiKey";
    this.usr = "root";
    this.pas = "Password.2017!";
    this.url = "jdbc:mysql://74.208.112.112:3306/";
  }
  /**
   * @return the usr
   */
  public String getUsr() {
    return usr;
  }

  /**
   * @return the pas
   */
  public String getPas() {
    return pas;
  }
  /**
   * @return the url
   */
  public String getUrl() {
    return url;
  }

  public String getApiKey() {
    return apiKey;
  }
}

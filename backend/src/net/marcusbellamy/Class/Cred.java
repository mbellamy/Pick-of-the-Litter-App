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
    this.apiKey = "xx";
    this.usr = "xxx";
    this.pas = "xx";
    this.url = "xxx";
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

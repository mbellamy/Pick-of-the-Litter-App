package net.marcusbellamy.Servlet;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import java.io.File;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.marcusbellamy.Class.Helper;
import net.marcusbellamy.Class.Litter;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

@WebServlet(name = "API")
public class API extends HttpServlet {
  private ServletFileUpload uploader = null;

  protected void doPost(HttpServletRequest request,
      HttpServletResponse response)
      throws ServletException, IOException {
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);
    Litter lit = new Litter();
    Helper help = new Helper();


    Gson gson = new Gson();
    String param = request.getParameter("call");

    switch (param) {
      //Litter create
      case "l_c": {
        if (isMultipart) {
          if(!ServletFileUpload.isMultipartContent(request)){
            help.presentResponse(response, lit.customMessage("Incorrect POST Type."));
          }

          try {
            List<FileItem> fileItemsList = uploader.parseRequest(request);
            for (FileItem fileItem : fileItemsList) {
              switch (fileItem.getFieldName()) {

                case "created_by": {
                  System.out.println(fileItem.getString());
                  System.out.println("Fadfaf");
                  lit.setLitter_created_by(Integer.valueOf(fileItem.getString()));
                }
                break;
                case "created_at": {
                  System.out.println(fileItem.getString());
                  lit.setLitter_created_at(Long.valueOf(fileItem.getString()));
                }
                break;
                case "cleaned_by": {
                  System.out.println(fileItem.getString());
                  lit.setLitter_cleaned_by(Integer.valueOf(fileItem.getString()));
                }
                break;
                case "cleaned_at": {
                  System.out.println(fileItem.getString());
                  lit.setLitter_cleaned_at(Long.valueOf(fileItem.getString()));
                }
                break;
                case "location_lat": {
                  System.out.println(fileItem.getString());
                  lit.setLitter_location_lat(Double.valueOf(fileItem.getString()));
                }
                break;
                case "location_long": {
                  System.out.println(fileItem.getString());
                  lit.setLitter_location_long(Double.valueOf(fileItem.getString()));
                }
                break;
                case "file_image": {
                  lit.setLitter_image(fileItem.getString());
                }
                break;
                case "file": {
                  //when reverting to binary image storage
//                  System.out.println(fileItem.getString());
//
//                  SecureRandom random = new SecureRandom();
//
//                  String fName = new BigInteger(130, random).toString(32) + ".jpg";
//                  File file = new File(
//                          request.getServletContext().getAttribute("FILES_DIR") + File.separator
//                                  + fName);
//
//                  fileItem.write(file);
//                  lit.setLitter_image(file.getName());

                }
                break;
                default:{
                }
              }


            }
          } catch (Exception e) {
            // Return failed response
            help.presentResponse(response, lit.customMessage(e.getLocalizedMessage()));
          }


        }
        if (lit.create().getLitter_created_by() > 0) {
          // Post response
          help.presentResponse(response, lit.successfulCreation());
        } else {
          help.presentResponse(response, lit.customMessage(lit.getLitter_status()));
        }
      }
      break;
      //litter update
      case "l_u": {
        Litter litter = gson.fromJson(help.getBody(request), Litter.class);
        // Update Litter object and check for success.
        if (litter.update().getLitter_id() > 0) {
          help.presentResponse(response, litter.successfulCreation());
        } else {
          help.presentResponse(response, litter.failedCreation());
        }
      }
      break;
      //litter delete
      case "l_d": {
        Litter litter = gson.fromJson(help.getBody(request), Litter.class);
        // Delete Litter object and check for success.
        if (litter.delete().getLitter_id() == -99) {
          help.presentResponse(response, litter.successfulDeletion());
        } else {
          help.presentResponse(response, litter.failedCreation());
        }
      }
      break;
      //litter flagged
      case "l_f": {
        int id = Integer.valueOf(request.getParameter("id"));

        //create temp litter from id
        Litter litter = new Litter();
        litter.setLitter_id(id);

        // Flag Litter object and check for success.
        if (litter.flag().getLitter_id() > 0) {
          help.presentResponse(response, gson.toJson(litter.customMessage("flagged")));
        } else {
          help.presentResponse(response, litter.failedCreation());
        }
      }
      break;
      //litter cleaned
      case "l_cl": {
        Litter litter = gson.fromJson(help.getBody(request), Litter.class);

        // Flag Litter object and check for success.
        if (litter.cleaned().getLitter_id() > 0) {
          help.presentResponse(response, litter.customMessage("cleaned"));
        } else {
          help.presentResponse(response, litter.failedCreation());
        }
      }
      break;
      default: {

      }
      break;

    }


  }

  protected void doGet(HttpServletRequest request,
      HttpServletResponse response)
      throws ServletException, IOException {

    Helper help = new Helper();
    String param = request.getParameter("call");
    boolean isMultipart = ServletFileUpload.isMultipartContent(request);

    switch (param) {
      //download litters
      case  "l_g": {
        // Pull parameters from request
        int radius = Integer.valueOf(request.getParameter("radius"));
        double lat = Double.valueOf(request.getParameter("lat"));
        double lng = Double.valueOf(request.getParameter("lng"));
        int creator = Integer.valueOf(request.getParameter("creator"));

        // Create array of Litter objects found.
        JsonArray litters = new Litter().list(radius, lat, lng, creator);
        help.presentResponse(addCorsHeader(response), litters);

      }
    }
  }


  @Override
  public void init() throws ServletException {
    super.init();
    DiskFileItemFactory fileFactory = new DiskFileItemFactory();
    File filesDir = (File) getServletContext().getAttribute("FILES_DIR_FILE");
    fileFactory.setRepository(filesDir);
    this.uploader = new ServletFileUpload(fileFactory);
  }

  //CORS
  private HttpServletResponse addCorsHeader(HttpServletResponse response){
    response.addHeader("Access-Control-Allow-Origin", "*");
    response.addHeader("Access-Control-Allow-Methods", "POST, GET");
    response.addHeader("Access-Control-Allow-Headers", "X-PINGOTHER, Origin, X-Requested-With, Content-Type, Accept");
    response.addHeader("Access-Control-Max-Age", "1728000");
    return response;
  }
}

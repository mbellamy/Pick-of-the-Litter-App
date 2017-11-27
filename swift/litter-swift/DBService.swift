//
//  DBService.swift
//  litter-swift
//
//  Created by Fullscreen on 8/15/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import Alamofire
import CoreLocation

class DBService: NSObject {
    //let serverURL = "http://localhost:8080/"
    let serverURL = "http://litter-backend.herokuapp.com/"
    
    //UserDefault
    let profile = UserDefaults()

    func getLitters(userLocation: CLLocation, creator: Int, completionHandler: @escaping (NSArray?, Error?) -> ()) {
        let suffix = "API?call=l_g"

            //http request
            Alamofire.request("\(serverURL)\(suffix)&radius=25&lat=\(userLocation.coordinate.latitude)&lng=\(userLocation.coordinate.longitude)&creator=\(creator)").responseArray { (response: DataResponse<[Litter]>) in
                
                // handle response
                if response.result.value != nil {
                    
                    //return results
                    completionHandler(response.result.value! as NSArray, nil)

                } else {
                    
                    //return results
                    completionHandler(nil, self.getError(domain: "DBService", code: 401, title: "Litter Error", message: "Unable to access Litter"))
                }
                
                
        }
    }
    
    func litterClean(litter: Litter, completionHandler: @escaping (Bool?, Error?) -> ()) {
        let suffix = "API?call=l_cl"
        let params: [String: Any] = litter.toJSON()
    
        Alamofire.request("\(serverURL)\(suffix)", method: .post, parameters: params , encoding: JSONEncoding.default).responseString { response  in
            
            //check response
            if let result = response.result.value {
                let dict: [String:Any] = self.convertToDictionary(text: result)!
                if ((dict["status"] as! String) == "cleaned") {
                    // cleaned
                    completionHandler(true, nil)
                } else {
                    //show error
                    completionHandler(false, self.getError(domain: suffix, code: 401, title: "Clean Error", message: "Unable to clean to litter"))

                }
            }
        }
    }
    func litterFlag(litter_id: Int, completionHandler: @escaping (Bool?, Error?) -> ()) {
        let suffix = "API?call=l_f"
        Alamofire.request("\(serverURL)\(suffix)&id=\(litter_id)", method: .post, parameters: nil, encoding: JSONEncoding.default).responseJSON { response in
            
            if let dict = response.result.value {
              //  let header = response.response!.allHeaderFields as NSDictionary
              //  let token = header.object(forKey: "token")!
                if ((dict as! Dictionary)["status"] == "flagged") {
                    
                    //log user in on app
                    
                    
                    // send results with no error
                    completionHandler(true, nil)
                } else {
                    // results with error
                    completionHandler(nil, self.getError(domain: suffix, code: 401, title: "Login Error", message: "Unable to login to account"))
                }
            } else {
                
                //unable to connect to server
                completionHandler(nil, self.getError(domain: suffix, code: 500, title: "Login Error", message: "Unable to connect to server"))
                
            }
            
        }
    }
    
    func litterLogin(email: String, password: String, completionHandler: @escaping (Bool?, Error?) -> ()) {
        //login
        let suffix = "Login"
        let params = ["email": email, "password":password]
        
        //http request
        Alamofire.request("\(serverURL)\(suffix)", method: .post, parameters: params, encoding: JSONEncoding.prettyPrinted)
            .responseJSON { response in
                
                //handle response
                if let dict = response.result.value {
                 //   let header = response.response!.allHeaderFields as NSDictionary
                  //  let token = header.object(forKey: "token")!
                    
                    if ((dict as! [String: Any])["status"] == nil) {
                        
                        //log user in on app
                       // self.profile.set(token, forKey: "token")
                        self.profile.set(dict, forKey: "profile")
                        
                        // send results with no error
                        completionHandler(true, nil)
                        
                    } else {
                        // results with error
                        completionHandler(nil, self.getError(domain: suffix, code: 401, title: "Login Error", message: "Unable to login to account"))
                    }
                } else {
                    
                    //unable to connect to server
                    completionHandler(nil, self.getError(domain: suffix, code: 500, title: "Login Error", message: "Unable to connect to server"))

                }
        }
    }
    
    func litterRegister(email: String, password: String, completionHandler: @escaping (Bool?, Error?) -> ()) {
        //register account with back-end
        let suffix = "Register"
        let params = ["email": email, "password":password]
        
        //http post request
        Alamofire.request("\(serverURL)\(suffix)", method: .post, parameters: params, encoding: JSONEncoding.default)
            .responseJSON { response in

                //handle response
                if let dict = response.result.value {
                    let header = response.response!.allHeaderFields as NSDictionary
                    let token = header.object(forKey: "token")!
                    if (((dict as AnyObject).object(forKey: "status")) == nil) {
                        
                        //log user in on app by saving profile to userdefaults
                        self.profile.set(token, forKey: "token")
                        self.profile.set(dict, forKey: "profile")

                        // send error free results back
                        completionHandler(true, nil)
                    } else {
                        // send back result with error
                        completionHandler(nil, self.getError(domain: suffix, code: 401, title: "Registration Error", message: "Unable to create account"))
                    }
                } else {

                    // never made it to server error
                    completionHandler(nil, self.getError(domain: suffix, code: 500, title: "Registration Error", message: "Unable to connect to server"))

                }
                
                
        }
    }
    
    func litterPost(litter: Litter, completionHandler: @escaping (Bool?, Error?) -> ()) {
        //register account with back-end
        let suffix = "API?call=l_c"
        
        let imageData = Helper().reduceImage(with: litter.litter_uiimage!)
        
        //http post request
        Alamofire.upload(
            multipartFormData: { multipartFormData in
                multipartFormData.append(imageData, withName: "file")
                multipartFormData.append(self.getData(string: Helper().ImageToBase64(imageData: imageData)), withName: "file_image")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_cleaned_at!)), withName: "cleaned_at")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_cleaned_by!)), withName: "cleaned_by")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_created_at!)), withName: "created_at")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_created_by!)), withName: "created_by")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_location_lat!)), withName: "location_lat")
                multipartFormData.append(self.getData(string: String(describing: litter.litter_location_long!)), withName: "location_long")
        },
            to: "\(serverURL)\(suffix)",
            encodingCompletion: { encodingResult in
                switch encodingResult {
                case .success(let upload, _, _):
                    upload.responseJSON { response in
                        debugPrint(response.result.value ?? "fffd")
                        completionHandler(true, nil)
                    }
                case .failure(let encodingError):
                    print(encodingError)
                    completionHandler(nil, self.getError(domain: suffix, code: 401, title: "Litter Error", message: "Unable to post litter"))
                }
        }
        )
    }
    
    func getError(domain: String, code: Int, title: String, message: String) -> NSError {
        //creaate NSError object with provided information
        let userInfo: [AnyHashable : Any] =
            [NSLocalizedDescriptionKey :  NSLocalizedString("\(title)", value: "\(message)", comment: ""),
            NSLocalizedFailureReasonErrorKey : NSLocalizedString("\(title)", value: "\(message)", comment: "")
            ]
        let err = NSError(domain: domain, code: code, userInfo: userInfo)
        return err
    }
    
    func getData(string: String) -> Data {
        return string.data(using: String.Encoding.utf8)!
    }
    func convertToDictionary(text: String) -> [String: Any]? {
        if let data = text.data(using: .utf8) {
            do {
                return try JSONSerialization.jsonObject(with: data, options: []) as? [String: Any]
            } catch {
                print(error.localizedDescription)
            }
        }
        return nil
    }
}



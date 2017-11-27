//
//  Helper.swift
//  litter-swift
//
//  Created by Cavalier Revolt on 11/9/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import Foundation
import SystemConfiguration

class Helper: NSObject {
    func base64ToImage(strBase64: String) -> UIImage? {
        let dataDecoded : Data = Data(base64Encoded: strBase64, options: .ignoreUnknownCharacters)!
        let decodedimage = UIImage(data: dataDecoded)
        return decodedimage
    }
    func ImageToBase64(imageData: Data) -> String {
        return imageData.base64EncodedString(options: .lineLength64Characters)
    }
    func showMessage(vC: UIViewController, title: String, message: String, completionHandler: ((Bool)->())?) {
        
        let controller = UIAlertController(title: title, message: message, preferredStyle: .alert)
        let okAction = UIAlertAction(title: "OK", style: .default, handler: { (action) in
            
            if let handle = completionHandler {
                handle(true)
            }
        })
        let cancelAction = UIAlertAction(title: "Cancel", style: .destructive) { (action) in
            if let handle = completionHandler {
                handle(false)
            }
        }
        controller.addAction(okAction)
        controller.addAction(cancelAction)
        vC.present(controller, animated: true, completion: nil)
        
    }
    
    func reduceImage(with image: UIImage) -> Data {
        for i in 0...9 {
            if let img:Data = UIImageJPEGRepresentation(image, CGFloat(i)) {
                if (img.count <= 250000) {
                    return img
                }
            }
        }
        return UIImageJPEGRepresentation(image, 0.10)!
    }
    
    
}

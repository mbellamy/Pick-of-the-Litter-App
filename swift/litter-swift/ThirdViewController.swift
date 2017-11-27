//
//  ThirdViewController.swift
//  litter-swift
//
//  Created by Fullscreen on 8/22/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import CoreLocation

class ThirdViewController: UIViewController, UIImagePickerControllerDelegate, UINavigationControllerDelegate, CLLocationManagerDelegate {
    let imagePicker = UIImagePickerController()
    var litterLocation : CLLocation! = nil
    let locationManager = CLLocationManager()

    @IBOutlet weak var imageView: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        imagePicker.delegate = self
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        
        
        
        // Do any additional setup after loading the view.
    }
    
    
    override func viewWillAppear(_ animated: Bool) {
        if (imageView.image == nil) {
            self.openCamera()
        }

    }
    
    override func viewWillDisappear(_ animated: Bool) {
        locationManager.stopUpdatingLocation()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */
    
    func openCamera() {
        imagePicker.allowsEditing = false
        imagePicker.sourceType = UIImagePickerControllerSourceType.camera
        imagePicker.cameraCaptureMode = .photo
        imagePicker.modalPresentationStyle = .fullScreen
        self.present(imagePicker, animated: true, completion: nil)
    }
    
    
    
    // location methods
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        self.litterLocation = locations.last!
    }
    
    // image methods
    func imagePickerControllerDidCancel(_ picker: UIImagePickerController) {
        if (imageView.image == nil) {
            //show image
            self.tabBarController?.selectedViewController = self.tabBarController?.viewControllers?[0]
            self.dismiss(animated: true, completion: nil)
        } else {
            self.dismiss(animated: true, completion: nil)
        }
    }
    
    //pick image
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [String : Any]) {
        if let chosenImage = info[UIImagePickerControllerOriginalImage] as? UIImage {
            imageView.contentMode = .scaleAspectFit
            imageView.image = chosenImage
            dismiss(animated:true, completion: nil)
        }
    }

    
    // Actions
    @IBAction func cancelButton(_ sender: Any) {
        self.tabBarController?.selectedViewController = self.tabBarController?.viewControllers?[0]
        self.dismiss(animated: true, completion: nil)
        self.imageView.image = nil
    }
    
    @IBAction func postButton(_ sender: Any) {
        
        let profile = UserDefaults().dictionary(forKey: "profile")!
        
        if (profile.isEmpty || self.imageView.image == nil || litterLocation == nil) {
            return
        }
        //create litter obejct
        let litter: Litter = Litter(litter_created_by: profile["id"] as? Int, litter_created_at: CLong(Date().timeIntervalSince1970), litter_cleaned_by: 0, litter_cleaned_at: 0, litter_location_lat: litterLocation.coordinate.latitude, litter_location_long: litterLocation.coordinate.longitude, litter_uiimage: imageView.image)
       //post litter object
        DBService().litterPost(litter: litter) { (success, error) in
            if let _ = error {
                 Helper().showMessage(vC: self, title: "Error!", message: "Unable to post litter.", completionHandler: nil)
                return
            }
            if (success)! {
                Helper().showMessage(vC: self, title: "Litter", message: "Litter Posted!", completionHandler: nil)
                self.tabBarController?.selectedViewController = self.tabBarController?.viewControllers?[0]
            } else {
                Helper().showMessage(vC: self, title: "Error!", message: "Unable to post litter.", completionHandler: nil)
            }
        }
    }
    
    
    
}

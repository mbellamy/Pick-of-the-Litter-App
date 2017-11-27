//
//  SecondViewController.swift
//  litter-swift
//
//  Created by Fullscreen on 8/14/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import CoreLocation
import Alamofire
import AlamofireImage

class SecondViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, CLLocationManagerDelegate {
    @IBOutlet weak var emailTextField: UITextField!
    @IBOutlet weak var passwordTextField: UITextField!
    @IBOutlet var loginButton: UIView!
    @IBOutlet var registerButton: UIView!
    
    @IBOutlet weak var signOutButton: UIBarButtonItem!
    var litters:[Litter] = [Litter]()
    @IBOutlet var postTableView: UITableView!
    let profile = UserDefaults()
    var locationManager: CLLocationManager?
    var userLocation: CLLocation!
    var dict:[String:Any] = [:]

    override func viewDidLoad() {
        super.viewDidLoad()

        locationManager = CLLocationManager()
        locationManager?.delegate = self
        locationManager?.desiredAccuracy = kCLLocationAccuracyBest
        locationManager?.requestWhenInUseAuthorization()
        locationManager?.startUpdatingLocation()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        navigationController?.navigationBar.barTintColor = UIColor(red: 0/255, green: 128/255, blue: 64/255, alpha: 0)
        signOutButton.isEnabled = false
        if let pro = profile.dictionary(forKey: "profile") {
            dict = pro
            setupPostedLitter()
            locationManager?.startUpdatingLocation()
        }
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
    
    
    @IBAction func loginButton(_ sender: Any) {
        if ((emailTextField.text?.isEmpty)! || (passwordTextField.text?.isEmpty)!) {
            return
        } else {
            //login
            DBService().litterLogin(email: emailTextField.text!, password: passwordTextField.text!, completionHandler: { (success, error) in
                if (success == true) {
                    self.setupPostedLitter()
                    self.tabBarController?.selectedIndex = 0
                } else {
                    Helper().showMessage(vC: self, title: "Error!", message: "Unable to login.", completionHandler: nil)
                }
            })
        }
        
        
    }
    
    @IBAction func registerButton(_ sender: Any) {
        if ((emailTextField.text?.isEmpty)! || (passwordTextField.text?.isEmpty)!) {
            return
        } else {
            //register
            DBService().litterRegister(email: emailTextField.text!, password: passwordTextField.text!, completionHandler: { (success, error) in
                if (success == true) {
                    self.tabBarController?.selectedIndex = 0
                } else {
                    Helper().showMessage(vC: self, title: "Error!", message: "Unable to register.", completionHandler: nil)
                }
            })
        }

    }
    
    
    func setupPostedLitter() {
        postTableView.delegate = self
        postTableView.dataSource = self
        postTableView.isHidden = false
        signOutButton.isEnabled = true
        let dict = profile.dictionary(forKey: "profile")
        if (userLocation != nil) {
            //download litter
            DBService().getLitters(userLocation: userLocation, creator: dict!["id"] as! Int ) { (array, error) in
                if let array = array {
                    self.litters = array as! [Litter]
                    self.postTableView.reloadData()
                } else {
                    Helper().showMessage(vC: self, title: "Error!", message: "Unable to load litter.", completionHandler: nil)
                }
            }
        }
    }
    
    // Location methods
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if (!locations.isEmpty) {
            //find litter
            self.userLocation = locations.first
            guard dict["id"] != nil else {
                return
            }
            DBService().getLitters(userLocation: userLocation, creator: dict["id"] as! Int ) { (array, error) in
                if let array = array {
                    self.litters = array as! [Litter]
                    self.postTableView.reloadData()
                } else {
                    Helper().showMessage(vC: self, title: "Error!", message: "Unable to load litter.", completionHandler: nil)
                }
            }
        }
        self.locationManager?.stopUpdatingLocation()
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return litters.count
    }
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 260
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellReuseIdentifier: String = "LitterCell"
        let cell:LitterTableViewCell = self.postTableView?.dequeueReusableCell(withIdentifier: cellReuseIdentifier) as! LitterTableViewCell
        
        
        // Setup cell
        cell.flagButton.isHidden = true
        let imageLocation = CLLocation(latitude: (self.litters[indexPath.row].litter_location_lat!), longitude: (self.litters[indexPath.row].litter_location_long!))
        
        CLGeocoder().reverseGeocodeLocation(imageLocation) { (placemarks, error) in
            if (error != nil) {
                cell.litterAddressLabel.text = "Lat: \(String(describing: self.litters[indexPath.row].litter_location_lat)) Long: \(String(describing: self.litters[indexPath.row].litter_location_long))"
            }
            
            
            
            if let pm = placemarks?[0] {
                cell.litterAddressLabel.text = pm.customAddress
            }
            
            
        }
        cell.litterImageView.image = UIImage(named: "icons8-empty-trash")
        //TODO: revert to binary storage
        cell.litterImageView.image = Helper().base64ToImage(strBase64: self.litters[indexPath.row].litter_image_url!)

        return cell
    }
    
    //use once reverted back to binary storage
    func getLitterImage(url: String, completionHandler: @escaping (UIImage?, Error?) -> ()) {
        if (!url.isEmpty) {
            Alamofire.request(url).responseImage { response in
                if let image = response.result.value {
                    completionHandler(image, nil)
                }
            }
        }
    }
    
    @IBAction func signOut(_ sender: Any) {
        profile.removeObject(forKey: "profile")
        postTableView.removeFromSuperview()
        signOutButton.isEnabled = false
    }
    
}


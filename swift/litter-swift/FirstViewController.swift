//
//  FirstViewController.swift
//  litter-swift
//
//  Created by Fullscreen on 8/14/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import Alamofire
import AlamofireObjectMapper
import AlamofireImage
import CoreLocation


class FirstViewController: UIViewController, UITableViewDelegate, UITableViewDataSource, CLLocationManagerDelegate, CellDelegate  {
    @IBOutlet weak var litterTableView: UITableView!
    
    
    //Variable
    let serverURL = "http://litter-backend.herokuapp.com/API?call=l_g"
    let RADIUS = 25
    var locationManager: CLLocationManager!
    var userLocation: CLLocation!
    var litters = [Litter]()
    var user = [String:Any]()
    let profile = UserDefaults()

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        // setup
        litters = [Litter]()
        
        // Setup tableview
        litterTableView.delegate = self
        litterTableView.dataSource = self
        
        // Setup location
        locationManager = CLLocationManager()
        locationManager.delegate = self
        locationManager.desiredAccuracy = kCLLocationAccuracyBestForNavigation
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func viewWillAppear(_ animated: Bool) {
        navigationController?.navigationBar.barTintColor = UIColor(red: 0/255, green: 128/255, blue: 64/255, alpha: 0)
        self.locationManager.startUpdatingLocation()
    }

    
    
    
    // Tableview methods
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return self.litters.count
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cellReuseIdentifier: String = "LitterCell"
        let cell:LitterTableViewCell = self.litterTableView.dequeueReusableCell(withIdentifier: cellReuseIdentifier) as! LitterTableViewCell
        cell.cellDelegate = self
        
       
        let litter = self.litters[indexPath.row]
        if let user = profile.dictionary(forKey: "profile") {
            self.user = user
            if ((user["id"] as! Int) == litters[indexPath.row].litter_created_by) {
                cell.flagButton.isHidden = true
            }
        }
        if let lid = litter.litter_id {
                cell.flagButton.tag = lid
            }
            cell.cleanButton.tag = indexPath.row
            // Setup cell
        if let lat = litter.litter_location_lat, let long = litter.litter_location_long {
            let imageLocation = CLLocation(latitude: lat, longitude: long)
            
                //tranlate point to address
                CLGeocoder().reverseGeocodeLocation(imageLocation) { (placemarks, error) in
                    if (error != nil) {
                        cell.litterAddressLabel.text = "Lat: \(String(describing: lat)) Long: \(String(describing: long))"
                    }
                    
                    
                    cell.litterAddressLabel.text = "\(String(describing: long))"
                    if let pm = placemarks?[0] {
                        cell.litterAddressLabel.text = pm.customAddress
                    }
                    
                    
                }
            }
                cell.litterImageView.image = UIImage(named: "icons8-empty-trash")
                cell.litterImageView.image = Helper().base64ToImage(strBase64: self.litters[indexPath.row].litter_image_url!)

        return cell

    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {

    }
    
    // Location methods
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        if (!locations.isEmpty) {
            self.userLocation = locations.first
                // download and show
                DBService().getLitters(userLocation: userLocation, creator: 0) { (array, error) in
                    if (error == nil && array != nil) {
                        self.litters = array as! [Litter]
                        self.litterTableView.reloadData();
                    } else {
                        Helper().showMessage(vC: self, title: "Error!", message: "Unable to load litter.", completionHandler: nil)
                    }
                }
        }
        self.locationManager.stopUpdatingLocation()
    }
    

    //get litter within {RADIUS} distance of user
    func getLitters() {
         if (self.userLocation != nil) {
            Alamofire.request("\(serverURL)&radius=\(RADIUS)&lat=\(userLocation!.coordinate.latitude)&lng=\(userLocation!.coordinate.longitude)").responseArray { (response: DataResponse<[Litter]>) in
                
                if let result = response.result.value {
                    self.litters = result
                    self.litterTableView.reloadData()
                } else {
                    Helper().showMessage(vC: self, title: "Error!", message: "Unable to load litter.", completionHandler: nil)
                }
            }
        }
    }
    //for use when reverting back to binary image storage
    func getLitterImage(url: String, completionHandler: @escaping (UIImage?, Error?) -> ()) {
        if (!url.isEmpty) {
            Alamofire.request(url).responseImage { response in
                if let image = response.result.value {
                    completionHandler(image, nil)
                }
                
            }
        }
        
    }

    func didPressCleanButton(_ cell: LitterTableViewCell) {

        Helper().showMessage(vC: self, title: "Clean?", message: "Would you like to clean the litter?") { (bool) in
            if (bool) {
                //set cleaned in db
                let litter = self.litters[cell.tag]
                    litter.litter_cleaned_at = CLong(Date().timeIntervalSince1970)
                    litter.litter_cleaned_by = (self.user["id"] as! Int)
                    DBService().litterClean(litter: litter ) { (success, error) in
                        if (error == nil) {
                            Helper().showMessage(vC: self, title: "Cleaned!", message: "Thank you for helping clean the community!", completionHandler: nil)
                        } else {
                            Helper().showMessage(vC: self, title: "Error", message: "Unable to clean Litter", completionHandler: nil)
                        }
                    }
                
            }
        }
        
       
       
        
    }
    func didPressFlagButton(_ cell: LitterTableViewCell) {
        Helper().showMessage(vC: self, title: "Flag?", message: "Would you like to flag this image?") { (bool) in
            if (bool) {
                //set flagged in db
                DBService().litterFlag(litter_id: cell.tag) { (success, error) in
                    if (error == nil) {
                        Helper().showMessage(vC: self, title: "Flagged!", message: "Image has been flagged!", completionHandler: nil)
                    } else {
                        Helper().showMessage(vC: self, title: "Error", message: "Unable to flag image.", completionHandler: nil)
                    }
                }
            }
        }
        
    }
    
    
    

}



extension CLPlacemark {
    //create address string
    var customAddress: String {
        get {
            return [[subThoroughfare, thoroughfare], [postalCode, locality, administrativeArea]]
                .map { (subComponents) -> String in
                    subComponents.flatMap({ $0 }).joined(separator: " ")
                }
                .filter({ return !$0.isEmpty })
                .joined(separator: ", ")
        }
    }
}

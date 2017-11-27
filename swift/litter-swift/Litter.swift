//
//  Litter.swift
//  litter-swift
//
//  Created by Fullscreen on 8/14/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import ObjectMapper

class Litter: Mappable {
    var litter_id: Int?
    var litter_created_by: Int?
    var litter_created_at: CLong?
    var litter_cleaned_by: Int?
    var litter_cleaned_at: CLong?
    var litter_location_lat: Double?
    var litter_location_long: Double?
    var litter_image_url: String?
    var litter_uiimage: UIImage?
    
    required init?(map: Map){}
    
    init(litter_created_by: Int?, litter_created_at: CLong?, litter_cleaned_by: Int?, litter_cleaned_at: CLong?, litter_location_lat: Double?, litter_location_long: Double?, litter_uiimage: UIImage?) {
        
        self.litter_cleaned_at = litter_cleaned_at
        self.litter_cleaned_by = litter_cleaned_by
        self.litter_created_by = litter_created_by
        self.litter_created_at = litter_created_at
        self.litter_location_lat = litter_location_lat
        self.litter_location_long = litter_location_long
        self.litter_uiimage = litter_uiimage
        
    }
    
    func mapping(map: Map) {
        litter_id <- map["litter_id"]
        litter_created_by <- map["litter_created_by"]
        litter_created_at <- map["litter_created_at"]
        litter_cleaned_by <- map["litter_cleaned_by"]
        litter_cleaned_at <- map["litter_cleaned_at"]
        litter_location_lat <- map["litter_location_lat"]
        litter_location_long <- map["litter_location_long"]
        litter_image_url <- map["litter_image_url"]
    }
    
    
}


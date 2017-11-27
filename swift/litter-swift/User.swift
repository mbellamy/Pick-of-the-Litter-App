//
//  User.swift
//  litter-swift
//
//  Created by Cavalier Revolt on 11/9/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import UIKit
import ObjectMapper

class User: Mappable {

    var id: String?
    var email: String?
    var password: String?
    var username: String?
    var zipcode: String?
    
    required init?(map: Map) {}
    
    init(id: String?, email: String?, password: String?, username: String?, zipcode: String?) {
        self.id = id
        self.email = email
        self.password = password
        self.username = username
        self.zipcode = zipcode
    }
    func mapping(map: Map) {
        id <- map["id"]
        email <- map["email"]
        password <- map["password"]
        username <- map["username"]
        zipcode <- map["zipcode"]
    }
}

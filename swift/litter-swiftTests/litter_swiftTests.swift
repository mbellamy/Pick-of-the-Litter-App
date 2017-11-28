//
//  litter_swiftTests.swift
//  litter-swiftTests
//
//  Created by Fullscreen on 8/14/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import XCTest
@testable import litter_swift

class litter_swiftTests: XCTestCase {
    
    override func setUp() {
        super.setUp()
        // Put setup code here. This method is called before the invocation of each test method in the class.
    }
    
    override func tearDown() {
        // Put teardown code here. This method is called after the invocation of each test method in the class.
        super.tearDown()
    }
    
    func testInit_User() {
        let user = User(id: "1", email: "email@email.com", password: "password", username: "username", zipcode: "22172")
        
        XCTAssertEqual("1", user.id)
        XCTAssertEqual("email@email.com", user.email)
        XCTAssertEqual("password", user.password)
        XCTAssertEqual("22172", user.zipcode)
        XCTAssertEqual("username", user.username)
        
    }
    
    func testInit_Litter() {
        let litter = Litter(litter_created_by: 1, litter_created_at: 4384902849, litter_cleaned_by: nil, litter_cleaned_at: nil, litter_location_lat: -77.804820, litter_location_long: 38.30020, litter_uiimage: nil)
        
        XCTAssertEqual(1, litter.litter_created_by)
        XCTAssertEqual(4384902849, litter.litter_created_at)
        XCTAssertEqual(-77.804820, litter.litter_location_lat)
        XCTAssertEqual(38.30020, litter.litter_location_long)
        XCTAssertEqual(nil, litter.litter_cleaned_by)
        XCTAssertEqual(nil, litter.litter_cleaned_at)
        XCTAssertEqual(nil, litter.litter_uiimage)
        
    }
    
    func testClean_Litter() {
        let litter = Litter(litter_created_by: 1, litter_created_at: 4384902849, litter_cleaned_by: nil, litter_cleaned_at: nil, litter_location_lat: -77.804820, litter_location_long: 38.30020, litter_uiimage: nil)
        
        litter.litter_cleaned_at = 34820984239
        litter.litter_cleaned_by = 1
        
        XCTAssertEqual(1, litter.litter_created_by)
        XCTAssertEqual(4384902849, litter.litter_created_at)
        XCTAssertEqual(-77.804820, litter.litter_location_lat)
        XCTAssertEqual(38.30020, litter.litter_location_long)
        XCTAssertEqual(nil, litter.litter_cleaned_by)
        XCTAssertEqual(nil, litter.litter_cleaned_at)
        XCTAssertEqual(nil, litter.litter_uiimage)
        XCTAssertEqual(1, litter.litter_cleaned_by)
        XCTAssertEqual(34820984239, litter.litter_cleaned_at)
    }
    
    
}


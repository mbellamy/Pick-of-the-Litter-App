//
//  dbserviceTests.swift
//  litter-swiftTests
//
//  Created by Cavalier Revolt on 11/28/17.
//  Copyright © 2017 Fullscreen. All rights reserved.
//

import XCTest
import Alamofire
import OHHTTPStubs
@testable import litter_swift

class AlamofireOHHTTPStubsTests: XCTestCase {
    let serverURL = "http://litter-backend.herokuapp.com/"

    let manager: SessionManager = {
        let configuration = URLSession.shared.configuration
        
        //The most important string!
        OHHTTPStubs.setEnabled(true, for: configuration)
        
        configuration.urlCache = nil
        let delegate = SessionManager.default.delegate
        let session = URLSession(configuration: configuration, delegate: delegate, delegateQueue: nil)
        return SessionManager(session: session, delegate: delegate)!
    }()
    
    let responseText = "[]"
    
    func testAlamofireOHHTTPStubs() {
        stub(condition: isMethodGET()) { _ in
            return OHHTTPStubsResponse(
                jsonObject: [],
                statusCode: 200,
                headers: [ "Content-Type": "application/json" ]
            )
        }
        
        let expect = expectation(description: "alamofire request expectation")
        
        manager.request("\(serverURL)?call=l_g&radius=25&lat=0.00&lng=0.004&creator=0").responseJSON { (response) in

            switch response.result {
            case .success(let json as [Litter]):
               XCTAssertEqual(json.count, 0)
            default:
                XCTFail()
            }
            expect.fulfill()
        }
        waitForExpectations(timeout: 1.0, handler: nil)
        
    }
    
    func testDBService_GetLitter() {
        
    }
    
}

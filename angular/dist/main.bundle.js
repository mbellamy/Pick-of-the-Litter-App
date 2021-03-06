webpackJsonp([1,4],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MISC_helper__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatabaseService = (function () {
    function DatabaseService(help, http, auth) {
        this.help = help;
        this.http = http;
        this.auth = auth;
        this.serverUrl = 'https://litter-backend.herokuapp.com/API';
    }
    DatabaseService.prototype.getLitter = function (radius, lat, lng, creator) {
        return this.http.get(this.serverUrl + '?call=l_g&radius=' + radius + '&lat=' + lat + '&lng=' + lng + '&creator=' + creator)
            .toPromise()
            .then(this.help.extractData)
            .catch(this.help.handleError);
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__MISC_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__MISC_helper__["a" /* Helper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _c || Object])
], DatabaseService);

var _a, _b, _c;
//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MISC_helper__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeolocationService = (function () {
    function GeolocationService(help, http) {
        this.help = help;
        this.http = http;
        this.serverUrl = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='; // ?email=marcusbellamy@msn.com&password=password'
        this.serverSuffix = '&sensor=true';
    }
    GeolocationService.prototype.getCityFromLatLng = function (lat, lng) {
        return this.http.get(this.serverUrl + lat + ',' + lng + this.serverSuffix)
            .toPromise()
            .then(this.help.extractData)
            .catch(this.help.handleError);
    };
    return GeolocationService;
}());
GeolocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__MISC_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__MISC_helper__["a" /* Helper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], GeolocationService);

var _a, _b;
//# sourceMappingURL=geolocation.service.js.map

/***/ }),

/***/ 302:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 302;


/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(316);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnsafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnsafePipe = (function () {
    function UnsafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    UnsafePipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(html);
    };
    return UnsafePipe;
}());
UnsafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'UnsafePipe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], UnsafePipe);

var _a;
//# sourceMappingURL=UnsafePipe.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_database_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_geolocation_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(geoService, dbService, authService, modalService) {
        this.geoService = geoService;
        this.dbService = dbService;
        this.authService = authService;
        this.modalService = modalService;
        this.title = 'Pick of the Litter!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.location = position.coords;
                _this.dbService.getLitter(4000, position.coords.latitude, position.coords.longitude, 0).then(function (results) {
                    _this.litters = results;
                    var timer = __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].timer(2000, 1000);
                    timer.subscribe(function (t) {
                        if (t % 30 === 0) {
                            _this.currentLitter = _this.litters[Math.floor(Math.random() * _this.litters.length - 1) + 1];
                        }
                    });
                });
            }, function (error) {
                console.log(error.message);
            });
        }
    };
    AppComponent.prototype.getAddress = function (litter) {
        var _this = this;
        this.geoService.getCityFromLatLng(litter.litter_location_lat, litter.litter_location_long).then(function (result) {
            _this.address = result.results[0].formatted_address;
            console.log(_this.address);
        });
    };
    AppComponent.prototype.open = function (content, litter) {
        var _this = this;
        this.currentLitter = litter;
        this.getAddress(litter);
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    AppComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(376),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_geolocation_service__["a" /* GeolocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_geolocation_service__["a" /* GeolocationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_database_service__["a" /* DatabaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_database_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__MISC_helper__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_geolocation_service__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MISC_UnsafePipe__ = __webpack_require__(313);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__MISC_UnsafePipe__["a" /* UnsafePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__MISC_helper__["a" /* Helper */], __WEBPACK_IMPORTED_MODULE_9__services_geolocation_service__["a" /* GeolocationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)(false);
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*.gallery {*/\n  /*background-color: green;*/\n  /*width: 100%;*/\n  /*display: inline;*/\n/*}*/\n\n/*.center {*/\n  /*width: 80%;*/\n  /*margin: 0 auto;*/\n/*}*/\n/*.top {*/\n  /*height: 100px;*/\n  /*background-color: white;*/\n/*}*/\n/*.bottom {*/\n  /*height: auto;*/\n  /*background-color: green;*/\n  /*margin: auto;*/\n  /*width: 50%;*/\n/*}*/\n/*.h1 {*/\n  /*font-weight: 100;*/\n  /*color: black;*/\n/*}*/\n/*.outer {*/\n  /*height: 100vh;*/\n  /*background-color: green;*/\n  /*margin: auto;*/\n  /*overflow: hidden;*/\n/*}*/\n/*.green {*/\n  /*background-color: green;*/\n/*}*/\n/*.fill {*/\n  /*display: flex;*/\n  /*justify-content: center;*/\n  /*align-items: center;*/\n  /*overflow: hidden*/\n/*}*/\n/*.fill img {*/\n  /*flex-shrink: 0;*/\n  /*min-width: 100%;*/\n  /*min-height: 100%;*/\n  /*overflow: auto;*/\n/*}*/\n\n/*.img-lightbox {*/\n  /*width: 100%;*/\n  /*height: auto;*/\n  /*max-width: 100%;*/\n/*}*/\n\n/*.modal-dialog {*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  /*margin: 0;*/\n  /*padding: 0;*/\n/*}*/\n\n/*.modal-content {*/\n  /*height: auto;*/\n  /*min-height: 100%;*/\n  /*border-radius: 0;*/\n/*}*/\n\n\n\n\n@font-face{font-family:'FontAwesome';src:url(" + __webpack_require__(374) + ");src:url(" + __webpack_require__(373) + "?#iefix&v=4.0.1) format('embedded-opentype'),url(" + __webpack_require__(664) + ") format('woff'),url(" + __webpack_require__(663) + ") format('truetype'),url(" + __webpack_require__(375) + "#fontawesomeregular) format('svg');font-weight:normal;font-style:normal}\n\n/*********************************************************************************/\n/* Icons                                                                         */\n/* Powered by Font Awesome by Dave Gandy | http://fontawesome.io                 */\n/* Licensed under the SIL OFL 1.1 (font), MIT (CSS)                              */\n/*********************************************************************************/\n\n.fa\n{\n  text-decoration: none;\n}\n\n.fa:before\n{\n  display:inline-block;\n  font-family: FontAwesome;\n  font-size: 1.25em;\n  text-decoration: none;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing:antialiased;\n  -moz-osx-font-smoothing:grayscale;\n}\n\n.fa-lg{font-size:1.3333333333333333em;line-height:.75em;vertical-align:-15%}\n.fa-2x{font-size:2em}\n.fa-3x{font-size:3em}\n.fa-4x{font-size:4em}\n.fa-5x{font-size:5em}\n.fa-fw{width:1.2857142857142858em;text-align:center}\n.fa-ul{padding-left:0;margin-left:2.142857142857143em;list-style-type:none}.fa-ul>li{position:relative}\n.fa-li{position:absolute;left:-2.142857142857143em;width:2.142857142857143em;top:.14285714285714285em;text-align:center}.fa-li.fa-lg{left:-1.8571428571428572em}\n.fa-border{padding:.2em .25em .15em;border:solid .08em #eee;border-radius:.1em}\n.pull-right{float:right}\n.pull-left{float:left}\n.fa.pull-left{margin-right:.3em}\n.fa.pull-right{margin-left:.3em}\n.fa-spin{-webkit-animation:spin 2s infinite linear;animation:spin 2s infinite linear}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)} 100%{-webkit-transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)} 100%{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.fa-rotate-90{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=1);-webkit-transform:rotate(90deg);transform:rotate(90deg)}\n.fa-rotate-180{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2);-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n.fa-rotate-270{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=3);-webkit-transform:rotate(270deg);transform:rotate(270deg)}\n.fa-flip-horizontal{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}\n.fa-flip-vertical{filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);-webkit-transform:scale(1, -1);transform:scale(1, -1)}\n.fa-stack{position:relative;display:inline-block;width:2em;height:2em;line-height:2em;vertical-align:middle}\n.fa-stack-1x,.fa-stack-2x{position:absolute;left:0;width:100%;text-align:center}\n.fa-stack-1x{line-height:inherit}\n.fa-stack-2x{font-size:2em}\n.fa-inverse{color:#fff}\n.fa-glass:before{content:\"\\F000\"}\n.fa-music:before{content:\"\\F001\"}\n.fa-search:before{content:\"\\F002\"}\n.fa-envelope-o:before{content:\"\\F003\"}\n.fa-heart:before{content:\"\\F004\"}\n.fa-star:before{content:\"\\F005\"}\n.fa-star-o:before{content:\"\\F006\"}\n.fa-user:before{content:\"\\F007\"}\n.fa-film:before{content:\"\\F008\"}\n.fa-th-large:before{content:\"\\F009\"}\n.fa-th:before{content:\"\\F00A\"}\n.fa-th-list:before{content:\"\\F00B\"}\n.fa-check:before{content:\"\\F00C\"}\n.fa-times:before{content:\"\\F00D\"}\n.fa-search-plus:before{content:\"\\F00E\"}\n.fa-search-minus:before{content:\"\\F010\"}\n.fa-power-off:before{content:\"\\F011\"}\n.fa-signal:before{content:\"\\F012\"}\n.fa-gear:before,.fa-cog:before{content:\"\\F013\"}\n.fa-trash-o:before{content:\"\\F014\"}\n.fa-home:before{content:\"\\F015\"}\n.fa-file-o:before{content:\"\\F016\"}\n.fa-clock-o:before{content:\"\\F017\"}\n.fa-road:before{content:\"\\F018\"}\n.fa-download:before{content:\"\\F019\"}\n.fa-arrow-circle-o-down:before{content:\"\\F01A\"}\n.fa-arrow-circle-o-up:before{content:\"\\F01B\"}\n.fa-inbox:before{content:\"\\F01C\"}\n.fa-play-circle-o:before{content:\"\\F01D\"}\n.fa-rotate-right:before,.fa-repeat:before{content:\"\\F01E\"}\n.fa-refresh:before{content:\"\\F021\"}\n.fa-list-alt:before{content:\"\\F022\"}\n.fa-lock:before{content:\"\\F023\"}\n.fa-flag:before{content:\"\\F024\"}\n.fa-headphones:before{content:\"\\F025\"}\n.fa-volume-off:before{content:\"\\F026\"}\n.fa-volume-down:before{content:\"\\F027\"}\n.fa-volume-up:before{content:\"\\F028\"}\n.fa-qrcode:before{content:\"\\F029\"}\n.fa-barcode:before{content:\"\\F02A\"}\n.fa-tag:before{content:\"\\F02B\"}\n.fa-tags:before{content:\"\\F02C\"}\n.fa-book:before{content:\"\\F02D\"}\n.fa-bookmark:before{content:\"\\F02E\"}\n.fa-print:before{content:\"\\F02F\"}\n.fa-camera:before{content:\"\\F030\"}\n.fa-font:before{content:\"\\F031\"}\n.fa-bold:before{content:\"\\F032\"}\n.fa-italic:before{content:\"\\F033\"}\n.fa-text-height:before{content:\"\\F034\"}\n.fa-text-width:before{content:\"\\F035\"}\n.fa-align-left:before{content:\"\\F036\"}\n.fa-align-center:before{content:\"\\F037\"}\n.fa-align-right:before{content:\"\\F038\"}\n.fa-align-justify:before{content:\"\\F039\"}\n.fa-list:before{content:\"\\F03A\"}\n.fa-dedent:before,.fa-outdent:before{content:\"\\F03B\"}\n.fa-indent:before{content:\"\\F03C\"}\n.fa-video-camera:before{content:\"\\F03D\"}\n.fa-picture-o:before{content:\"\\F03E\"}\n.fa-pencil:before{content:\"\\F040\"}\n.fa-map-marker:before{content:\"\\F041\"}\n.fa-adjust:before{content:\"\\F042\"}\n.fa-tint:before{content:\"\\F043\"}\n.fa-edit:before,.fa-pencil-square-o:before{content:\"\\F044\"}\n.fa-share-square-o:before{content:\"\\F045\"}\n.fa-check-square-o:before{content:\"\\F046\"}\n.fa-move:before{content:\"\\F047\"}\n.fa-step-backward:before{content:\"\\F048\"}\n.fa-fast-backward:before{content:\"\\F049\"}\n.fa-backward:before{content:\"\\F04A\"}\n.fa-play:before{content:\"\\F04B\"}\n.fa-pause:before{content:\"\\F04C\"}\n.fa-stop:before{content:\"\\F04D\"}\n.fa-forward:before{content:\"\\F04E\"}\n.fa-fast-forward:before{content:\"\\F050\"}\n.fa-step-forward:before{content:\"\\F051\"}\n.fa-eject:before{content:\"\\F052\"}\n.fa-chevron-left:before{content:\"\\F053\"}\n.fa-chevron-right:before{content:\"\\F054\"}\n.fa-plus-circle:before{content:\"\\F055\"}\n.fa-minus-circle:before{content:\"\\F056\"}\n.fa-times-circle:before{content:\"\\F057\"}\n.fa-check-circle:before{content:\"\\F058\"}\n.fa-question-circle:before{content:\"\\F059\"}\n.fa-info-circle:before{content:\"\\F05A\"}\n.fa-crosshairs:before{content:\"\\F05B\"}\n.fa-times-circle-o:before{content:\"\\F05C\"}\n.fa-check-circle-o:before{content:\"\\F05D\"}\n.fa-ban:before{content:\"\\F05E\"}\n.fa-arrow-left:before{content:\"\\F060\"}\n.fa-arrow-right:before{content:\"\\F061\"}\n.fa-arrow-up:before{content:\"\\F062\"}\n.fa-arrow-down:before{content:\"\\F063\"}\n.fa-mail-forward:before,.fa-share:before{content:\"\\F064\"}\n.fa-resize-full:before{content:\"\\F065\"}\n.fa-resize-small:before{content:\"\\F066\"}\n.fa-plus:before{content:\"\\F067\"}\n.fa-minus:before{content:\"\\F068\"}\n.fa-asterisk:before{content:\"\\F069\"}\n.fa-exclamation-circle:before{content:\"\\F06A\"}\n.fa-gift:before{content:\"\\F06B\"}\n.fa-leaf:before{content:\"\\F06C\"}\n.fa-fire:before{content:\"\\F06D\"}\n.fa-eye:before{content:\"\\F06E\"}\n.fa-eye-slash:before{content:\"\\F070\"}\n.fa-warning:before,.fa-exclamation-triangle:before{content:\"\\F071\"}\n.fa-plane:before{content:\"\\F072\"}\n.fa-calendar:before{content:\"\\F073\"}\n.fa-random:before{content:\"\\F074\"}\n.fa-comment:before{content:\"\\F075\"}\n.fa-magnet:before{content:\"\\F076\"}\n.fa-chevron-up:before{content:\"\\F077\"}\n.fa-chevron-down:before{content:\"\\F078\"}\n.fa-retweet:before{content:\"\\F079\"}\n.fa-shopping-cart:before{content:\"\\F07A\"}\n.fa-folder:before{content:\"\\F07B\"}\n.fa-folder-open:before{content:\"\\F07C\"}\n.fa-resize-vertical:before{content:\"\\F07D\"}\n.fa-resize-horizontal:before{content:\"\\F07E\"}\n.fa-bar-chart-o:before{content:\"\\F080\"}\n.fa-twitter-square:before{content:\"\\F081\"}\n.fa-facebook-square:before{content:\"\\F082\"}\n.fa-camera-retro:before{content:\"\\F083\"}\n.fa-key:before{content:\"\\F084\"}\n.fa-gears:before,.fa-cogs:before{content:\"\\F085\"}\n.fa-comments:before{content:\"\\F086\"}\n.fa-thumbs-o-up:before{content:\"\\F087\"}\n.fa-thumbs-o-down:before{content:\"\\F088\"}\n.fa-star-half:before{content:\"\\F089\"}\n.fa-heart-o:before{content:\"\\F08A\"}\n.fa-sign-out:before{content:\"\\F08B\"}\n.fa-linkedin-square:before{content:\"\\F08C\"}\n.fa-thumb-tack:before{content:\"\\F08D\"}\n.fa-external-link:before{content:\"\\F08E\"}\n.fa-sign-in:before{content:\"\\F090\"}\n.fa-trophy:before{content:\"\\F091\"}\n.fa-github-square:before{content:\"\\F092\"}\n.fa-upload:before{content:\"\\F093\"}\n.fa-lemon-o:before{content:\"\\F094\"}\n.fa-phone:before{content:\"\\F095\"}\n.fa-square-o:before{content:\"\\F096\"}\n.fa-bookmark-o:before{content:\"\\F097\"}\n.fa-phone-square:before{content:\"\\F098\"}\n.fa-twitter:before{content:\"\\F099\"}\n.fa-facebook:before{content:\"\\F09A\"}\n.fa-github:before{content:\"\\F09B\"}\n.fa-unlock:before{content:\"\\F09C\"}\n.fa-credit-card:before{content:\"\\F09D\"}\n.fa-rss:before{content:\"\\F09E\"}\n.fa-hdd-o:before{content:\"\\F0A0\"}\n.fa-bullhorn:before{content:\"\\F0A1\"}\n.fa-bell:before{content:\"\\F0F3\"}\n.fa-certificate:before{content:\"\\F0A3\"}\n.fa-hand-o-right:before{content:\"\\F0A4\"}\n.fa-hand-o-left:before{content:\"\\F0A5\"}\n.fa-hand-o-up:before{content:\"\\F0A6\"}\n.fa-hand-o-down:before{content:\"\\F0A7\"}\n.fa-arrow-circle-left:before{content:\"\\F0A8\"}\n.fa-arrow-circle-right:before{content:\"\\F0A9\"}\n.fa-arrow-circle-up:before{content:\"\\F0AA\"}\n.fa-arrow-circle-down:before{content:\"\\F0AB\"}\n.fa-globe:before{content:\"\\F0AC\"}\n.fa-wrench:before{content:\"\\F0AD\"}\n.fa-tasks:before{content:\"\\F0AE\"}\n.fa-filter:before{content:\"\\F0B0\"}\n.fa-briefcase:before{content:\"\\F0B1\"}\n.fa-fullscreen:before{content:\"\\F0B2\"}\n.fa-group:before{content:\"\\F0C0\"}\n.fa-chain:before,.fa-link:before{content:\"\\F0C1\"}\n.fa-cloud:before{content:\"\\F0C2\"}\n.fa-flask:before{content:\"\\F0C3\"}\n.fa-cut:before,.fa-scissors:before{content:\"\\F0C4\"}\n.fa-copy:before,.fa-files-o:before{content:\"\\F0C5\"}\n.fa-paperclip:before{content:\"\\F0C6\"}\n.fa-save:before,.fa-floppy-o:before{content:\"\\F0C7\"}\n.fa-square:before{content:\"\\F0C8\"}\n.fa-reorder:before{content:\"\\F0C9\"}\n.fa-list-ul:before{content:\"\\F0CA\"}\n.fa-list-ol:before{content:\"\\F0CB\"}\n.fa-strikethrough:before{content:\"\\F0CC\"}\n.fa-underline:before{content:\"\\F0CD\"}\n.fa-table:before{content:\"\\F0CE\"}\n.fa-magic:before{content:\"\\F0D0\"}\n.fa-truck:before{content:\"\\F0D1\"}\n.fa-pinterest:before{content:\"\\F0D2\"}\n.fa-pinterest-square:before{content:\"\\F0D3\"}\n.fa-google-plus-square:before{content:\"\\F0D4\"}\n.fa-google-plus:before{content:\"\\F0D5\"}\n.fa-money:before{content:\"\\F0D6\"}\n.fa-caret-down:before{content:\"\\F0D7\"}\n.fa-caret-up:before{content:\"\\F0D8\"}\n.fa-caret-left:before{content:\"\\F0D9\"}\n.fa-caret-right:before{content:\"\\F0DA\"}\n.fa-columns:before{content:\"\\F0DB\"}\n.fa-unsorted:before,.fa-sort:before{content:\"\\F0DC\"}\n.fa-sort-down:before,.fa-sort-asc:before{content:\"\\F0DD\"}\n.fa-sort-up:before,.fa-sort-desc:before{content:\"\\F0DE\"}\n.fa-envelope:before{content:\"\\F0E0\"}\n.fa-linkedin:before{content:\"\\F0E1\"}\n.fa-rotate-left:before,.fa-undo:before{content:\"\\F0E2\"}\n.fa-legal:before,.fa-gavel:before{content:\"\\F0E3\"}\n.fa-dashboard:before,.fa-tachometer:before{content:\"\\F0E4\"}\n.fa-comment-o:before{content:\"\\F0E5\"}\n.fa-comments-o:before{content:\"\\F0E6\"}\n.fa-flash:before,.fa-bolt:before{content:\"\\F0E7\"}\n.fa-sitemap:before{content:\"\\F0E8\"}\n.fa-umbrella:before{content:\"\\F0E9\"}\n.fa-paste:before,.fa-clipboard:before{content:\"\\F0EA\"}\n.fa-lightbulb-o:before{content:\"\\F0EB\"}\n.fa-exchange:before{content:\"\\F0EC\"}\n.fa-cloud-download:before{content:\"\\F0ED\"}\n.fa-cloud-upload:before{content:\"\\F0EE\"}\n.fa-user-md:before{content:\"\\F0F0\"}\n.fa-stethoscope:before{content:\"\\F0F1\"}\n.fa-suitcase:before{content:\"\\F0F2\"}\n.fa-bell-o:before{content:\"\\F0A2\"}\n.fa-coffee:before{content:\"\\F0F4\"}\n.fa-cutlery:before{content:\"\\F0F5\"}\n.fa-file-text-o:before{content:\"\\F0F6\"}\n.fa-building:before{content:\"\\F0F7\"}\n.fa-hospital:before{content:\"\\F0F8\"}\n.fa-ambulance:before{content:\"\\F0F9\"}\n.fa-medkit:before{content:\"\\F0FA\"}\n.fa-fighter-jet:before{content:\"\\F0FB\"}\n.fa-beer:before{content:\"\\F0FC\"}\n.fa-h-square:before{content:\"\\F0FD\"}\n.fa-plus-square:before{content:\"\\F0FE\"}\n.fa-angle-double-left:before{content:\"\\F100\"}\n.fa-angle-double-right:before{content:\"\\F101\"}\n.fa-angle-double-up:before{content:\"\\F102\"}\n.fa-angle-double-down:before{content:\"\\F103\"}\n.fa-angle-left:before{content:\"\\F104\"}\n.fa-angle-right:before{content:\"\\F105\"}\n.fa-angle-up:before{content:\"\\F106\"}\n.fa-angle-down:before{content:\"\\F107\"}\n.fa-desktop:before{content:\"\\F108\"}\n.fa-laptop:before{content:\"\\F109\"}\n.fa-tablet:before{content:\"\\F10A\"}\n.fa-mobile-phone:before,.fa-mobile:before{content:\"\\F10B\"}\n.fa-circle-o:before{content:\"\\F10C\"}\n.fa-quote-left:before{content:\"\\F10D\"}\n.fa-quote-right:before{content:\"\\F10E\"}\n.fa-spinner:before{content:\"\\F110\"}\n.fa-circle:before{content:\"\\F111\"}\n.fa-mail-reply:before,.fa-reply:before{content:\"\\F112\"}\n.fa-github-alt:before{content:\"\\F113\"}\n.fa-folder-o:before{content:\"\\F114\"}\n.fa-folder-open-o:before{content:\"\\F115\"}\n.fa-expand-o:before{content:\"\\F116\"}\n.fa-collapse-o:before{content:\"\\F117\"}\n.fa-smile-o:before{content:\"\\F118\"}\n.fa-frown-o:before{content:\"\\F119\"}\n.fa-meh-o:before{content:\"\\F11A\"}\n.fa-gamepad:before{content:\"\\F11B\"}\n.fa-keyboard-o:before{content:\"\\F11C\"}\n.fa-flag-o:before{content:\"\\F11D\"}\n.fa-flag-checkered:before{content:\"\\F11E\"}\n.fa-terminal:before{content:\"\\F120\"}\n.fa-code:before{content:\"\\F121\"}\n.fa-reply-all:before{content:\"\\F122\"}\n.fa-mail-reply-all:before{content:\"\\F122\"}\n.fa-star-half-empty:before,.fa-star-half-full:before,.fa-star-half-o:before{content:\"\\F123\"}\n.fa-location-arrow:before{content:\"\\F124\"}\n.fa-crop:before{content:\"\\F125\"}\n.fa-code-fork:before{content:\"\\F126\"}\n.fa-unlink:before,.fa-chain-broken:before{content:\"\\F127\"}\n.fa-question:before{content:\"\\F128\"}\n.fa-info:before{content:\"\\F129\"}\n.fa-exclamation:before{content:\"\\F12A\"}\n.fa-superscript:before{content:\"\\F12B\"}\n.fa-subscript:before{content:\"\\F12C\"}\n.fa-eraser:before{content:\"\\F12D\"}\n.fa-puzzle-piece:before{content:\"\\F12E\"}\n.fa-microphone:before{content:\"\\F130\"}\n.fa-microphone-slash:before{content:\"\\F131\"}\n.fa-shield:before{content:\"\\F132\"}\n.fa-calendar-o:before{content:\"\\F133\"}\n.fa-fire-extinguisher:before{content:\"\\F134\"}\n.fa-rocket:before{content:\"\\F135\"}\n.fa-maxcdn:before{content:\"\\F136\"}\n.fa-chevron-circle-left:before{content:\"\\F137\"}\n.fa-chevron-circle-right:before{content:\"\\F138\"}\n.fa-chevron-circle-up:before{content:\"\\F139\"}\n.fa-chevron-circle-down:before{content:\"\\F13A\"}\n.fa-html5:before{content:\"\\F13B\"}\n.fa-css3:before{content:\"\\F13C\"}\n.fa-anchor:before{content:\"\\F13D\"}\n.fa-unlock-o:before{content:\"\\F13E\"}\n.fa-bullseye:before{content:\"\\F140\"}\n.fa-ellipsis-horizontal:before{content:\"\\F141\"}\n.fa-ellipsis-vertical:before{content:\"\\F142\"}\n.fa-rss-square:before{content:\"\\F143\"}\n.fa-play-circle:before{content:\"\\F144\"}\n.fa-ticket:before{content:\"\\F145\"}\n.fa-minus-square:before{content:\"\\F146\"}\n.fa-minus-square-o:before{content:\"\\F147\"}\n.fa-level-up:before{content:\"\\F148\"}\n.fa-level-down:before{content:\"\\F149\"}\n.fa-check-square:before{content:\"\\F14A\"}\n.fa-pencil-square:before{content:\"\\F14B\"}\n.fa-external-link-square:before{content:\"\\F14C\"}\n.fa-share-square:before{content:\"\\F14D\"}\n.fa-compass:before{content:\"\\F14E\"}\n.fa-toggle-down:before,.fa-caret-square-o-down:before{content:\"\\F150\"}\n.fa-toggle-up:before,.fa-caret-square-o-up:before{content:\"\\F151\"}\n.fa-toggle-right:before,.fa-caret-square-o-right:before{content:\"\\F152\"}\n.fa-euro:before,.fa-eur:before{content:\"\\F153\"}\n.fa-gbp:before{content:\"\\F154\"}\n.fa-dollar:before,.fa-usd:before{content:\"\\F155\"}\n.fa-rupee:before,.fa-inr:before{content:\"\\F156\"}\n.fa-cny:before,.fa-rmb:before,.fa-yen:before,.fa-jpy:before{content:\"\\F157\"}\n.fa-ruble:before,.fa-rouble:before,.fa-rub:before{content:\"\\F158\"}\n.fa-won:before,.fa-krw:before{content:\"\\F159\"}\n.fa-bitcoin:before,.fa-btc:before{content:\"\\F15A\"}\n.fa-file:before{content:\"\\F15B\"}\n.fa-file-text:before{content:\"\\F15C\"}\n.fa-sort-alpha-asc:before{content:\"\\F15D\"}\n.fa-sort-alpha-desc:before{content:\"\\F15E\"}\n.fa-sort-amount-asc:before{content:\"\\F160\"}\n.fa-sort-amount-desc:before{content:\"\\F161\"}\n.fa-sort-numeric-asc:before{content:\"\\F162\"}\n.fa-sort-numeric-desc:before{content:\"\\F163\"}\n.fa-thumbs-up:before{content:\"\\F164\"}\n.fa-thumbs-down:before{content:\"\\F165\"}\n.fa-youtube-square:before{content:\"\\F166\"}\n.fa-youtube:before{content:\"\\F167\"}\n.fa-xing:before{content:\"\\F168\"}\n.fa-xing-square:before{content:\"\\F169\"}\n.fa-youtube-play:before{content:\"\\F16A\"}\n.fa-dropbox:before{content:\"\\F16B\"}\n.fa-stack-overflow:before{content:\"\\F16C\"}\n.fa-instagram:before{content:\"\\F16D\"}\n.fa-flickr:before{content:\"\\F16E\"}\n.fa-adn:before{content:\"\\F170\"}\n.fa-bitbucket:before{content:\"\\F171\"}\n.fa-bitbucket-square:before{content:\"\\F172\"}\n.fa-tumblr:before{content:\"\\F173\"}\n.fa-tumblr-square:before{content:\"\\F174\"}\n.fa-long-arrow-down:before{content:\"\\F175\"}\n.fa-long-arrow-up:before{content:\"\\F176\"}\n.fa-long-arrow-left:before{content:\"\\F177\"}\n.fa-long-arrow-right:before{content:\"\\F178\"}\n.fa-apple:before{content:\"\\F179\"}\n.fa-windows:before{content:\"\\F17A\"}\n.fa-android:before{content:\"\\F17B\"}\n.fa-linux:before{content:\"\\F17C\"}\n.fa-dribbble:before{content:\"\\F17D\"}\n.fa-skype:before{content:\"\\F17E\"}\n.fa-foursquare:before{content:\"\\F180\"}\n.fa-trello:before{content:\"\\F181\"}\n.fa-female:before{content:\"\\F182\"}\n.fa-male:before{content:\"\\F183\"}\n.fa-gittip:before{content:\"\\F184\"}\n.fa-sun-o:before{content:\"\\F185\"}\n.fa-moon-o:before{content:\"\\F186\"}\n.fa-archive:before{content:\"\\F187\"}\n.fa-bug:before{content:\"\\F188\"}\n.fa-vk:before{content:\"\\F189\"}\n.fa-weibo:before{content:\"\\F18A\"}\n.fa-renren:before{content:\"\\F18B\"}\n.fa-pagelines:before{content:\"\\F18C\"}\n.fa-stack-exchange:before{content:\"\\F18D\"}\n.fa-arrow-circle-o-right:before{content:\"\\F18E\"}\n.fa-arrow-circle-o-left:before{content:\"\\F190\"}\n.fa-toggle-left:before,.fa-caret-square-o-left:before{content:\"\\F191\"}\n.fa-dot-circle-o:before{content:\"\\F192\"}\n.fa-wheelchair:before{content:\"\\F193\"}\n.fa-vimeo-square:before{content:\"\\F194\"}\n.fa-turkish-lira:before,.fa-try:before{content:\"\\F195\"}\n\n\nhtml, body\n{\n  height: 100%;\n}\n\nbody\n{\n  margin: 0px;\n  padding: 0px;\n  background: #79C255;\n  font-family: 'Montserrat', sans-serif;\n  font-size: 11pt;\n  font-weight: 200;\n  color: #656565;\n}\n\n\nh1, h2, h3\n{\n  margin: 0;\n  padding: 0;\n  font-weight: 700;\n  color: #2B3F48;\n}\n\np, ol, ul\n{\n  margin-top: 0;\n}\n\nol, ul\n{\n  padding: 0;\n  list-style: none;\n}\n\nul.actions\n{\n  text-align: center;\n}\n\nul.actions li\n{\n}\n\np\n{\n  line-height: 180%;\n}\n\nstrong\n{\n}\n\na\n{\n  color: #0000FF;\n}\n\na:hover\n{\n  text-decoration: none;\n}\n\n.container\n{\n  overflow: hidden;\n  margin: 0em auto;\n  width: 1000px;\n}\n\n/*********************************************************************************/\n/* Image Style                                                                   */\n/*********************************************************************************/\n\n.image\n{\n  display: inline-block;\n}\n\n.image img\n{\n  display: block;\n  width: 100%;\n}\n\n.image-full\n{\n  display: block;\n  width: 100%;\n  margin: 0 0 2em 0;\n}\n\n.image-left\n{\n  float: left;\n  margin: 0 2em 2em 0;\n}\n\n.image-centered\n{\n  display: block;\n  margin: 0 0 2em 0;\n}\n\n.image-centered img\n{\n  margin: 0 auto;\n  width: auto;\n}\n\n/*********************************************************************************/\n/* List Styles                                                                   */\n/*********************************************************************************/\n\nul.staff\n{\n  margin-bottom: 3em;\n}\n\nul.staff li\n{\n  display: inline-block;\n}\n\nul.staff li img\n{\n  width: 80%;\n  border-radius: 50%;\n}\n\n\n/*********************************************************************************/\n/* Social Icon Styles                                                            */\n/*********************************************************************************/\n\nul.contact\n{\n  margin: 0;\n  padding: 2em 0em 0em 0em;\n  list-style: none;\n}\n\nul.contact li\n{\n  display: inline-block;\n  padding: 0em 0.30em;\n  font-size: 1em;\n}\n\nul.contact li span\n{\n  display: none;\n  margin: 0;\n  padding: 0;\n}\n\nul.contact li a\n{\n  color: #FFF;\n}\n\nul.contact li a:before\n{\n  display: inline-block;\n  background: #3f3f3f;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  text-align: center;\n  color: #FFFFFF;\n}\n\nul.contact li a.icon-twitter:before { background: #2DAAE4; }\nul.contact li a.icon-facebook:before { background: #39599F; }\nul.contact li a.icon-dribbble:before { background: #C4376B;\t}\nul.contact li a.icon-tumblr:before { background: #31516A; }\nul.contact li a.icon-rss:before { background: #F2600B; }\n\n/*********************************************************************************/\n/* Button Style                                                                  */\n/*********************************************************************************/\n\n.button\n{\n  display: inline-block;\n  padding: 0em 3em;\n  background: #79C255;\n  border-radius: 8px;\n  letter-spacing: 0.20em;\n  line-height: 4em;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 1em;\n  color: #FFF;\n}\n\n.button:before\n{\n  display: inline-block;\n  background: #FFC31F;\n  margin-right: 1em;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  text-align: center;\n  color: #272925;\n}\n\n/*********************************************************************************/\n/* Heading Titles                                                                */\n/*********************************************************************************/\n\n.title\n{\n  margin-bottom: 3em;\n}\n\n.title h2\n{\n  text-transform: uppercase;\n  font-size: 2.7em;\n}\n\n.title .byline\n{\n  font-size: 1.7em;\n  color: #6F6F6F;\n}\n\n/*********************************************************************************/\n/* 4-column                                                                      */\n/*********************************************************************************/\n\n.box1,\n.box2,\n.box3,\n.box4\n{\n  width: 235px;\n}\n\n.box1,\n.box2,\n.box3\n{\n  float: left;\n  margin-right: 20px;\n}\n\n.box4\n{\n  float: right;\n}\n\n/*********************************************************************************/\n/* 3-column                                                                      */\n/*********************************************************************************/\n\n.boxA,\n.boxB,\n.boxC\n{\n  width: 320px;\n}\n\n.boxA,\n.boxB\n{\n  float: left;\n  margin-right: 20px;\n}\n\n.boxC\n{\n  float: right;\n}\n\n/*********************************************************************************/\n/* 2-column                                                                      */\n/*********************************************************************************/\n\n.tbox1,\n.tbox2\n{\n  width: 575px;\n}\n\n.tbox1\n{\n  float: left;\n}\n\n.tbox2\n{\n  float: right;\n}\n\n#wrapper\n{\n  background: #FFF;\n}\n\n/*********************************************************************************/\n/* Header                                                                        */\n/*********************************************************************************/\n\n#header\n{\n  position: relative;\n  padding: 5em 0em;\n}\n\n/*********************************************************************************/\n/* Logo                                                                          */\n/*********************************************************************************/\n\n#logo\n{\n  position: absolute;\n  top: 4em;\n  left: 0;\n}\n\n#logo h1\n{\n  color: #79C255;\n}\n\n#logo a\n{\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #79C255;\n}\n\n/*********************************************************************************/\n/* Menu                                                                          */\n/*********************************************************************************/\n\n#menu\n{\n  position: absolute;\n  top: 4.5em;\n  right: 0;\n}\n\n#menu ul\n{\n  display: inline-block;\n}\n\n#menu li\n{\n  display: block;\n  float: left;\n  text-align: center;\n}\n\n#menu li a, #menu li span\n{\n  padding: 1em 1.5em;\n  letter-spacing: 1px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #2B3F48;\n}\n\n#menu li:hover a, #menu li.active a, #menu li.active span\n{\n  color: #2B3F48;\n}\n\n#menu .current_page_item a\n{\n  border: 2px solid #79C255;\n  background: #79C255;\n  border-radius: 6px;\n  color: #FFF;\n}\n\n#menu .icon\n{\n}\n\n/*********************************************************************************/\n/* Banner                                                                        */\n/*********************************************************************************/\n\n#banner\n{\n  overflow: hidden;\n  padding: 10em 0em;\n  background: url(" + __webpack_require__(665) + ") no-repeat center;\n  background-size: cover;\n  text-align: center;\n  color: rgba(255,255,255,.8);\n}\n\n#banner .title\n{\n  margin-bottom: 1em;\n  text-transform: uppercase !important;\n}\n\n#banner .title h2\n{\n  color: #FFF;\n}\n\n#banner .title .byline\n{\n  color: rgba(255,255,255,.6);\n}\n\n#banner .button\n{\n  margin-top: 3em;\n  background: #589937 !important;\n}\n\n/*********************************************************************************/\n/* Page                                                                          */\n/*********************************************************************************/\n\n#page\n{\n  padding: 2em 0em 5em 0em;\n  text-align: center;\n}\n\n#page .button\n{\n  margin-top: 2em;\n  display: inline-block;\n  text-align: center;\n}\n\n/*********************************************************************************/\n/* Content                                                                       */\n/*********************************************************************************/\n\n#content\n{\n}\n\n/*********************************************************************************/\n/* Sidebar                                                                       */\n/*********************************************************************************/\n\n#sidebar\n{\n}\n\n/*********************************************************************************/\n/* Footer                                                                        */\n/*********************************************************************************/\n\n#footer\n{\n}\n\n/*********************************************************************************/\n/* Copyright                                                                     */\n/*********************************************************************************/\n\n#copyright\n{\n  overflow: hidden;\n  padding: 5em 0em;\n  border-top: 1px solid rgba(255,255,255,0.08);\n}\n\n#copyright p\n{\n  text-align: center;\n  font-size: 1em;\n  color: rgba(255,255,255,0.5);\n}\n\n#copyright a\n{\n  text-decoration: none;\n  color: rgba(255,255,255,0.8);\n}\n\n/*********************************************************************************/\n/* Featured                                                                      */\n/*********************************************************************************/\n\n#featured\n{\n  overflow: hidden;\n  padding: 5em 0em;\n  background: #79C255;\n  color: rgba(255,255,255,.8);\n  text-align: center;\n}\n\n#featured a\n{\n  color: rgba(255,255,255,1);\n}\n\n#featured .button\n{\n  background: #FFF;\n  margin-top: 3em;\n  font-size: 1em;\n  color: #79C255;\n}\n\n#featured .title\n{\n}\n\n#featured .title h2\n{\n  color: #FFF;\n}\n\n#featured .title .byline\n{\n  color: rgba(255,255,255,.6);\n}\n\n/*********************************************************************************/\n/* Featured                                                                      */\n/*********************************************************************************/\n\n.box\n{\n  padding: 3em 2em 2em 2em;\n  border: 1px solid rgba(0,0,0,0.1);\n  border-radius: 8px;\n  text-align: center;\n}\n\n\n#extra\n{\n  overflow: hidden;\n  padding: 5em 0em;\n}\n\n#extra .title\n{\n  text-align: center;\n}\n\n#extra .button\n{\n  margin-top: 5em;\n}\n\n#extra .fa\n{\n  display: block;\n  margin-bottom: 0.5em;\n  text-align: center;\n  font-size: 3em;\n}\n\n.gallery\n{\n  overflow: hidden;\n  margin-bottom: 3em;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.455808250694e5760bd9.eot";

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.455808250694e5760bd9.eot";

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.b8e4dbe6872f049283c5.svg";

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"top\">-->\n  <!--<h1 class=\"h1\">-->\n    <!--{{title}}-->\n    <!--<small class=\"h1\">Random images of litter around your community.</small>-->\n  <!--</h1>-->\n<!--</div>-->\n<!--<div class=\"outer\">-->\n  <!--<div class=\"bottom\">-->\n    <!--<div *ngIf=\"currentLitter\" class=\"gallery fill\">-->\n      <!--&lt;!&ndash;<a target=\"_blank\" (click)=\"open(content, currentLitter)\" class=\"center\">&ndash;&gt;-->\n      <!--{{address}}-->\n\n      <!--<img class=\"center\" [src]=\"'data:image/jpg;base64,' + currentLitter.litter_image_url | UnsafePipe\" alt=\"\">-->\n      <!--&lt;!&ndash;</a>&ndash;&gt;-->\n      <!--<div class=\"desc\">{{currentLitter.litter_image}}</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n<!--<ng-template #content let-c=\"close\" let-d=\"dismiss\">-->\n  <!--<div class=\"modal-header gallery\">-->\n    <!--<h4 class=\"modal-title\">Litter Location</h4>-->\n    <!--<button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">-->\n      <!--<span aria-hidden=\"true\">&times;</span>-->\n    <!--</button>-->\n  <!--</div>-->\n  <!--<div class=\"modal-body gallery\">-->\n    <!--<img class=\"img-lightbox center-block\" src=\"'data:image/jpg;base64,' + currentLitter.litter_image_url | UnsafePipe\">-->\n    <!--<small>{{address}}</small>-->\n  <!--</div>-->\n  <!--<div class=\"modal-footer\">-->\n    <!--<button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>-->\n  <!--</div>-->\n<!--</ng-template>-->\n\n\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n<!--\nDesign by TEMPLATED\nhttp://templated.co\nReleased for free under the Creative Commons Attribution License\n\nName       : CrossWalk\nDescription: A two-column, fixed-width design with dark color scheme.\nVersion    : 1.0\nReleased   : 20140216\n\n-->\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />\n  <title></title>\n  <meta name=\"keywords\" content=\"\" />\n  <meta name=\"description\" content=\"\" />\n  <link href=\"http://fonts.googleapis.com/css?family=Montserrat:400,700\" rel=\"stylesheet\" />\n  <!--<link href=\"default.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />-->\n  <!--<link href=\"fonts.css\" rel=\"stylesheet\" type=\"text/css\" media=\"all\" />-->\n\n  <!--[if IE 6]><link href=\"default_ie6.css\" rel=\"stylesheet\" type=\"text/css\" /><![endif]-->\n\n</head>\n<body>\n<div id=\"wrapper\">\n  <div id=\"header\" class=\"container\">\n    <div id=\"logo\">\n      <h1><a href=\"#\">Pick of the Litter</a></h1>\n    </div>\n    <div id=\"menu\">\n      <ul>\n        <li class=\"current_page_item\"><a href=\"#\" accesskey=\"1\" title=\"\">Homepage</a></li>\n        <li><a href=\"#\" accesskey=\"2\" title=\"\">App Store</a></li>\n        <li><a href=\"https://play.google.com/store/apps/details?id=net.marcusbellamy.litter&hl=en\" accesskey=\"3\" title=\"\">Play Store</a></li>\n        <!--<li><a href=\"#\" accesskey=\"4\" title=\"\">Careers</a></li>-->\n        <li><a href=\"mailto:arnett.bellamy+litter@gmail.com\" accesskey=\"5\" title=\"\">Contact Me</a></li>\n      </ul>\n    </div>\n  </div>\n  <div id=\"banner\">&nbsp;</div>\n  <div id=\"featured\">\n    <div class=\"container\">\n      <div class=\"title\">\n        <h2>A helping hand in community cleanliness.</h2>\n        <span class=\"byline\">Alert the community of litter simply by posting an image.</span> </div>\n      <p>This is <strong>Pick of the Litter</strong>, a free, mobile application created with the community in mind.  See a piece of litter that you cannot remove? Cue the community.  Post a picture of the litter with <strong>Pick of the Litter</strong> and watch the community swoop in to assist. Simple as that.  When you post a picture of litter it viewable to everyone using the app within 25 miles.  Allowing someone to come and remove the litter in question. </p>\n    </div>\n    <ul class=\"actions\">\n      <li><a href=\"#\" class=\"button\">Try it now!</a></li>\n    </ul>\n  </div>\n  <div id=\"extra\" class=\"container\">\n    <div class=\"title\">\n      <h2>Pick of the Litter</h2>\n      <span class=\"byline\">SFW let's keep it clean.</span> </div>\n    <div id=\"three-column\">\n      <div class=\"boxA\">\n        <div class=\"box\"> <span class=\"fa fa-cloud-download\"></span>\n          <p>Available on both Apple App Store and Google Play Store.</p>\n        </div>\n      </div>\n      <div class=\"boxB\">\n        <div class=\"box\"> <span class=\"fa fa-cogs\"></span>\n          <p>Location-based crowd sourced litter removal tool.</p>\n        </div>\n      </div>\n      <div class=\"boxC\">\n        <div class=\"box\"> <span class=\"fa fa-user\"></span>\n          <p> Create an account and help keep your community clean!</p>\n        </div>\n      </div>\n    </div>\n    <ul class=\"actions\">\n      <li><a href=\"#\" class=\"button\">Get Started</a></li>\n    </ul>\n  </div>\n  <div id=\"page\" class=\"container\">\n    <div class=\"title\">\n      <h2>Random Trash</h2>\n      <span class=\"byline\">Here is a piece of litter that was randomly selected to shame you into using this application.</span> </div>\n    <div class=\"gallery\">\n      <div class=\"boxA\"><img src=\"./images/pic01.jpg\" width=\"320\" height=\"200\" alt=\"\" /></div>\n      <div class=\"boxB\"><img [src]=\"'data:image/jpg;base64,' + currentLitter.litter_image_url | UnsafePipe\" width=\"320\" height=\"200\" alt=\"\" /></div>\n      <div class=\"boxC\"><img src=\"images/pic03.jpg\" width=\"320\" height=\"200\" alt=\"\" /></div>\n    </div>\n    <p>This piece of trash has a home and the ground is not it.  Do your part to reconnect this trash with its home. Be it a trash can, garbage can, dustbin, waste basket, garbage pail, litter basket, dumpster, trash barrel, or a trash receptacle. Just help it find the way. </p>\n    <ul class=\"actions\">\n      <li><a href=\"#\" class=\"button\">Pick it up!</a></li>\n    </ul>\n  </div>\n</div>\n<div id=\"copyright\" class=\"container\">\n  <p>&copy; Pick of the Litter. All rights reserved. | Photos by the Community.</p>\n</div>\n</body>\n</html>\n"

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });

var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.extractData = function (res) {
        var body = res.json();
        console.log(res.json());
        localStorage.setItem('token', res.headers.get('token'));
        return body || {};
    };
    Helper.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            console.error(error);
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Promise.reject(errMsg);
    };
    return Helper;
}());

//# sourceMappingURL=helper.js.map

/***/ }),

/***/ 663:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.bb72c5142ae2ae4ca0f9.ttf";

/***/ }),

/***/ 664:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.21f212f94a9db6a0e384.woff";

/***/ }),

/***/ 665:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.5c4d853ea9e5e414633b.jpg";

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(303);


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MISC_helper__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(help, http) {
        this.help = help;
        this.http = http;
        this.serverUrl = 'http://localhost:8080/Login';
    }
    AuthService.prototype.getAuthorizationHeader = function () {
        var token = localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Authorization': 'Bearer ' + token });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
    };
    AuthService.prototype.login = function (email, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        var cred = { email: email, password: password };
        return this.http.post(this.serverUrl, cred, options)
            .toPromise()
            .then(this.help.extractData)
            .catch(this.help.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__MISC_helper__["a" /* Helper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__MISC_helper__["a" /* Helper */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ })

},[668]);
//# sourceMappingURL=main.bundle.js.map
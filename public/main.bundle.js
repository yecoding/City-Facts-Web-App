webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\n.container {\n  max-width: 960px;\n}\n\n/*.pricing-header {\n  max-width: 700px;\n}*/\n\n.card-deck .card {\n  min-width: 220px;\n}\n\n.bg-image{\n/*\tbackground: yellow url(\"image/fantasy-2543658_1920.jpg\") no-repeat cover;*/\n/*\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n*/\n\n\tbackground-image: url(" + escape(__webpack_require__("../../../../../src/app/image/city-1031435_1920.jpg")) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: cover;\n\n}\n\n.border-top { border-top: 1px solid #e5e5e5; }\n\n.border-bottom { border-bottom: 1px solid #e5e5e5; }\n\n.box-shadow { -webkit-box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05); }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"position-relative overflow-hidden p-3 p-md-5 text-center bg-image\">\n      <div class=\"col-md-8 p-lg-5 mx-auto my-5\">\n        <h1 class=\"display-4 font-weight-normal mx-auto text-white\">Hello, {{result_cityname}}</h1>\n        <p class=\"lead font-weight-light\">This is a single page web app using Angular, Express, Node.js and MySQL. <br>Check it out by input your city name here:</p>\n            \n        <form class=\"card p-2\">\n            <div class=\"input-group\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Type your City Name\" name=\"cityname\" [(ngModel)]=\"cityname\">\n                  \n                  <div class=\"input-group-append\">\n                    <button type=\"submit\" class=\"btn btn-secondary\" \n                    (click)='getData()'>Check it out!</button>\n                  </div>\n            </div>\n        </form>\n      </div>\n</div>\n\n  <div class=\"container mt-3\">\n      <div class=\"card-deck mb-3 text-center\">\n\n        <div class=\"card mb-4 box-shadow\">\n          <div class=\"card-header bg-dark\">\n            <h4 class=\"my-0 font-weight-normal text-white\">Population</h4>\n          </div>\n\n          <div class=\"card-body position-relative\">\n\n              <app-population [cityname]=\"result_cityname\" [population]=\"population\"></app-population>\n\n          </div>\n\n          <div class=\"card-footer text-muted\">\n                  Based on open data in 2006\n          </div>\n        </div>\n\n\n        <div class=\"card mb-4 box-shadow\">\n          <div class=\"card-header bg-dark\">\n            <h4 class=\"my-0 font-weight-normal text-white\">Weather</h4>\n          </div>\n          <div class=\"card-body\">\n\n              <app-weather \n\n              [weather_temp]=\"temperature\"\n              [weather_main]=\"weather_condition\">\n              </app-weather>\n\n          </div>\n\n          <div class=\"card-footer text-muted\">\n                  Data Source: Open Weather Map\n          </div>\n        </div>\n\n        <div class=\"card mb-4 box-shadow \">\n          <div class=\"card-header bg-dark\">\n            <h4 class=\"my-0 font-weight-normal text-white\">Location</h4>\n          </div>\n\n          <div class=\"card-body\">\n\n              <app-location \n\n              [location_lon]=\"location_lon\"\n              [location_lat]=\"location_lat\"\n              >\n              </app-location>\n\n          </div>\n\n          <div class=\"card-footer text-muted\">\n                Data Source: Open Weather Map\n          </div>\n        </div>\n      </div>\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_population_service__ = __webpack_require__("../../../../../src/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_location_service__ = __webpack_require__("../../../../../src/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_weather_service__ = __webpack_require__("../../../../../src/services/weather.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(populationService, weatherService, locationService) {
        this.populationService = populationService;
        this.weatherService = weatherService;
        this.locationService = locationService;
        this.result_cityname = "Cities";
        this.population = "Not Available";
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.cityname = this.cityname.trim();
        this.populationService.getPopulation(this.cityname)
            .subscribe(function (result) {
            console.log('AAAAAAAAA');
            console.log(result);
            _this.result_population = result;
            if (_this.result_population.status == 200) {
                var parseResult = JSON.parse(_this.result_population['_body']);
                _this.population = parseInt(parseResult.Population).toLocaleString();
                console.log(_this.population);
                _this.result_cityname = parseResult.Name;
                console.log(_this.result_cityname);
            }
            else if (_this.result_population.status == 204) {
                _this.population = 'Not Available';
                _this.result_cityname = "Cities";
            }
            else {
            }
        });
        this.weatherService.getWeather(this.cityname)
            .subscribe(function (result) {
            _this.result_weather = result;
            if (result != undefined) {
                _this.temperature = _this.result_weather.main.temp;
                _this.weather_condition = _this.result_weather.weather[0].main;
                _this.location_lon = _this.result_weather.coord.lon;
                _this.location_lat = _this.result_weather.coord.lat;
            }
            // console.log(this.result_weather['main']);
            // console.log(this.result_weather['weather']);
            // console.log(this.result_weather['coord']);
        }, function (error) {
            _this.temperature = undefined;
            _this.weather_condition = undefined;
            _this.location_lon = undefined;
            _this.location_lat = undefined;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_population_service__["a" /* PopulationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_weather_service__["a" /* WeatherService */],
            __WEBPACK_IMPORTED_MODULE_3__services_location_service__["a" /* LocationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_population_population_component__ = __webpack_require__("../../../../../src/app/components/population/population.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_weather_weather_component__ = __webpack_require__("../../../../../src/app/components/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_location_location_component__ = __webpack_require__("../../../../../src/app/components/location/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_population_service__ = __webpack_require__("../../../../../src/services/population.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_weather_service__ = __webpack_require__("../../../../../src/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_location_service__ = __webpack_require__("../../../../../src/services/location.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_population_population_component__["a" /* PopulationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_location_location_component__["a" /* LocationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__services_population_service__["a" /* PopulationService */], __WEBPACK_IMPORTED_MODULE_9__services_weather_service__["a" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_10__services_location_service__["a" /* LocationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/location/location.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/location/location.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p class=\"lead\">The LOCATION of</p> -->\n<!-- <p class=\"lead font-weight-normal\">{{cityname}}</p> -->\n\n<h3 class=\" display-5\" [hidden]=\"location_lat ===undefined\">Lat: {{location_lat}}<br>Lon: {{location_lon}}</h3>\n<h3 class=\" display-5\" [hidden]=\"(location_lat !=undefined)\">Not Available</h3>"

/***/ }),

/***/ "../../../../../src/app/components/location/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationComponent.prototype, "location_lon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], LocationComponent.prototype, "location_lat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], LocationComponent.prototype, "cityname", void 0);
    LocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-location',
            template: __webpack_require__("../../../../../src/app/components/location/location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/population/population.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/population/population.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p class=\"lead\">The POPULATION of</p> -->\n<!-- <p class=\"lead font-weight-normal\"> {{cityname}} </p> -->\n\n<h3 class=\" display-5\">{{population}}</h3>\n"

/***/ }),

/***/ "../../../../../src/app/components/population/population.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopulationComponent = /** @class */ (function () {
    function PopulationComponent() {
        this.cityname = " ";
        this.population = " ";
    }
    PopulationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], PopulationComponent.prototype, "cityname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], PopulationComponent.prototype, "population", void 0);
    PopulationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-population',
            template: __webpack_require__("../../../../../src/app/components/population/population.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/population/population.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopulationComponent);
    return PopulationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <p class=\"lead\">Today's weather in</p> -->\n<!-- <p class=\"lead font-weight-normal\">{{cityname}}</p> -->\n\n<h3 class=\" display-5\" [hidden]=\"weather_main ===undefined\"><span text-muted>{{weather_main}}</span> {{weather_temp}} &#8451;</h3>\n<h3 class=\" display-5\" [hidden]=\"(weather_main !=undefined)\">Not Available</h3>"

/***/ }),

/***/ "../../../../../src/app/components/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
        this.cityname = " ";
        this.weather_main = " ";
        this.weather_temp = " ";
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], WeatherComponent.prototype, "cityname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], WeatherComponent.prototype, "weather_main", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", String)
    ], WeatherComponent.prototype, "weather_temp", void 0);
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/components/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image/city-1031435_1920.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "city-1031435_1920.fd6b4c2912e2ea26adab.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/services/population.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopulationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PopulationService = /** @class */ (function () {
    function PopulationService(http) {
        this.http = http;
    }
    PopulationService.prototype.getPopulation = function (term) {
        return this.http.get('http://ec2-35-183-18-67.ca-central-1.compute.amazonaws.com/cities/population/?name=' + term);
    };
    PopulationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PopulationService);
    return PopulationService;
}());



/***/ }),

/***/ "../../../../../src/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeather = function (term) {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + term + '&APPID=504fb52df226d4b7e338e42f5df14c19&units=metric')
            .map(function (response) { return response.json(); });
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
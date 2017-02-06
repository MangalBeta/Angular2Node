"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var webappstate_service_1 = require("./webappstate.service");
var router_1 = require("@angular/router");
var Rx_1 = require("rxjs/Rx");
var AuthService = (function () {
    function AuthService(_http, router, webAppstate, zone) {
        this._http = _http;
        this.router = router;
        this.webAppstate = webAppstate;
        this.zone = zone;
        this.isLoggedIn = !!this.webAppstate.getState('company_user');
        this.logIn$ = new Rx_1.BehaviorSubject(this.isLoggedIn);
        this.loggedIn = false;
        this.logIn$.asObservable();
        this.externalBS = this.logIn$;
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var myHeader = new http_1.Headers();
        myHeader.append('Content-Type', 'application/json');
        myHeader.append('Cache-Control', 'no-cache');
        myHeader.append('Pragma', 'no-cache');
        return this._http
            .post('/api//auth/login', JSON.stringify(credentials), { headers: myHeader })
            .map(function (response) {
            var user = response.json();
            if (user.status == "success") {
                _this.webAppstate.removeState('company_user');
                _this.webAppstate.removeState('isLoggedIn');
                _this.webAppstate.setState('company_user', JSON.stringify(user));
                _this.isLoggedIn = true;
                _this.logIn$.next(_this.isLoggedIn);
            }
            return user;
        });
    };
    AuthService.prototype.logout = function () {
        this.webAppstate.removeState('company_user');
        this.isLoggedIn = false;
        this.logIn$.next(this.isLoggedIn);
    };
    AuthService.prototype.check = function () {
        return this.externalBS.asObservable().startWith(this.isLoggedIn)
            .map(function (data) {
            var isLoggedIn = data;
            return isLoggedIn;
        });
    };
    AuthService.prototype.forgot = function (credentials) {
        var myHeader = new http_1.Headers();
        myHeader.append('Content-Type', 'application/json');
        myHeader.append('Cache-Control', 'no-cache');
        myHeader.append('Pragma', 'no-cache');
        return this._http
            .post('/api//auth/forgot', JSON.stringify(credentials), { headers: myHeader })
            .map(function (response) {
            var user = response.json();
            return user;
        });
    };
    AuthService.prototype.verifyCode = function (id, credentials) {
        var myHeader = new http_1.Headers();
        myHeader.append('Content-Type', 'application/json');
        myHeader.append('Cache-Control', 'no-cache');
        myHeader.append('Pragma', 'no-cache');
        return this._http
            .post('/api//auth/verifycode?reqId=' + id, JSON.stringify(credentials), { headers: myHeader })
            .map(function (response) {
            var user = response.json();
            return user;
        });
    };
    AuthService.prototype.resendCode = function (id) {
        return this._http
            .get('/api/auth/resendOtp?reqId=' + id + '&role=EMPLOYER')
            .map(function (response) {
            var user = response.json();
            return user;
        });
    };
    AuthService.prototype.getUser = function () {
        if (this.webAppstate.getState('company_user')) {
            return JSON.parse(this.webAppstate.getState('company_user')).data;
        }
    };
    AuthService.prototype.changePassword = function (id, credentials) {
        var myHeader = new http_1.Headers();
        myHeader.append('Content-Type', 'application/json');
        myHeader.append('Cache-Control', 'no-cache');
        myHeader.append('Pragma', 'no-cache');
        return this._http
            .post('/api/auth/resetPassword?reqId=' + id, JSON.stringify(credentials), { headers: myHeader })
            .map(function (response) {
            var user = response.json();
            return user;
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router, webappstate_service_1.WebAppState, core_1.NgZone])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
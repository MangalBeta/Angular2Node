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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var signupService = (function () {
    function signupService(http) {
        this.http = http;
    }
    signupService.prototype.register = function (body) {
        var bodyString = JSON.stringify(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/api/auth/register', bodyString, options)
            .map(function (res) {
            return res.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    signupService.prototype.validateVerificationCode = function (verificationCode) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get("/api/auth/verify-email/?code=" + verificationCode, options)
            .map(function (res) {
            return res.json();
        }).catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    signupService.prototype.resendVerificationCode = function (employer_id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get("/api/auth/resendOtp/?reqId=" + employer_id)
            .map(function (res) {
            return res.json();
        });
    };
    return signupService;
}());
signupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], signupService);
exports.signupService = signupService;
//# sourceMappingURL=signup.service.js.map
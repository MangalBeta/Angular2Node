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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var header_component_1 = require("./webapp/Header/header.component");
var footer_component_1 = require("./webapp/Footer/footer.component");
var webapp_module_1 = require("./webapp/webapp.module");
var home_module_1 = require("./webapp//home/home.module");
var login_module_1 = require("./webapp/login/login.module");
var signup_module_1 = require("./webapp/signup/signup.module");
var forgotPassword_module_1 = require("./webapp/forgotPassword/forgotPassword.module");
var verifyPassword_module_1 = require("./webapp/verifyPassword/verifyPassword.module");
var changePassword_module_1 = require("./webapp/changePassword/changePassword.module");
var dashboard_module_1 = require("./webapp/dashboard/dashboard.module");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, router_1.RouterModule,
            home_module_1.HomeModule, webapp_module_1.WebappModule, login_module_1.LoginModule,
            signup_module_1.SignupModule, forgotPassword_module_1.ForgotModule, verifyPassword_module_1.VerifyModule, changePassword_module_1.ChangePasswordModule, dashboard_module_1.DashboardModule
        ],
        declarations: [
            app_component_1.AppComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
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
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
var validateEmail_component_1 = require("./component/validateEmail/validateEmail.component");
var login_component_2 = require("./component/login/login.component");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var login_routing_1 = require("./login.routing");
var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, login_routing_1.routing, forms_1.FormsModule, angular2_toaster_1.ToasterModule],
        declarations: [login_component_1.Login, validateEmail_component_1.ValidateEmail, login_component_2.LoginForm],
    }),
    __metadata("design:paramtypes", [])
], LoginModule);
exports.LoginModule = LoginModule;
//# sourceMappingURL=login.module.js.map
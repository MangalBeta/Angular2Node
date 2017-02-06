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
var equal_validator_directive_1 = require("../directives/equal-validator.directive");
var signup_component_1 = require("./signup.component");
var signup_routing_1 = require("./signup.routing");
var validateEmail_component_1 = require("./components/validateEmail/validateEmail.component");
var signupForm_component_1 = require("./components/signupForm/signupForm.component");
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, signup_routing_1.routing, forms_1.FormsModule, angular2_toaster_1.ToasterModule],
        declarations: [signup_component_1.Signup, equal_validator_directive_1.EqualValidator, validateEmail_component_1.ValidateEmail, signupForm_component_1.SignupFormComponent]
    }),
    __metadata("design:paramtypes", [])
], SignupModule);
exports.SignupModule = SignupModule;
//# sourceMappingURL=signup.module.js.map
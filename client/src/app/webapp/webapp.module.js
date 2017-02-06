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
var angular2_toaster_1 = require("angular2-toaster/angular2-toaster");
var forms_1 = require("@angular/forms");
var webapp_routing_1 = require("./webapp.routing");
var webapp_component_1 = require("./webapp.component");
var index_1 = require("./_guards/index");
var signup_service_1 = require("./services/signup.service");
var index_2 = require("./services/index");
var WebappModule = (function () {
    function WebappModule() {
    }
    return WebappModule;
}());
WebappModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, webapp_routing_1.routing, forms_1.FormsModule, angular2_toaster_1.ToasterModule],
        declarations: [webapp_component_1.Webapp],
        providers: [signup_service_1.signupService, index_2.AuthService, index_1.AuthGuard, index_2.WebAppState, index_2.FlashMessageService]
    }),
    __metadata("design:paramtypes", [])
], WebappModule);
exports.WebappModule = WebappModule;
//# sourceMappingURL=webapp.module.js.map
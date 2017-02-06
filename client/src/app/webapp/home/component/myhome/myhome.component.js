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
var router_1 = require("@angular/router");
var index_1 = require("../../../services/index");
var MyHome = (function () {
    function MyHome(flashMessage, router) {
        this.flashMessage = flashMessage;
        this.router = router;
    }
    MyHome.prototype.ngOnInit = function () {
    };
    return MyHome;
}());
MyHome = __decorate([
    core_1.Component({
        selector: 'myhome',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: './myhome.component.html',
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [index_1.FlashMessageService, router_1.Router])
], MyHome);
exports.MyHome = MyHome;
//# sourceMappingURL=myhome.component.js.map
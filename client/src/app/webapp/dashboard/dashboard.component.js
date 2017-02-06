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
var index_1 = require("../services/index");
var router_1 = require("@angular/router");
var DashboardComponent = (function () {
    function DashboardComponent(router, _activatedRoute, authService, flashMessage) {
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.model = {};
        this.error = '';
        this.success = '';
        this.reqId = '';
        this.toast = '';
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'dashboard',
        encapsulation: core_1.ViewEncapsulation.None,
        template: require('./dashboard.component.html'),
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        index_1.AuthService, index_1.FlashMessageService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map
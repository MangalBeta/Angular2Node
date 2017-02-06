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
var HeaderComponent = (function () {
    function HeaderComponent(router, authService, webappState, flashMessageService) {
        this.router = router;
        this.authService = authService;
        this.webappState = webappState;
        this.flashMessageService = flashMessageService;
        this.isLoggedIn = false;
        this.error = '';
        this.success = '';
        this.checkLogin = false;
        this.authenticated = false;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.check().subscribe(function (data) {
            _this.isLoggedIn = data;
        });
        this.isMobileUser = this.webappState.getState('mobile_user');
        this.isMobileType = this.webappState.getState('mobile_payment_type');
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
    };
    HeaderComponent.prototype.refresh = function () {
        window.location.reload();
        this.router.navigateByUrl('/login/login');
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.clear();
        sessionStorage.clear();
        this.webappState.removeState('company_user');
        this.webappState.removeState('isLoggedIn');
        this.isLoggedIn = false;
        this.refresh();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'header-webapp',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./header.css')],
        template: require('./header.html'),
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthService, index_1.WebAppState,
        index_1.FlashMessageService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map
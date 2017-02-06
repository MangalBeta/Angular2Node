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
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(router, _activatedRoute, authService, flashMessage) {
        var _this = this;
        this.router = router;
        this._activatedRoute = _activatedRoute;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.model = {};
        this.error = '';
        this.success = '';
        this.reqId = '';
        this.getIdParam = '';
        this.toast = '';
        this.getIdParam = this._activatedRoute.queryParams.subscribe(function (queryParam) { return _this.reqId = queryParam['reqId']; });
    }
    ChangePasswordComponent.prototype.changePass = function () {
        var _this = this;
        this.model['role'] = 'EMPLOYER';
        this.authService.changePassword(this.reqId, this.model)
            .subscribe(function (result) {
            _this.flashMessage.clearToast();
            if (result.status == "error") {
                _this.flashMessage.getToastMessage(result.status, result.message);
            }
            else {
                _this.flashMessage.getToastMessage(result.status, result.message);
                setTimeout(function () { _this.router.navigate(['login/login']), 3000; });
            }
        });
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: 'change-password',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./changePassword.css')],
        template: require('./changePassword.html'),
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
        index_1.AuthService, index_1.FlashMessageService])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=changePassword.component.js.map
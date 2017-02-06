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
var VerifyPasswordComponent = (function () {
    function VerifyPasswordComponent(router, authService, _activatedRoute, flashMessage) {
        var _this = this;
        this.router = router;
        this.authService = authService;
        this._activatedRoute = _activatedRoute;
        this.flashMessage = flashMessage;
        this.model = {};
        this.error = '';
        this.success = '';
        this.resData = '';
        this.getIdParam = '';
        this.reqId = '';
        document.body.scrollTop = 0;
        this.resendIcon = "https://cdn1.iconfinder.com/data/icons/android-ui-2/154/redo-refresh-resend-128.png";
        this.getIdParam = this._activatedRoute.queryParams.subscribe(function (queryParam) { return _this.reqId = queryParam['reqId']; });
    }
    VerifyPasswordComponent.prototype.verifyPass = function () {
        var _this = this;
        this.model['role'] = 'EMPLOYER';
        this.authService.verifyCode(this.reqId, this.model)
            .subscribe(function (result) {
            _this.flashMessage.clearToast();
            if (result.status == "error") {
                _this.flashMessage.getToastMessage(result.status, result.message);
            }
            else {
                _this.flashMessage.getToastMessage(result.status, result.message);
                _this.router.navigate(['changePassword'], { queryParams: { reqId: result.data._id } });
            }
        });
    };
    VerifyPasswordComponent.prototype.resendOtp = function () {
        var _this = this;
        this.authService.resendCode(this.reqId)
            .subscribe(function (result) {
            _this.flashMessage.clearToast();
            if (result.status == "error") {
                _this.flashMessage.getToastMessage(result.status, result.message);
            }
            else {
                _this.flashMessage.getToastMessage(result.status, result.message);
            }
        });
    };
    return VerifyPasswordComponent;
}());
VerifyPasswordComponent = __decorate([
    core_1.Component({
        selector: 'verify-password',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./verifyPassword.css')],
        template: require('./verifyPassword.html'),
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthService, router_1.ActivatedRoute, index_1.FlashMessageService])
], VerifyPasswordComponent);
exports.VerifyPasswordComponent = VerifyPasswordComponent;
//# sourceMappingURL=verifyPassword.component.js.map
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
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, authService, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.model = {};
        this.error = '';
        this.success = '';
        document.body.scrollTop = 0;
    }
    ForgotPasswordComponent.prototype.forgotPass = function () {
        var _this = this;
        this.model['role'] = 'EMPLOYER';
        this.authService.forgot(this.model)
            .subscribe(function (result) {
            _this.flashMessage.clearToast();
            if (result.status == "error") {
                _this.flashMessage.getToastMessage(result.status, result.message);
            }
            else {
                _this.flashMessage.getToastMessage(result.status, result.message);
                setTimeout(function () {
                    _this.router.navigate(['verify-code'], { queryParams: { reqId: result.data._id } });
                }, 2000);
            }
        });
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgot-password',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./forgotPassword.css')],
        template: require('./forgotPassword.html'),
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthService, index_1.FlashMessageService])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgotPassword.component.js.map
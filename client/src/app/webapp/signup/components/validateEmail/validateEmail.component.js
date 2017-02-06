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
var signup_service_1 = require("../../../services/signup.service");
var router_1 = require("@angular/router");
var webappstate_service_1 = require("../../../services/webappstate.service");
var index_1 = require("../../../services/index");
var auth_service_1 = require("../../../services/auth.service");
var ValidateEmail = (function () {
    function ValidateEmail(SignupService, router, webappstate, authService, flashMessage) {
        this.SignupService = SignupService;
        this.router = router;
        this.webappstate = webappstate;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.code = {};
        this.submitted = false;
        this.errorMessage = '';
        this.successMessage = '';
    }
    ValidateEmail.prototype.ngOnInit = function () {
        document.body.scrollTop = 0;
        this.code = {
            verificationCode: ''
        };
        this.resendIcon = "https://cdn1.iconfinder.com/data/icons/android-ui-2/154/redo-refresh-resend-128.png";
        this.attemptsLeft = parseInt(this.webappstate.getState('resend_attempts_left'));
    };
    ValidateEmail.prototype.onSubmit = function (verification, isValid) {
        var _this = this;
        this.flashMessage.clearToast();
        this.submitted = true;
        if (isValid) {
            var employer_id = this.webappstate.getState('employer_id');
            if (!employer_id) {
                this.errorMessage = "You are not allowed to send verification code";
                setTimeout(function () {
                    _this.errorMessage = "";
                }, 3000);
                return false;
            }
            this.errorMessage = '';
            this.successMessage = '';
            this.SignupService.validateVerificationCode(verification.code)
                .subscribe(function (data) {
                _this.flashMessage.clearToast();
                if (data.status == 'success') {
                    _this.flashMessage.getToastMessage(data.status, data.message);
                    setTimeout(function () {
                        _this.router.navigate(['login/login']);
                    }, 3000);
                }
                else {
                    _this.flashMessage.clearToast();
                    _this.flashMessage.getToastMessage(data.status, data.message);
                }
            });
        }
        else {
        }
    };
    ValidateEmail.prototype.sendCode = function () {
        var _this = this;
        if (this.attemptsLeft) {
            var employer_id = this.webappstate.getState('employer_id');
            this.flashMessage.clearToast();
            this.attemptsLeft = --this.attemptsLeft;
            this.webappstate.setState('resend_attempts_left', this.attemptsLeft);
            this.authService.resendCode(employer_id)
                .subscribe(function (result) {
                _this.flashMessage.clearToast();
                if (result.status == "error") {
                    setTimeout(function () {
                        _this.flashMessage.getToastMessage(result.status, result.message);
                    }, 3000);
                }
                else {
                    setTimeout(function () {
                        _this.flashMessage.getToastMessage(result.status, result.message);
                    }, 3000);
                }
            });
        }
        else {
            this.flashMessage.clearToast();
            this.flashMessage.getToastMessage("error", "You cannot re-send code now");
        }
    };
    return ValidateEmail;
}());
ValidateEmail = __decorate([
    core_1.Component({
        selector: 'validate-email',
        templateUrl: './validateEmail.html',
        styleUrls: ['./validateEmail.css'],
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [signup_service_1.signupService, router_1.Router, webappstate_service_1.WebAppState,
        auth_service_1.AuthService, index_1.FlashMessageService])
], ValidateEmail);
exports.ValidateEmail = ValidateEmail;
//# sourceMappingURL=validateEmail.component.js.map
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
var index_1 = require("../../../services/index");
var router_1 = require("@angular/router");
var LoginForm = (function () {
    function LoginForm(router, authService, webappState, flashMessage) {
        this.router = router;
        this.authService = authService;
        this.webappState = webappState;
        this.flashMessage = flashMessage;
        this.model = {};
        this.loading = false;
        this.error = '';
        this.success = '';
        this.checkLogin = false;
        this.toast = '';
        this.errorData = '';
        this.errorStatus = '';
    }
    LoginForm.prototype.ngOnInit = function () {
        var _this = this;
        document.body.scrollTop = 0;
        this.authService.check().subscribe(function (data) {
            if (data) {
                _this.router.navigate(['dashboard']);
            }
        });
    };
    LoginForm.prototype.login = function () {
        var _this = this;
        sessionStorage.clear();
        localStorage.clear();
        this.loading = true;
        this.authService.login(this.model)
            .subscribe(function (result) {
            _this.flashMessage.clearToast();
            if (result.status == "error") {
                if (result.data == "notvarified") {
                    _this.flashMessage.getToastMessage(result.status, result.message);
                    setTimeout(function () { _this.router.navigate(['/login/login/validate-email']); }, 3000);
                }
                else {
                    _this.flashMessage.getToastMessage(result.status, result.message);
                }
            }
            else {
                _this.checkLogin = true;
                _this.webappState.setState('isLoggedIn', true);
                _this.flashMessage.getToastMessage(result.status, result.message);
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']);
                }, 3000);
            }
        });
    };
    return LoginForm;
}());
LoginForm = __decorate([
    core_1.Component({
        selector: 'login',
        encapsulation: core_1.ViewEncapsulation.None,
        styles: [require('./login.css')],
        template: require('./login.html'),
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthService,
        index_1.WebAppState, index_1.FlashMessageService])
], LoginForm);
exports.LoginForm = LoginForm;
//# sourceMappingURL=login.component.js.map
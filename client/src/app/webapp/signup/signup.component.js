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
var signup_service_1 = require("../services/signup.service");
var index_1 = require("../services/index");
var Signup = (function () {
    function Signup(signupservice, router, flashMessage, state) {
        this.signupservice = signupservice;
        this.router = router;
        this.flashMessage = flashMessage;
        this.state = state;
        this.submitted = false;
    }
    Signup.prototype.ngOnInit = function () {
        document.body.scrollTop = 0;
        this.user = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    };
    Signup.prototype.onSubmit = function (value, isValid) {
        var _this = this;
        this.submitted = true;
        if (isValid) {
            this.signupservice.register(value)
                .subscribe(function (data) {
                if (data.status == 'success') {
                    _this.router.navigate(['signup/validate-email']);
                    _this.flashMessage.getToastMessage(data.status, data.message);
                }
                else if (data.status == 'error') {
                    _this.flashMessage.getToastMessage(data.status, data.message);
                }
            });
        }
        else {
        }
    };
    return Signup;
}());
Signup = __decorate([
    core_1.Component({
        selector: 'signup',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: "\n  <router-outlet></router-outlet>",
        styleUrls: ['./signup.css'],
        providers: [index_1.FlashMessageService]
    }),
    __metadata("design:paramtypes", [signup_service_1.signupService, router_1.Router,
        index_1.FlashMessageService, index_1.WebAppState])
], Signup);
exports.Signup = Signup;
//# sourceMappingURL=signup.component.js.map
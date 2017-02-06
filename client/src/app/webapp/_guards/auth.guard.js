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
var index_1 = require("../services/index");
var AuthGuard = (function () {
    function AuthGuard(router, webAppState, authService, activatedRoute, SignupService) {
        this.router = router;
        this.webAppState = webAppState;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.SignupService = SignupService;
        this.isLoggedIn = false;
        this.authToken = {};
        this.token = '';
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.isLoggedIn && !this.webAppState.getState('company_user')) {
            this.router.navigate(['/login/login']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, index_1.WebAppState,
        index_1.AuthService,
        router_1.ActivatedRoute, index_1.signupService])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map
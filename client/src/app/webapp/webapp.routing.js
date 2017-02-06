"use strict";
var router_1 = require("@angular/router");
var webapp_component_1 = require("./webapp.component");
var index_1 = require("./_guards/index");
var home_component_1 = require("./home/home.component");
var signup_component_1 = require("./signup/signup.component");
var login_component_1 = require("./login/login.component");
var verifyPassword_component_1 = require("./verifyPassword/verifyPassword.component");
var changePassword_component_1 = require("./changePassword/changePassword.component");
var forgotPassword_component_1 = require("./forgotPassword/forgotPassword.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var routes = [
    {
        path: '',
        component: webapp_component_1.Webapp,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.Home },
            { path: 'signup', component: signup_component_1.Signup },
            { path: 'login', component: login_component_1.Login },
            { path: 'forgot', component: forgotPassword_component_1.ForgotPasswordComponent },
            { path: 'verify-code', component: verifyPassword_component_1.VerifyPasswordComponent },
            { path: 'changePassword', component: changePassword_component_1.ChangePasswordComponent },
            { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivate: [index_1.AuthGuard] },
        ]
    },
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=webapp.routing.js.map
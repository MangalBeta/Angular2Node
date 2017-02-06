"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
var validateEmail_component_1 = require("./component/validateEmail/validateEmail.component");
var login_component_2 = require("./component/login/login.component");
var routes = [
    {
        path: 'login',
        component: login_component_1.Login,
        children: [
            {
                path: 'login',
                component: login_component_2.LoginForm
            },
            {
                path: 'validate-email',
                component: validateEmail_component_1.ValidateEmail
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=login.routing.js.map
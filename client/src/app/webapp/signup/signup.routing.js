"use strict";
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var validateEmail_component_1 = require("./components/validateEmail/validateEmail.component");
var signupForm_component_1 = require("./components/signupForm/signupForm.component");
var routes = [
    {
        path: 'signup',
        component: signup_component_1.Signup,
        children: [
            {
                path: 'signup',
                component: signupForm_component_1.SignupFormComponent
            },
            {
                path: 'validate-email',
                component: validateEmail_component_1.ValidateEmail
            }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=signup.routing.js.map
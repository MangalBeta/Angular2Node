"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var myhome_component_1 = require("./component/myhome/myhome.component");
var routes = [
    {
        path: '',
        component: home_component_1.Home,
        children: [
            { path: '', component: myhome_component_1.MyHome }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=home.routing.js.map
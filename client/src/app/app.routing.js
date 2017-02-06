"use strict";
var router_1 = require("@angular/router");
var webapp_component_1 = require("./webapp/webapp.component");
exports.routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
    { path: '', component: webapp_component_1.Webapp }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map
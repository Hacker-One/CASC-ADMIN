"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var pages_menu_1 = require("./pages.menu");
var environment_1 = require("../../environments/environment");
var prodPages_component_1 = require("./prodPages.component");
exports.routes = [
    {
        path: '',
        component: pages_component_1.Pages,
        children: pages_menu_1.PLUGIN_MODULE
    }
];
exports.proroutes = [
    {
        path: '',
        component: prodPages_component_1.ProdPages,
        children: pages_menu_1.PLUGIN_MODULE
    }
];
exports.routing = router_1.RouterModule.forChild(environment_1.environment.production ? exports.proroutes : exports.routes);

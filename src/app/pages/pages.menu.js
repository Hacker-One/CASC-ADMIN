"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//存放插件的路由信息
exports.PLUGIN_MODULE = [
    {
        path: 'apiproxy',
        loadChildren: './apiproxy/app.module#AppModule',
        data: {
            preload: true
        }
    }
];

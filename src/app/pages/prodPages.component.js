"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PAGES_MENU = require('../../assets/config.json');
var ProdPages = /** @class */ (function () {
    function ProdPages(loader, _elementRef, router, _menuService, http) {
        this.loader = loader;
        this._elementRef = _elementRef;
        this.router = router;
        this._menuService = _menuService;
        this.http = http;
    }
    //监听窗口改变插件列表的长度
    ProdPages.prototype.onResize = function (event) {
    };
    ProdPages.prototype.ngOnInit = function () {
        var plugins = [
            {
                path: '',
                children: [
                    {
                        path: PAGES_MENU.pluginPath,
                        data: {
                            menu: {
                                title: PAGES_MENU.pluginName,
                                icon: PAGES_MENU.pluginIcon,
                                selected: false,
                                expanded: false,
                                order: 0,
                            }
                        }
                    }
                ]
            }
        ];
        this._menuService.updateMenuByRoutes(plugins);
    };
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], ProdPages.prototype, "onResize", null);
    ProdPages = __decorate([
        core_1.Component({
            selector: 'prod-pages',
            styleUrls: ['./pages.component.scss'],
            templateUrl: 'prodPages.html'
        })
    ], ProdPages);
    return ProdPages;
}());
exports.ProdPages = ProdPages;

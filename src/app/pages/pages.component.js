"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PAGES_MENU = require('../../assets/config.json');
var Pages = /** @class */ (function () {
    function Pages(loader, _elementRef, router, _menuService, http) {
        this.loader = loader;
        this._elementRef = _elementRef;
        this.router = router;
        this._menuService = _menuService;
        this.http = http;
        this.pushTab();
    }
    //监听窗口改变插件列表的长度
    Pages.prototype.onResize = function (event) {
        this.ngAfterViewInit();
    };
    Pages.prototype.ngAfterViewInit = function () {
        var height = this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight - 99;
        //判断是否覆盖掉tab页
        if (this.tabs == undefined || this.tabs.length == 0) {
            this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top = '66px';
            this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1023';
            this._elementRef.nativeElement.childNodes[2].style.visibility = 'hidden';
            this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 35 + 'px';
        }
        else {
            this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 'px';
        }
    };
    Pages.prototype.pushTab = function () {
        var _this = this;
        this.tabs = new Array();
        if (this.router.url.indexOf(PAGES_MENU.pluginPath) > -1) {
            PAGES_MENU.pluginTab.forEach(function (item) {
                var tab = {
                    name: "",
                    path: ""
                };
                tab.name = item.name;
                if (item.url != "" && item.url != undefined) {
                    tab.path = item.url.replace(/#/g, "");
                }
                _this.tabs.push(tab);
            });
        }
    };
    Pages.prototype.ngOnInit = function () {
        var _this = this;
        //打开socket连接
        // this.websocketService.connect('ws://'+location.host);
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) {
            _this.pushTab();
            var height = _this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight - 99;
            if (_this.tabs == undefined || _this.tabs.length == 0) {
                _this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top = '66px';
                _this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1023';
                _this._elementRef.nativeElement.childNodes[2].style.visibility = 'hidden';
                _this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 35 + 'px';
            }
            else {
                _this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top = '101px';
                _this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1022';
                _this._elementRef.nativeElement.childNodes[2].style.visibility = 'unset';
                _this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 'px';
            }
        });
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
    ], Pages.prototype, "onResize", null);
    Pages = __decorate([
        core_1.Component({
            selector: 'pages',
            styleUrls: ['./pages.component.scss'],
            templateUrl: 'pages.html'
        })
    ], Pages);
    return Pages;
}());
exports.Pages = Pages;

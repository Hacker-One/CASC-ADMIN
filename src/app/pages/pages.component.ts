import {filter} from 'rxjs/operators';
import {AfterViewInit, Component, ElementRef, HostListener} from '@angular/core';
import {
    NavigationEnd,
    Router,
    Routes
} from '@angular/router';
import {BaMenuService} from '../rests/index';

const PAGES_MENU = require('../../assets/config.json');
import {BaHttpInterceptorService} from '../rests/index';
import {LoadingBarService} from '@ngx-loading-bar/core';
import {WebsocketService} from '../rests/services/baWebSocket';

@Component({
    selector: 'pages',
    styleUrls: ['./pages.component.scss'],
    templateUrl: 'pages.html'
})
export class Pages implements AfterViewInit {
    tabs;

    constructor(private _elementRef: ElementRef, private router: Router, private _menuService: BaMenuService,) {
        this.pushTab();
    }

    // 监听窗口改变插件列表的长度
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.ngAfterViewInit();
    }

    ngAfterViewInit() {
        let height = this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight - 99;
        // 判断是否覆盖掉tab页
        if (this.tabs == undefined || this.tabs.length == 0) {
            // this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '66px';
            this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1023';
            this._elementRef.nativeElement.childNodes[2].style.visibility = 'hidden';
            this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 35 + 'px';
        } else {
            this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 'px';
        }
    }

    pushTab() {
        this.tabs = [];
        if (this.router.url.indexOf(PAGES_MENU.pluginPath) > -1) {
            PAGES_MENU.pluginTab.forEach(item => {
                let tab = {
                    name: '',
                    path: ''
                };
                tab.name = item.name;
                if (item.url != '' && item.url != undefined) {
                    tab.path = item.url.replace(/#/g, '');
                }
                this.tabs.push(tab);
            });
        }
    }

    ngOnInit() {
        // 打开socket连接
        // this.websocketService.connect('ws://'+location.host);
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd)
            )
            .subscribe((event) => {
                this.pushTab();
                let height = this._elementRef.nativeElement.childNodes[0].querySelector('aside').clientHeight - 99;
                if (this.tabs == undefined || this.tabs.length == 0) {
                    // this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '66px';
                    this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1023';
                    this._elementRef.nativeElement.childNodes[2].style.visibility = 'hidden';
                    this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 35 + 'px';
                } else {
                    // this._elementRef.nativeElement.childNodes[0].querySelector('aside').style.top  = '101px';
                    this._elementRef.nativeElement.childNodes[0].querySelector('aside').style['z-index'] = '1022';
                    this._elementRef.nativeElement.childNodes[2].style.visibility = 'unset';
                    this._elementRef.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].style.height = height + 'px';
                }
            });
        let plugins = [
            {
                path: '',
                children: []
            }
        ];

        let menu = {
            path: '',
            data: {
                menu: {
                    title: '',
                    icon: '',
                    abbr: '',
                    img: '',
                    selected: true,
                    expanded: false,
                    order: 0,
                }
            }
        };
        menu.path = PAGES_MENU.pluginPath;
        menu.data.menu.title = PAGES_MENU.pluginName;
        menu.data.menu.icon = PAGES_MENU.pluginIcon;
        menu.data.menu.abbr = PAGES_MENU.pluginAbbr;
        menu.data.menu.img = PAGES_MENU.pluginImg;
        plugins[0].children.push(menu);
        this._menuService.updateMenuByRoutes(<Routes>plugins);
    }

}


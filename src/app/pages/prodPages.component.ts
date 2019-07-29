import { Component, ElementRef, HostListener} from '@angular/core';
import {
  Router,
  Routes
} from '@angular/router';

import { BaMenuService } from '../rests/index';
const PAGES_MENU=require('../../assets/config.json');
import {BaHttpInterceptorService} from "../rests/index";
import {LoadingBarService} from "@ngx-loading-bar/core";

@Component({
  selector: 'prod-pages',
  styleUrls: ['./pages.component.scss'],
  templateUrl:'prodPages.html'
})
export class ProdPages {
  constructor( private _elementRef:ElementRef,private router: Router,private _menuService: BaMenuService,private http: BaHttpInterceptorService) {

  }
  //监听窗口改变插件列表的长度
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
    }
  ngOnInit() {
      let plugins=[
        {
          path:'',
          children:[
              {
                  path: PAGES_MENU.pluginPath,
                  data: {
                      menu: {
                          title: PAGES_MENU.pluginName,
                          icon:PAGES_MENU.pluginIcon,
                          abbr:PAGES_MENU.pluginAbbr,
                          img:PAGES_MENU.pluginImg,
                          selected: false,
                          expanded: false,
                          order: 0,
                      }
                  }
              }
          ]
        }
      ];
    this._menuService.updateMenuByRoutes(<Routes>plugins);
  }
}


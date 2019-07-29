import {Component, Input, Output, EventEmitter, HostListener, ElementRef} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { BaMenuService } from '../../rests/services';
import { GlobalState } from '../../global.state';

@Component({
  selector: 'ba-menu',
  templateUrl: './baMenu.html',
  styleUrls: ['./baMenu.scss']
})
export class BaMenu {
  @Input() sidebarCollapsed: boolean = false;
  @Input() menuHeight: number;
  @Output() expandMenu = new EventEmitter<any>();
  public menuItems: any[];
  protected _menuItemsSub: Subscription;
  public showHoverElem: boolean;
  public hoverElemHeight: number;
  public hoverElemTop: number;
  protected _onRouteChange: Subscription;
  public outOfArea: number = -200;
  constructor(
    private _elementRef:ElementRef,
    private _router: Router,
    private _service: BaMenuService,
    private _state: GlobalState
  ) {
  }

  public updateMenu(newMenuItems) {
    this.menuItems = newMenuItems;
    this.selectMenuAndNotify();
  }

  public selectMenuAndNotify(): void {
    if (this.menuItems) {
      this.menuItems = this._service.selectMenuItem(this.menuItems);
      this._state.notifyDataChanged('menu.activeLink', this._service.getCurrentItem());
    }
  }
    public ngAfterViewInit():void {
        this._elementRef.nativeElement.childNodes[0].style.height=this.menuHeight;
    }
  public ngOnInit(): void {
    this._onRouteChange = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.menuItems) {
          this.selectMenuAndNotify();
        } else {
          // on page load we have to wait as event is fired before menu elements are prepared
          setTimeout(() => this.selectMenuAndNotify());
        }
      }
    });
    this._menuItemsSub = this._service.menuItems.subscribe(this.updateMenu.bind(this));
  }

  public ngOnDestroy(): void {
    this._onRouteChange.unsubscribe();
    this._menuItemsSub.unsubscribe();
  }

  public hoverItem($event): void {
    // this.showHoverElem = true;
    // this.hoverElemHeight = $event.currentTarget.clientHeight;
    // this.hoverElemTop = $event.currentTarget.getBoundingClientRect().top-$event.fromElement.getBoundingClientRect().top+1;
  }
  static getNextSibilingsNode(ele): void {
        let parsent = ele.parentNode;
        let childrens = parsent.childNodes;
        let i = 0;
        for(i; i < childrens.length; i++) {
            if(childrens[i].nodeType == 1 && childrens[i] == ele){
                if(childrens[i+1].nodeType == 1){
                    return childrens[i+1];
                }if(childrens[i+2].nodeType == 1){
                    return childrens[i+2];
                }
            }
        }
    }
  public toggleSubMenu($event): boolean {
    let submenu = $event.currentTarget.getNextSibilingsNode;

    if (this.sidebarCollapsed) {
      this.expandMenu.emit(null);
      if (!$event.item.expanded) {
        $event.item.expanded = true;
      }
    } else {
      $event.item.expanded = !$event.item.expanded;
      // submenu.slideToggle();
    }

    return false;
  }
}

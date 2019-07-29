import { Component, Input, OnInit, ElementRef, Optional } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { QlMenu } from './menu'
import { QlSubmenu } from './submenu'
import { isParentTag, removeNgTag } from '../shared/utils'
import { Router } from '@angular/router'

@Component({
  selector: 'ql-menu-item',
  template: `
    <li class="ql-menu-item" (click)="clickHandle()" #list
      [ngStyle]="{ paddingLeft: '20px',
      backgroundColor: rootMenu.backgroundColor || '',
      borderBottomColor: borderColor(),
      color: color() }"
      (mouseenter)="list.style.backgroundColor = rootMenu.hoverBackgroundColor()"
      (mouseleave)="list.style.backgroundColor = rootMenu.backgroundColor || ''"
      [class.is-active]="rootMenu.model === index"
      [class.is-disabled]="qlDisabled">
      <ng-content></ng-content>
    </li>
  `,
})
export class QlMenuItem implements OnInit {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false;
  @Input() index: string;
  @Input() title: string = '';
  @Input() to: string;
  @Input() extras?: any = {};
  private inSubmenu: boolean = false;
  
  constructor(
    @Optional() public rootMenu: QlMenu,
    @Optional() private subMenu: QlSubmenu,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private router: Router,
  ) {
  }
  
  clickHandle(): void {
    const comRef: any = this.subMenu || this.rootMenu;
    comRef.selectHandle(this.index);
    const nextBorderIndex: string = (this.inSubmenu && this.subMenu) ? this.subMenu.index : this.index;
    this.rootMenu.showBorderIndex = nextBorderIndex;
    this.to && this.router.navigateByUrl(this.to, this.extras)
  }
  
  borderColor(): string {
    // not show border in group
    const dontShowBorder = this.inSubmenu && this.subMenu;
    if (dontShowBorder) return 'transparent';
    return this.rootMenu.showBorderIndex === this.index ?
      (this.rootMenu.activeTextColor ? this.rootMenu.activeTextColor : '')
      : 'transparent'
  }
  
  color(): string {
    return this.rootMenu.model === this.index ?
      (this.rootMenu.activeTextColor && this.rootMenu.activeTextColor)
      : this.rootMenu.textColor && this.rootMenu.textColor
  }
  
  ngOnInit(): void {
    this.inSubmenu = isParentTag(this.el.nativeElement, 'ql-submenu');
    removeNgTag(this.el.nativeElement)
  }
  
}


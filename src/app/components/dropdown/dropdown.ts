import {
  AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2,
  ViewChild,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { Value } from './dropdown.item'
import { QlDropdownProps } from './dropdown.props'
import { dropAnimation } from './animation'
import { DocumentWrapper } from '../shared/services'

@Component({
  selector: 'ql-dropdown',
  template: `
    <ng-template #content>
      <ng-content></ng-content>
    </ng-template>
    <div class="ql-dropdown">
      <ng-container *ngIf="splitButton">
        <ql-button [type]="type" [size]="size" (click)="openMenu($event)">
          <span>
            <ng-template [ngTemplateOutlet]="content"></ng-template>
            <i class="ql-icon-caret-bottom ql-icon--right"></i>
          </span>
        </ql-button>
      </ng-container>
      <ng-container *ngIf="!splitButton">
        <span class="ql-dropdown-link" (click)="openMenu($event)" style="cursor: pointer;">
          <ng-template [ngTemplateOutlet]="content"></ng-template>
          <i class="ql-icon-caret-bottom ql-icon--right"></i>
        </span>
      </ng-container>
      <div [style]="makeListStyles()">
        <ul class="ql-dropdown-menu" #list [@dropAnimation]="showMenu">
          <ql-dropdown-item *ngFor="let item of model" [model]="item" (selected)="selectHandle(item)">
          </ql-dropdown-item>
        </ul>
      </div>
    </div>
  `,
  animations: [dropAnimation],
  styles: ['.ql-dropdown-menu { overflow: hidden; }'],
})
export class QlDropdown extends QlDropdownProps implements OnDestroy, AfterViewInit {
  
  @ViewChild('list') list: any
  
  showMenu: boolean = false
  timer: any
  slideToBottom: boolean = true
  listHeight: number
  globalListenFunc: Function
  globalScrollFunc: Function
  
  @HostListener('mouseleave') mouseleave = () => {
    if (this.trigger !== 'hover') return
    this.timer = setTimeout(() => {
      this.closeMenu()
      clearTimeout(this.timer)
    }, 400)
  }
  
  @HostListener('mouseenter') mouseenter = () => {
    if (this.trigger !== 'hover') return
    this.timer && clearTimeout(this.timer)
    !this.showMenu && this.visibleChange.emit()
    this.showMenu = true
  }
  
  constructor(
    private renderer: Renderer2,
    private sanitizer: DomSanitizer,
    private document: DocumentWrapper,
    private el: ElementRef,
  ) {
    super()
  }
  
  openMenu(event?: Event): void {
    event && event.stopPropagation()
    this.showMenu = !this.showMenu
    this.visibleChange.emit()
    this.globalListenFunc = this.renderer.listen(
      'document', 'click', () => {
        this.closeMenu()
      }
    )
  }
  
  closeMenu(): void {
    this.showMenu = false
    this.visibleChange.emit()
    this.globalListenFunc && this.globalListenFunc()
  }
  
  selectHandle(model: Value): void {
    this.selected.emit(model)
    
    // select and hide menu (props)
    this.hideOnClick && this.closeMenu()
  }
  
  makeListStyles(): SafeStyle {
    const styles = `top: ${this.slideToBottom ? '100%' : (0 - this.listHeight) + 'px' };` +
      `${this.menuAlign === 'end' ? 'right' : 'left'}: 0; position: absolute; min-width: 100px;` +
      `white-space: ${this.menuNoWrap ? 'nowrap' : 'normal'}`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  ngAfterViewInit(): void {
    this.listHeight = this.list.nativeElement.offsetHeight + 12
    this.globalScrollFunc = this.renderer.listen(
    'window', 'scroll', () => {
      const top = this.el.nativeElement.getBoundingClientRect().top
      const nextValue = this.document.documentElement.clientHeight - top > this.listHeight
      if (nextValue !== this.slideToBottom) {
        this.slideToBottom = nextValue
      }
    })
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
    this.globalScrollFunc && this.globalScrollFunc()
  }

}


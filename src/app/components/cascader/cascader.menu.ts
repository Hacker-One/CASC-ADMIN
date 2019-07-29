import { Component, Optional } from '@angular/core'
import { QlCascader } from './cascader'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'ql-cascader-menu',
  template: `
    <div class="ql-cascader-menus"
      style="z-index: 2007; position: absolute; top: 100%; left: 0;"
      [@dropAnimation]="root.menuVisible"
      (click)="clickHandle($event)">
      <ul class="ql-cascader-menu" *ngFor="let menuItem of root.steps; let step = index">
        <li *ngFor="let listItem of menuItem; let i = index"
          class="ql-cascader-menu__item"
          [class.ql-cascader-menu__item--extensible]="listItem.children"
          [class.is-active]="listItem.active"
          [class.is-disabled]="listItem.qlDisabled"
          (click)="root.selectHandle($event, step, i)">
          {{listItem.label}}
        </li>
      </ul>
    </div>
  `,
  animations: [dropAnimation],
})
export class QlCascaderMenu {
  
  constructor(
    @Optional() public root: QlCascader,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
  }
}

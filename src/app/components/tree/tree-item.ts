import {
  Component, Input, Optional,
} from '@angular/core'
import { QlTree } from './tree'
import { QlTreeModelData } from './tree-props'
import { dropAnimation } from '../shared/animation'

@Component({
  selector: 'ql-tree-item',
  animations: [dropAnimation],
  
  template: `
    <div class="ql-tree-node" (click)="clickHandle($event)"
      [class.is-focusable]="!root.qlDisabled"
      [class.is-checked]="!root.qlDisabled && model.checked"
      role="treeitem">
      <div class="ql-tree-node__content"
        [ngStyle]="{ 'padding-left': (model._level - 1) * indent + 'px' }">
        <span class="ql-tree-node__expand-icon ql-icon-caret-right"
          [class.expanded]="model.expanded"
          [class.is-leaf]="isLeaf()"
          (click)="iconClickHandle($event)"></span>
        <ql-checkbox *ngIf="root.showCheckbox" [model]="model.checked" [indeterminate]="model._indeterminate"
          [qlDisabled]="root.qlDisabled"
          (modelChange)="checkHandle($event)">
        </ql-checkbox>
        <span class="ql-tree-node__label">{{ model.label }}</span>
      </div>
      <div class="ql-tree-node__children" *ngIf="!isLeaf()" [@dropAnimation]="model.expanded">
        <ql-tree-item *ngFor="let item of model.children"
          [model]="item" [indent]="indent">
        </ql-tree-item>
      </div>
    </div>
  `,
})
export class QlTreeItem {
  
  @Input() indent: number
  @Input() model: QlTreeModelData
  
  constructor(
    @Optional() public root: QlTree,
  ) {
  }
  
  clickHandle(event: MouseEvent): void {
    event.stopPropagation()
    if (!this.root.expandOnClickNode) return this.itemEmitter('click')
    this.updateExpanded()
  }
  
  iconClickHandle(event: MouseEvent): void {
    event.stopPropagation()
    this.updateExpanded()
  }
  
  checkHandle(): void {
    if (this.root.qlDisabled) return
    this.root.updateChecked(this.model.id)
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: 'checkbox',
      checked: this.model.checked,
    })
  }
  
  updateExpanded(): void {
    const dontUpdateExpanded: boolean = this.isLeaf()
    const nextAction: string = dontUpdateExpanded ? 'click' : (this.model.expanded ? 'close' : 'open')
    this.itemEmitter(nextAction)
    !dontUpdateExpanded && this.root.updateExpanded(this.model.id)
  }
  
  isLeaf(): boolean {
    return !this.model.children || !this.model.children.length
  }
  
  itemEmitter(action: string): void {
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: action,
      checked: this.model.checked,
    })
  }
  
}

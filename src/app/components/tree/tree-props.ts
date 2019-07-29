import { EventEmitter, Input, Output } from '@angular/core'
import { ModelStandard } from './utils'

export type QlTreeModelData = {
  label: string,
  checked?: boolean,
  expanded?: boolean,
  _level?: number,
  _indeterminate?: boolean,
  id?: number | string,
  children?: QlTreeModelData[],
}

export type QlTreeModelEvent = {
  label: string,
  treeNodeID: string | number,
  action: string,     // close, open, click, checkbox
  checked: boolean,
}

export class QlTreeProps {
  
  identModel: QlTreeModelData[]
  
  
  @Output() modelChange: EventEmitter<QlTreeModelEvent> = new EventEmitter<QlTreeModelEvent>()
  
  @Input('empty-text') emptyText: string = ''
  @Input('show-checkbox') showCheckbox: boolean = false
  @Input('default-expand-all') defaultExpandAll: boolean = false
  @Input('default-expanded-keys') defaultExpandedKeys: Array<string | number> = []
  @Input('default-checked-keys') defaultCheckedKeys: Array<string | number> = []
  @Input('expand-on-click-node') expandOnClickNode: boolean = true
  @Input() indent: number = 16
  @Input() accordion: boolean = false
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
}

import { EventEmitter, Input, Output } from '@angular/core'

export type Option = {
  label?: string,
  value: string,
  children?: Option[],
  qlDisabled?: boolean,
  active?: boolean,
}

export class QlCascaderPoprs {
  
  // input props
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  
  @Input() size: string
  @Input() placeholder: string = '请选择'
  
  // data
  @Input() options: Option[]
  @Input() clearable: boolean = false
  @Input('all-levels') allLevels: boolean = true
  @Input('change-on-select') changeOnSelect: boolean = false
  
  // bind value
  @Input() model: string[]
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
}

import { Component, EventEmitter, Input, Output } from '@angular/core'

export type Value = {
  label: string ,
  value: string | number,
  qlDisabled?: boolean,
  divided?: boolean
}
@Component({
  selector: 'ql-dropdown-item',
  template: `
    <li class="ql-dropdown-menu__item"
    [class.is-disabled]="model.qlDisabled"
    [class.ql-dropdown-menu__item--divided]="model.divided"
    (click)="handleClick($event)">
      {{model.label}}
    </li>
  `,
})
export class QlDropdownItem {
  
  @Input() model: Value
  @Output() selected: EventEmitter<any> = new EventEmitter<any>()
  
  handleClick(event: Event): void {
    if (this.model.qlDisabled) return
    event.stopPropagation()
    this.selected.emit(this.model)
  }

}

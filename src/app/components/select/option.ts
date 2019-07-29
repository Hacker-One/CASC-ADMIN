import { Component, Input, OnInit, Optional } from '@angular/core'
import { QlSelect } from './select'

@Component({
  selector: 'ql-option',
  template: `
    <li class="ql-select-dropdown__item"
      [class.is-disabled]="qlDisabled || rootDisabled"
      [class.selected]="itemSelected"
      (click)="clickHandle($event)">
      <span>{{ label }}</span>
    </li>
  `,
})
export class QlOption implements OnInit {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input() value: any
  @Input() label: string | number
  
  rootDisabled: boolean = false
  itemSelected: boolean = false
  
  constructor(
    @Optional() private rootSelect: QlSelect,
  ) {
  }
  
  clickHandle(event: Event): void {
    event.stopPropagation()
    if (this.qlDisabled || this.rootDisabled) return
    this.rootSelect.changeLabel(this.label, this.value)
  }
  
  ngOnInit(): void {
    const updateHandle = () => {
      if (this.rootSelect.multiple) {
        this.itemSelected = Array.isArray(this.rootSelect.model) && this.rootSelect.model.indexOf(this.value) > -1
      } else {
        this.itemSelected = this.value === this.rootSelect.model
      }
      this.itemSelected && this.rootSelect.changeLabel(this.label)
    }
    this.rootDisabled = this.rootSelect.qlDisabled
    updateHandle()
    this.rootSelect.subscriber.push(updateHandle)
    this.rootSelect.appendOptions({
      value: this.value,
      label: this.label,
    })
  }
}

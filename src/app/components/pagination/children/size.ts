import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
export type Option = {
  value: number,
  label: string
}

@Component({
  selector: 'ql-pagination-size',
  template: `
    <ql-select [model]="model" (modelChange)="modelChange.emit($event)"
      popper-class="is-arrow-fixed">
      <ql-option *ngFor="let item of options"
        [label]="item.label"
        [value]="item.value"></ql-option>
    </ql-select>
  `,
})
export class QlPaginationSize implements OnInit {
  
  @Input() model: number
  @Input() sizes: number[]
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  options: Option[]
  
  ngOnInit(): void {
    this.options = this.sizes.map(size => ({
      value: size,
      label: size + '条/页',
    }))
  }
  
}

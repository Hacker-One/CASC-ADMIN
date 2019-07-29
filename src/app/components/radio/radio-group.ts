import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ql-radio-group',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlRadioGroup),
    multi: true,
  }],
  template: `
    <div class="ql-radio-group" role="radiogroup">
      <ng-content></ng-content>
    </div>
  `,
})
export class QlRadioGroup implements ControlValueAccessor {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input('size') buttonSize: string
  @Input('fill') fillColor: string = '#20a0ff'
  @Input() textColor: string = '#ffffff'
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  subscriber: Function[] = []
  
  changeHandle(nextValue: string | number): void {
    setTimeout(() => {
      this.model = nextValue
      this.modelChange.emit(nextValue)
      this.controlChange(nextValue)
      this.subscriber.forEach(sub => sub())
    }, 0)
  }
  
  writeValue(value: any): void {
    this.model = value
    this.changeHandle(this.model)
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  private controlTouch: Function = () => {}
  
}

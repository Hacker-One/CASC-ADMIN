import {
  Component, Input, Output, EventEmitter, ElementRef, Optional, OnInit, forwardRef,
} from '@angular/core'
import { QlRadioGroup } from './radio-group'
import { isParentTag, removeNgTag } from '../shared/utils'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ql-radio',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlRadio),
    multi: true,
  }],
  template: `
    <label class="ql-radio" role="radio" tabindex="0">
      <span class="ql-radio__input"
        style="float: left;"
        [class.is-disabled]="qlDisabled"
        [class.is-checked]="model === label"
        [class.is-focus]="isFocus">
        <span class="ql-radio__inner"></span>
        <input class="ql-radio__original" type="radio"
          [value]="label" [name]="nativeName" [disabled]="qlDisabled"
          (focus)="isFocus = true" (blur)="isFocus = false"
          [ngModel]="model" (ngModelChange)="changeHandle()">
      </span>
      <span class="ql-radio__label"><ng-content></ng-content></span>
    </label>
  `,
})
export class QlRadio implements OnInit, ControlValueAccessor {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input() label: string | number = ''
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  isFocus: boolean = false
  parentIsGroup: boolean = false
  
  constructor(
    @Optional() private rootGroup: QlRadioGroup,
    private el: ElementRef,
  ) {
  }
  
  changeHandle(): void {
    if (this.parentIsGroup) {
      return this.rootGroup.changeHandle(this.label)
    }
    this.model = this.label
    this.modelChange.emit(this.label)
    this.controlChange(this.label)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    const update = () => {
      if (this.rootGroup.qlDisabled) {
        this.qlDisabled = this.rootGroup.qlDisabled
      }
      this.model = this.rootGroup.model
    }
    this.parentIsGroup = isParentTag(nativeElement, 'ql-radio-group')
    removeNgTag(nativeElement)
    
    if (this.parentIsGroup && this.rootGroup) {
      update()
      this.rootGroup.subscriber.push(update)
    }
  }
  
  writeValue(value: any): void {
    this.model = value
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

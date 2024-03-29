import { Component, forwardRef, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { QlDatePickerProps } from './picker-props'
import { DateFormat } from './utils/format'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ql-date-picker',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlDataPicker),
    multi: true
  }, DateFormat],
  template: `
    <div (click)="propagationHandle($event)">
      <ql-input [class]="'ql-date-editor ' + 'ql-date-editor--' + type"
        [readonly]="!editable || readonly"
        [qlDisabled]="qlDisabled"
        [size]="size" [placeholder]="placeholder"
        [icon]="iconShowClose ? 'close' : 'date'"
        [model]="model"
        (icon-click)="iconClickHandle($event)"
        (modelChange)="changeHandle($event)"
        (icon-mouseenter)="iconMouseActionHandle(true)"
        (icon-mouseleave)="iconMouseActionHandle(false)"
        (focus)="focusHandle()">
      </ql-input>
      <ql-data-picker-panel [show]="showPanelPicker"  [hidden-day]="hiddenDay"
        [panel-absolute]="panelAbsolute" [panel-index]="panelIndex" [width]="panelWidth"
        [model]="value" (modelChange)="dateChangeHandle($event)">
      </ql-data-picker-panel>
    </div>
  `,
})
export class QlDataPicker extends QlDatePickerProps implements OnInit, OnDestroy, ControlValueAccessor {
  
  showPanelPicker: boolean = false
  value: number
  globalClickListener: Function
  globalKeydownListener: Function
  iconShowClose: boolean = false
  
  constructor(
    private dateFormat: DateFormat,
    private renderer: Renderer2,
  ) {
    super()
  }
  
  iconMouseActionHandle(t: boolean): void {
    if (!this.clearable) return
    this.iconShowClose = this.model && t
  }
  
  iconClickHandle(e: Event): void {
    this.iconClick.emit(e)
    if (this.qlDisabled) return
    // use close action
    if (this.iconShowClose) {
      this.clearClick.emit(e)
      this.model = null
      this.value = Date.now()
      this.showPanelPicker = false
      this.iconShowClose = false
      return
    }
    // toggle action
    this.showPanelPicker = !this.showPanelPicker
  }
  
  propagationHandle(event: Event): void {
    event.stopPropagation()
  }
  
  // text to time
  changeHandle(input: string): void {
    const time: number = this.dateFormat.getTime(input)
    // if (!time) return
    this.value = time
  }
  
  // try update input value
  // always trigger emit
  tryUpdateText(): void {
    if (!this.value) {
      this.model = null
      this.modelChange.emit(null)
      this.controlChange(null)
      this.showPanelPicker = false
      return
    }
    const modelTime: number = new Date(this.model).getTime()
    const time: number = this.dateFormat.getTime(this.value)
    this.dateChangeHandle(time ? this.value : modelTime)
  }
  
  dateChangeHandle(time: number): void {
    this.model = DateFormat.moment(time, this.format)
    this.value = new Date(this.model).getTime()
    this.modelChange.emit(this.model)
    this.controlChange(this.model)
    this.showPanelPicker = false
  }
  
  focusHandle(): void {
    this.showPanelPicker = true
    this.globalKeydownListener && this.globalKeydownListener()
    this.globalKeydownListener = this.renderer.listen(
    'document', 'keydown', (event: KeyboardEvent) => {
      if (event.keyCode === 9 || event.keyCode === 27) {
        this.showPanelPicker = false
        this.globalKeydownListener && this.globalKeydownListener()
      }
      if (event.keyCode === 13) {
        this.tryUpdateText()
      }
    })
  }
  
  // text to time
  ngOnInit(): void {
    this.globalClickListener = this.renderer.listen(
    'document', 'click', () => {
      if (!this.showPanelPicker) return
      this.showPanelPicker = false
    
      this.changeOnBlur && this.tryUpdateText()
    })
    // init value
    const time: number = this.dateFormat.getTime(this.model)
    if (!time) return
    this.model = DateFormat.moment(time, this.format)
    this.value = time
  
  }
  
  ngOnDestroy(): void {
    this.globalClickListener && this.globalClickListener()
    this.globalKeydownListener && this.globalKeydownListener()
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

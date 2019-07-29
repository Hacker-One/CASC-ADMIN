import {
  Component, Input, Output, EventEmitter, OnInit,
  ElementRef, Optional, AfterViewInit, ViewChild, OnChanges, SimpleChanges, forwardRef,
} from '@angular/core'
import { QlCheckboxGroup } from './checkbox-group'
import { isParentTag, removeNgTag } from '../shared/utils'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ql-checkbox',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlCheckbox),
    multi: true
  }],
  template: `
    <label class="ql-checkbox">
    <span class="ql-checkbox__input"
      [class.is-disabled]="qlDisabled" [class.is-focus]="isFocus"
      [class.is-indeterminate]="indeterminate" [class.is-checked]="checked">
      <span class="ql-checkbox__inner"></span>
      <input class="ql-checkbox__original" type="checkbox"
        [disabled]="qlDisabled" [value]="label" [name]="name"
        [ngModel]="model" (ngModelChange)="changeHandle($event)"
        (focus)="isFocus = true" (blur)="isFocus = false">
    </span>
    <span class="ql-checkbox__label" style="padding-left: 6px;">
      <ng-container *ngIf="showLabel">{{label}}</ng-container>
      <span *ngIf="!showLabel" #content>
        <ng-content></ng-content>
      </span>
    </span>
    </label>
  `,
})
export class QlCheckbox implements OnInit, AfterViewInit, OnChanges, ControlValueAccessor {
  
  @ViewChild('content') content: any
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input() label: string
  @Input() model: any
  @Input() indeterminate: boolean = false
  @Input() checked: boolean = false
  @Input() name: string
  @Input('true-label') trueLabel: string | number
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  labels: any[]
  parentIsGroup: boolean = false
  isFocus: boolean = false
  showLabel: boolean = false
  
  constructor(
    @Optional() private hostGroup: QlCheckboxGroup,
    private el: ElementRef,
  ) {
  }
  
  isChecked(): boolean {
    if (this.parentIsGroup) {
      return this.hostGroup.model.indexOf(this.label) > -1
    }
    return this.model
  }
  
  changeHandle(t: boolean, notEmit: boolean = false): void {
    if (this.parentIsGroup) {
      return this.hostGroup.updateModelFromChildren(t, this.label)
    }
    this.model = t
    this.checked = this.isChecked()
  
    if (notEmit) return
    this.modelChange.emit(this.model)
    this.controlChange(this.model)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    this.parentIsGroup = isParentTag(nativeElement, 'ql-checkbox-group')
    removeNgTag(nativeElement)
    // update model from group
    if (this.parentIsGroup) {
      this.labels = this.hostGroup.model
      this.model = this.isChecked()
      // update handle
      this.hostGroup.subscriber.push(() => {
        this.model = this.isChecked()
        this.checked = this.isChecked()
      })
    }
    this.checked = this.isChecked()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes || !changes.model) return
    if (changes.model.isFirstChange()) return
    
    this.changeHandle(changes.model.currentValue, true)
  }
  
  ngAfterViewInit(): void {
    const contentText = this.content && this.content.nativeElement.innerText
    setTimeout(() => {
      this.showLabel = !contentText || contentText.length < 1
    }, 0)
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

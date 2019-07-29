import {
  AfterViewInit, Component, ContentChild, ElementRef, forwardRef, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { QlInputPoprs } from './input-props'
import { getTextareaHeight } from './help'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { isParentTag } from '../shared/utils'
import { QlFormItem } from '../form/form-item'

@Component({
  selector: 'ql-input',
  styles: [`
    .icon-disabled { cursor: not-allowed; } .icon-disabled:before { cursor: not-allowed; }
    .icon-pointer { cursor: pointer; }`],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlInput),
    multi: true
  }],
  template: `
    <div [class]="(type === 'text' ? 'ql-input' : 'ql-textarea') +
    (size ? ' ql-input--' + size : '') + ' ' + parentClass"
      [class.is-disabled]="qlDisabled"
      [class.ql-input-group]="prepend || append"
      [class.ql-input-group--append]="append"
      [class.ql-input-group--prepend]="prepend">
      <ng-container *ngIf="type === 'text'">
        
        <div class="ql-input-group__prepend" *ngIf="prepend">
          <ng-template [ngTemplateOutlet]="prepend">
          </ng-template>
        </div>
        
        <span class="ql-input__suffix" *ngIf="icon" (click)="iconClick.emit($event)"
          (mouseenter)="iconMouseEnter.emit($event)" (mouseleave)="iconMouseLeave.emit($event)"
          (mousedown)="iconMousedown.emit($event)" (mouseup)="iconMouseup.emit($event)"
          [class.icon-pointer]="showPointer()"
          [class.icon-disabled]="qlDisabled">
          <span class="ql-input__suffix-inner">
            <i [class]="'ql-input__icon ' + ('ql-icon-' + icon) + (iconClick ? ' is-clickable ' : ' ')
              + (iconClass ? iconClass : '')"
              [attr.disabled]="qlDisabled"
              [class.icon-disabled]="qlDisabled"
              *ngIf="icon"></i>
          </span>
        </span>
        <input class="ql-input__inner"
          [autocomplete]="autoComplete" [value]="value" [name]="name" [type]="nativeType"
          [placeholder]="placeholder" [autofocus]="autofocus"
          [disabled]="qlDisabled" [readonly]="readonly"
          [maxlength]="maxlength" [minlength]="minlength"
          [ngModel]="model" (ngModelChange)="handleInput($event)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)">
        <i *ngIf="validating" class="ql-input__icon ql-icon-loading"></i>
        
        <div class="ql-input-group__append" *ngIf="append">
          <ng-template [ngTemplateOutlet]="append">
          </ng-template>
        </div>
      </ng-container>
      
      <ng-container *ngIf="type === 'textarea'">
        <textarea class="ql-textarea__inner" #textarea
          [style]="textareaStyles"
          [value]="value" [name]="name"
          [placeholder]="placeholder" [autofocus]="autofocus"
          [disabled]="qlDisabled" [readonly]="readonly"
          [maxlength]="maxlength" [minlength]="minlength"
          [ngModel]="model" (input)="handleInput($event.target.value)"
          (focus)="focus.emit($event)" (blur)="blur.emit($event)"></textarea>
      </ng-container>
    </div>
  `,
})
export class QlInput extends QlInputPoprs implements OnInit, AfterViewInit, ControlValueAccessor {
  
  @ContentChild('prepend') prepend: TemplateRef<any>
  @ContentChild('append') append: TemplateRef<any>
  @ViewChild('textarea') textarea: any
  textareaStyles: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private form: QlFormItem,
  ) {
    super()
  }
  
  makeTextareaStyles(): void {
    if (!this.autosize || this.type !== 'textarea') return
    const height: string = getTextareaHeight(this.textarea.nativeElement, this.autosize.minRows, this.autosize.maxRows)
    const styles: string = `resize: ${this.resize}; height: ${height};`
    this.textareaStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  handleInput(val: string): void {
    this.model = val
    this.modelChange.emit(val)
    this.controlChange(val)
    const timer: any = setTimeout(() => {
      this.makeTextareaStyles()
      clearTimeout(timer)
    }, 0)
  }
  
  showPointer(): boolean {
    const clickEvent: boolean = !!(this.iconClick.observers && this.iconClick.observers.length)
    const mouseEvent: boolean = !!(this.iconMousedown.observers && this.iconMousedown.observers.length)
    
    return clickEvent || mouseEvent
  }
  
  ngOnInit(): void {
    // auto follow form status
    const parentIsForm: boolean = isParentTag(this.el.nativeElement, 'ql-form-item')
    if (parentIsForm) {
      const iconStatus = {
        error: 'circle-close', success: 'circle-check', validating: 'circle-validating',
      }
      this.iconClass = 'ql-input__validateIcon'
      this.form.statusSubscriber.push((status: string) => {
        this.icon = iconStatus[status] || ''
      })
    }
    
    if (this.value && !this.model) {
      this.model = this.value
    }
  }
  
  ngAfterViewInit(): any {
    // no content required
    if (this.type === 'textarea') {
      return setTimeout(() => {
        this.makeTextareaStyles()
      }, 0)
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

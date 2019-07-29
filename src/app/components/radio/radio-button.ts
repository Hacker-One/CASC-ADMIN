import {
  Component, Input, Output, EventEmitter, Optional, ElementRef,
} from '@angular/core'
import { QlRadioGroup } from './radio-group'
import { isParentTag, removeNgTag } from '../shared/utils'

@Component({
  selector: 'ql-radio-button',
  template: `
    <label [class]="'ql-radio-button' + (size ? ' ql-radio-button--' + size : '')"
      [class.is-disabled]="qlDisabled"
      [class.is-active]="model === label">
      <input class="ql-radio-button__orig-radio" type="radio"
        [value]="label" [name]="nativeName" [disabled]="qlDisabled"
        [ngModel]="model" (ngModelChange)="changeHandle()">
      <span class="ql-radio-button__inner" [ngStyle]="model === label && activeStyles">
        <ng-content></ng-content>
      </span>
    </label>
  `,
})
export class QlRadioButton {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input() label: string | number
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  size: string
  showLabel: boolean = false
  parentIsGroup: boolean = false
  activeStyles: any
  
  constructor(
    @Optional() private rootGroup: QlRadioGroup,
    private el: ElementRef,
  ) {
  }
  
  changeHandle(): void {
    if (this.parentIsGroup) {
      return this.rootGroup.changeHandle(this.label)
    }
    this.modelChange.emit(this.label)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    const update = () => {
      this.qlDisabled = this.rootGroup.qlDisabled
      this.model = this.rootGroup.model
      this.size = this.rootGroup.buttonSize
      this.activeStyles =  {
        backgroundColor: this.rootGroup.fillColor || '',
        borderColor: this.rootGroup.fillColor || '',
        boxShadow: this.rootGroup.fillColor ? `-1px 0 0 0 ${this.rootGroup.fillColor}` : '',
        color: this.rootGroup.textColor || '',
      }
    }
    this.parentIsGroup = isParentTag(nativeElement, 'ql-radio-group')
    removeNgTag(nativeElement)
    
    if (this.parentIsGroup && this.rootGroup) {
      update()
      this.rootGroup.subscriber.push(update)
    }
  }
  
}

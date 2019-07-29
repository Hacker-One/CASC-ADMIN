import { Component, Input, OnInit, Optional } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { trigger, state, style, animate, transition } from '@angular/animations'
import { QlSelect } from './select'

@Component({
  selector: 'ql-select-dropdown',
  template: `
    <div [class]="'ql-select-dropdown ' + popperClass"
      [style]="dropdownStyles"
      [@state]="isActived">
      <ng-content></ng-content>
    </div>
  `,
  animations: [
    trigger('state', [
      state('true', style({
        opacity: 1,
        height: '*',
        display: 'block',
      })),
      state('false', style({
        opacity: 0,
        height: 0,
        display: 'none',
      })),
      transition('* => *', animate(`250ms ease-in-out`)),
    ])
  ],
})
export class QlSelectDropdown implements OnInit {
  
  @Input() isActived: boolean = false
  
  multiple: boolean = false
  popperClass: string
  dropdownStyles: SafeStyle
  
  constructor(
    @Optional() private rootSelect: QlSelect,
    private sanitizer: DomSanitizer
  ) {
  }
  
  ngOnInit(): void {
    let firstStyle: string = 'display: none; opacity: 0; height: 0;'
    this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(firstStyle)
    setTimeout(() => {
      const styles = `min-width: ${this.rootSelect.selfWidth}px; ${firstStyle || ''}`
      this.dropdownStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
      this.popperClass = this.rootSelect.popperClass
      firstStyle = ''
    }, 0)
  }
  
}

import { Component, ElementRef, Input } from '@angular/core'
import { QlContainer } from '../container'
import { removeNgTag } from '../../shared/utils/host'

@Component({
  selector: 'ql-footer',
  template: `
    <footer [class]="'ql-footer ' + class" [ngStyle]="{height: height}">
      <ng-content></ng-content>
    </footer>
  `,
})
export class QlFooter {
  
  @Input() height: string = '60px'
  @Input() class: string
  
  constructor(
    private root: QlContainer,
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    console.log('Qloud Angular: Container Component is discarded, use [Container directive] replace it.')
    this.root.setVertical(true)
    removeNgTag(this.el.nativeElement)
  }
  
}

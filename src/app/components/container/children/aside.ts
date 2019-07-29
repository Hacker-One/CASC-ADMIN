import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { removeNgTag } from '../../shared/utils'

@Component({
  selector: 'ql-aside',
  template: `
    <aside [class]="'ql-aside ' + class" [ngStyle]="{width: width}">
      <ng-content></ng-content>
    </aside>
  `,
})
export class QlAside implements OnInit {
  
  @Input() width: string = '300px'
  @Input() class: string
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  ngOnInit(): void {
    console.log('Qloud Angular: Container Component is discarded, use [Container directive] replace it.')
    removeNgTag(this.el.nativeElement)
  }
}

import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { removeNgTag } from '../shared/utils/host'

@Component({
  selector: 'ql-container',
  template: `
    <section [class]="'ql-container ' + class" [class.is-vertical]="isVertical">
      <ng-content></ng-content>
    </section>
  `,
})
export class QlContainer implements OnInit {
  
  @Input() direction: string = ''
  @Input() class: string
  isVertical: boolean = false
  
  constructor(
    private el: ElementRef,
  ) {
  }
  
  setVertical(isVertical?: boolean): void {
    if (isVertical && this.direction !== 'horizontal') {
      this.isVertical = true
    }
  }
  
  ngOnInit(): void {
    console.log('Qloud Angular: Container Component is discarded, use [Container directive] replace it.')
    this.isVertical = this.direction === 'vertical'
    removeNgTag(this.el.nativeElement)
  }
  
}

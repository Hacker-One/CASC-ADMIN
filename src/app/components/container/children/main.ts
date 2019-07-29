import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { removeNgTag } from '../../shared/utils/host'

@Component({
  selector: 'ql-main',
  template: `
    <main [class]="'ql-main ' + class">
      <ng-content></ng-content>
    </main>
  `,
})
export class QlMain implements OnInit {
  
  @Input() class: string
  
  constructor(
    private el: ElementRef,
  ) {}
  
  ngOnInit(): void {
    console.log('Qloud Angular: Container Component is discarded, use [Container directive] replace it.')
    removeNgTag(this.el.nativeElement)
  }
}

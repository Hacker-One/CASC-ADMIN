import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core'

@Component({
  selector: 'ql-steps',
  template: `
    <div [class]="'ql-steps ' + (!simple ? 'ql-steps--' + direction : '')"
      [class.ql-steps--simple]="simple">
      <ng-content></ng-content>
    </div>
  `,
})
export class QlSteps implements OnInit {
  
  @Input() space: string | number                       //  ex: 10px, 50%
  @Input() direction: string = 'horizontal'     // enum: vertical/horizontal
  @Input() active: number = 0
  @Input() simple: boolean = false
  @Input('process-status') processStatus: string = 'process'
  @Input('finish-status') finishStatus: string = 'finish'     // enum: wait/process/finish/error/success
  @Input('align-center') alignCenter: boolean = false
  
  offset: number = 0
  stepsLength: number = 0
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }
  
  ngOnInit(): void {
    const children = this.el.nativeElement.querySelectorAll('ql-step')
    if (!children || !children.length) {
      return console.warn('steps components required children')
    }
    children.forEach((el: HTMLElement, index: number) => {
      this.renderer.setAttribute(el, 'ql-index', String(index))
    })
    this.stepsLength = children.length
    // this.offset = children[this.stepsLength - 1].getBoundingClientRect().width / (this.stepsLength - 1)
  }
}

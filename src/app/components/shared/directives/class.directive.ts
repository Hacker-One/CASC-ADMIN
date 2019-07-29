import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core'

@Directive({
  selector: '[ql-class]',
})
export class QlClassDirective implements OnInit {
  
  @Input('ql-class') classNames: string = ''
  
  
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {
  }
  
  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, this.classNames)
  }
  
}

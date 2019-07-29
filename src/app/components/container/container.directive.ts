import { Directive, Input, OnChanges, OnInit, Self } from '@angular/core'
import { NgClass } from '@angular/common'

@Directive({
  selector: '[ql-container]',
  providers: [NgClass],
})
export class QlContainerDirective implements OnChanges, OnInit {
  
  @Input() direction: string = ''
  private hostClasses: { [key: string]: boolean }
  
  constructor(
    @Self() private ngClass: NgClass,
  ) {
  }
  
  ngOnChanges(): void {
    this.colletClasses()
  }
  
  ngOnInit(): void {
    this.colletClasses()
  }
  
  private colletClasses(): void {
    this.hostClasses = {
      'ql-container': true,
      'is-vertical': this.direction === 'vertical',
    }
  
    this.ngClass.ngClass = this.hostClasses
    this.ngClass.ngDoCheck()
  }
  
}

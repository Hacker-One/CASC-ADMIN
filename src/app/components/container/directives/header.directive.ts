import { Directive, Input, OnChanges, OnInit, Self } from '@angular/core'
import { NgStyle } from '@angular/common'

@Directive({
  selector: '[ql-header]',
  host: { class: 'ql-header' },
  providers: [NgStyle],
})
export class QlHeaderDirective implements OnChanges, OnInit {
  
  @Input() height: string = '60px'
  private hostStyles: { [key: string]: string }
  
  constructor(
    @Self() private ngStyle: NgStyle,
  ) {
  }
  
  ngOnChanges(): void {
    this.colletClasses()
  }
  
  ngOnInit(): void {
    this.colletClasses()
  }
  
  private colletClasses(): void {
    this.hostStyles = {
      height: this.height,
    }
  
    this.ngStyle.ngStyle = this.hostStyles
    this.ngStyle.ngDoCheck()
  }
  
}

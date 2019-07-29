import { Directive } from '@angular/core'
import { NgClass, NgStyle } from '@angular/common'

@Directive({
  selector: '[ql-main]',
  providers: [NgClass, NgStyle],
  host: { class: 'ql-main' },
})
export class QlMainDirective {

}

import { Component } from '@angular/core'
import { QlFormProps } from './form.props'

@Component({
  selector: 'ql-form',
  template: `
    <form [class]="'ql-form ' + (labelPosition ? 'ql-form--label-' + labelPosition : '')
      + (inline ? ' ql-form--inline' : '')">
     <ng-content></ng-content>
    </form>
  `,
})
export class QlForm extends QlFormProps {
  constructor() {
    super()
  }
}

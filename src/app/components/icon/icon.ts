import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'ql-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <i [class]="iconName ? 'ql-icon-' + iconName : ''"></i>
  `,
})
export class QlIcon {
  
  @Input('name') iconName: string
  
  constructor(
  ) {
  }
  
}

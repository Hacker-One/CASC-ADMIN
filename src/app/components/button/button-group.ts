import { Component, ChangeDetectionStrategy, Input } from '@angular/core'

@Component({
  selector: 'ql-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'ql-button-group ' + nativeClass">
      <ng-content></ng-content>
    </div>
  `,
})
export class QlButtonGroup {
  
  @Input('class') nativeClass: string = ''
  
  constructor(
  ) {
  }
  
}

import { Component, Input, ChangeDetectionStrategy} from '@angular/core'

@Component({
  selector: 'ql-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ql-badge">
      <ng-content></ng-content>
      <sup *ngIf="!hidden && (!!makeContent() || isDot)"
        class="ql-badge__content"
        style="z-index: 1;"
        [class.is-fixed]="true" [class.is-dot]="isDot">
        {{makeContent()}}
      </sup>
    </div>
  `,
})
export class QlBadge {
  
  @Input() model: string | number
  @Input() max: number                // only model is number
  @Input() hidden: boolean = false
  @Input('is-dot') isDot: boolean = false
  
  makeContent(): string | number {
    if (this.isDot) return ''
    if (typeof this.model === 'number') {
      return this.max < this.model ? `${this.max}+` : this.model;
    }
    return this.model
  }
  
}

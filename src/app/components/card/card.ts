import { Component, Input, ChangeDetectionStrategy, ContentChild, TemplateRef } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ql-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="ql-card">
      <div class="ql-card__header" *ngIf="header || headerStr">
        <ng-container *ngIf="header">
          <ng-template [ngTemplateOutlet]="header">
          </ng-template>
        </ng-container>
        <ng-container *ngIf="!header">
          {{headerStr}}
        </ng-container>
      </div>
      <div class="ql-card__body" [style]="makeSafebodyStyle()">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class QlCard {
  
  @ContentChild('header') header: TemplateRef<any>
  @Input('header') headerStr: string
  @Input('body-style') bodyStyle: string = ''
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  makeSafebodyStyle(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.bodyStyle)
  }

}

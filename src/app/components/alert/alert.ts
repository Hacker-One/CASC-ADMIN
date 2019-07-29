import {
  Component, Input, ChangeDetectionStrategy, Output, EventEmitter,
  ContentChild, TemplateRef,
} from '@angular/core'
import { fadeAnimation } from './animation'

export const ICON_CLASS_MAP: { [key: string]: string } = {
  'success': 'ql-icon-success',
  'warning': 'ql-icon-warning',
  'error': 'ql-icon-error',
  'info': 'ql-icon-info',
}

@Component({
  selector: 'ql-alert',
  animations: [fadeAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="'ql-alert ql-alert--' + type" [@fadeAnimation]="!visible"
      [class.is-center]="center" role="alert">
      <i [class]="'ql-alert__icon ' + makeIconClass()" *ngIf="showIcon"></i>
      <div class="ql-alert__content">
        <span [class]="'ql-alert__title ' + makeTitleClass()">
          <ng-content></ng-content>
        </span>
        <p class="ql-alert__description" *ngIf="description && !descriptionTmp">{{description}}</p>
        <p class="ql-alert__description" *ngIf="descriptionTmp"><ng-template [ngTemplateOutlet]="descriptionTmp"></ng-template></p>
        <i class="ql-alert__closebtn"
          *ngIf="closable"
          [class.is-customed]="closeText !== ''"
          [class.ql-icon-close]="closeText === ''"
          (click)="clickHandle($event)">
          {{closeText}}
        </i>
      </div>
    </div>
  `,
})
export class QlAlert {
  
  @ContentChild('description') descriptionTmp: TemplateRef<any>
  
  @Input() type: string = 'info'
  @Input() center: boolean = false
  @Input() description: string
  @Input() closable: boolean = true
  @Input('close-text') closeText: string = ''
  @Input('show-icon') showIcon: boolean = false
  @Output() close: EventEmitter<Event> = new EventEmitter<Event>()
  
  visible: boolean = true
  
  makeIconClass(): string {
    const base: string = ICON_CLASS_MAP[this.type] || 'ql-icon-info'
    const isBig: string = this.description || this.descriptionTmp ? ' is-big' : ''
    return base + isBig
  }
  
  makeTitleClass(): string {
    return this.description || this.descriptionTmp ? ' is-bold' : ''
  }
  
  clickHandle(event: Event): void {
    this.visible = false
    this.close.emit(event)
  }
  
}

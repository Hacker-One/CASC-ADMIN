import { Component, Input, ChangeDetectionStrategy, OnInit, EventEmitter, Output } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ql-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span [class]="'ql-tag' + (type ? ' ql-tag--' + type : '') + (size ? ' ql-tag--' + size : '')"
      [class.is-hit]="hit">
      <ng-content></ng-content>
      <i class="ql-tag__close ql-icon-close" *ngIf="closable" (click)="closeEmitter.emit($event)"></i>
    </span>
  `,
})
export class QlTag implements OnInit {
  
  @Input() type: string         // enum: primary/gray/success/warning/danger
  @Input() closable: boolean = false
  @Input() hit: boolean = false
  @Input() color: string
  @Input() size: string
  @Input('close-transition') closeTransition: boolean = false
  @Output('close') closeEmitter: EventEmitter<any> = new EventEmitter<any>()
  
  tagStyles: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  ngOnInit(): void {
    const styles: string = `backgroundColor: ${this.color}`
    this.tagStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
}

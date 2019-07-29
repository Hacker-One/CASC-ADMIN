import {
  Component, Input, Output, EventEmitter, OnInit, ChangeDetectionStrategy,
  ElementRef,
} from '@angular/core'
import { removeNgTag } from '../shared/utils'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ql-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <button (click)="clickHandle($event)"
    [class]="'ql-button ' + (themeType ? ' ql-button--' + themeType : '')
      + (size ? ' ql-button--' + size : '') + ' ' + nativeClass"
    [class.is-disabled]="qlDisabled"
    [class.is-loading]="loading"
    [class.is-plain]="plain"
    [class.is-round]="round"
    [disabled]="qlDisabled"
    [type]="nativeType"
    [style]="extendStyles()"
    [autofocus]="autofocus">
    <i class="ql-icon-loading" *ngIf="loading"></i>
    <i [class]="'ql-icon-' + icon" *ngIf="icon && !loading"></i>
    <ng-content></ng-content>
  </button>
  `,
})
export class QlButton implements OnInit {
  
  @Input() set disabled(val: boolean) {   // todo, is discarded.
    console.warn('Qloud Angular: (disabled) is discarded, use [qlDisabled] replace it.')
  }
  @Input() qlDisabled: boolean = false
  @Input('type') themeType: string = ''
  @Input('native-type') nativeType: string = 'button'
  @Input() size: string = ''
  @Input() icon: string = ''
  @Input() loading: boolean = false
  @Input() plain: boolean = false
  @Input() round: boolean = false
  @Input() autofocus: boolean = false
  @Input() style: string = ''
  @Input('class') nativeClass: string = ''
  @Output() click: EventEmitter<any> = new EventEmitter<any>()
  
  constructor(
    private el: ElementRef,
    private sanitizer: DomSanitizer,
  ) {
  }
  
  clickHandle($event: Event): void {
    this.click.emit($event)
  }
  
  extendStyles(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle(this.style)
  }
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
  
}

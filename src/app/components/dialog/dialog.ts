import {
  Component, ContentChild, Input, OnChanges, OnDestroy,
  OnInit, Renderer2, SimpleChanges, TemplateRef,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { DocumentWrapper, WindowWrapper } from '../shared/services'
import { QlDialogProps } from './dialog.props'
import { dialogFadeAnimation } from '../shared/animation'

@Component({
  selector: 'ql-dialog',
  animations: [dialogFadeAnimation],
  template: `
    <div class="ql-dialog__wrapper" [@dialogFadeAnimation]="visible"
      [ngStyle]="{ 'z-index': dialogZindex }"
      (click)="wrapperClickHandle()">
      <div [class]="'ql-dialog ' + customClass"
        [class.ql-dialog--center]="center"
        [style]="makeDialogStyles()"
        (click)="$event.stopPropagation()">
        <div class="ql-dialog__header">
          <ng-container *ngIf="titleTmp">
            <ng-template [ngTemplateOutlet]="titleTmp"></ng-template>
          </ng-container>
          <span class="ql-dialog__title" *ngIf="!titleTmp">{{title}}</span>
          <button type="button" class="ql-dialog__headerbtn"
            aria-label="Close"
            *ngIf="showClose"
            (click)="closeHandler()">
            <i class="ql-dialog__close ql-icon ql-icon-close"></i>
          </button>
        </div>
        <div class="ql-dialog__body">
          <ng-content></ng-content>
        </div>
        <div class="ql-dialog__footer">
          <ng-container *ngIf="footerTmp">
            <ng-template [ngTemplateOutlet]="footerTmp"></ng-template>
          </ng-container>
        </div>
      </div>
    </div>
  `,
})
export class QlDialog extends QlDialogProps implements OnInit, OnChanges, OnDestroy {
  
  @ContentChild('title') titleTmp: TemplateRef<any>
  @ContentChild('footer') footerTmp: TemplateRef<any>
  @Input() model: string | number
  
  cacheOverflow: string
  cacheModalElement: Element
  globalListenFunc: Function
  
  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private window: WindowWrapper,
    private document: DocumentWrapper,
  ) {
    super()
  }
  
  makeDialogStyles(): SafeStyle {
    const width: string = this.width ? `width: ${this.width};` : ''
    const styles: string = `top: ${this.top};${width}`
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  closeHandler(): void {
    this.beforeClose(() => {
      this.visible = false
      this.visibleChange.emit(this.visible)
      this.updateWithVisibleChange()
    })
  }
  
  wrapperClickHandle(): void {
    // close dialog
    if (this.closeOnClickModal) {
      this.closeHandler()
    }
  }
  
  updateWithVisibleChange(): void {
    // update modal
    if (this.cacheModalElement) {
      // this.cacheModalElement.innerHTML = this.makeModalTmp(this.visible)
      this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none')
    }
    // lock body scroll
    if (this.lockScroll) {
      const nextValue = this.visible ? 'hidden' : this.cacheOverflow
      this.renderer.setStyle(this.document.body, 'overflow', nextValue)
    }
  }
  
  ngOnInit(): void {
    // save old overflow
    if (this.lockScroll) {
      this.cacheOverflow = this.window.getComputedStyle(this.document.body).overflow
    }
    this.cacheModalElement = this.renderer.createElement('div')
    this.renderer.setAttribute(this.cacheModalElement, 'class', 'v-modal')
    this.renderer.setStyle(this.cacheModalElement, 'z-index', this.modalZindex)
    this.renderer.setStyle(this.cacheModalElement, 'display', this.visible ? 'block' : 'none')
    this.document.body.appendChild(this.cacheModalElement)
    // listen esc
    if (this.closeOnPressEscape) {
      this.globalListenFunc = this.renderer.listen(
      'document', 'keydown', (event: KeyboardEvent) => {
        this.visible && event.keyCode === 27 && this.closeHandler()
      })
    }
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.visible) return
    this.visible = changes.visible.currentValue
    this.updateWithVisibleChange()
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
    this.cacheModalElement.parentElement.removeChild(this.cacheModalElement)
    this.renderer.setStyle(this.document.body, 'overflow', this.cacheOverflow)
  }
  
}

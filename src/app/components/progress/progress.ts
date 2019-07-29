import { Component, Input, OnInit } from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'ql-progress',
  template: `
    <div [class]="'ql-progress ql-progress--' + type + (status ? ' is-' + status : '')"
      [class.ql-progress--without-text]="!showText"
      [class.ql-progress--text-inside]="textInside">
      <div class="ql-progress-bar" *ngIf="type === 'line'">
        <div class="ql-progress-bar__outer" [ngStyle]="{height: strokeWidth + 'px'}">
          <div class="ql-progress-bar__inner" [style]="colorStryles()">
            <div class="ql-progress-bar__innerText" *ngIf="showText && textInside">{{percentage}}%</div>
          </div>
        </div>
      </div>
      <div class="ql-progress-circle" *ngIf="type === 'circle'" [ngStyle]="{height: width + 'px', width: width + 'px'}">
        <svg viewBox="0 0 100 100">
          <path class="ql-progress-circle__track" [attr.d]="makeTrackPath()" stroke="#e5e9f2"
            [attr.stroke-width]="relativeStrokeWidth" fill="none"></path>
          <path class="ql-progress-circle__path" [attr.d]="makeTrackPath()" stroke-linecap="round" [attr.stroke]="makeStroke()"
            [attr.stroke-width]="relativeStrokeWidth" fill="none" [style]="svgStyles()"></path>
        </svg>
      </div>
      <div class="ql-progress__text" *ngIf="showText && !textInside"
           [ngStyle]="{fontSize: progressTextSize + 'px'}">
        <ng-container *ngIf="!status">{{percentage}}%</ng-container>
        <i *ngIf="status" [class]="makeIconClass()"></i>
      </div>
    </div>
  `,
})
export class Qlprogress implements OnInit {
  
  @Input() percentage: number = 0
  @Input() type: string = 'line'
  @Input() status: string
  @Input('stroke-width') strokeWidth: number = 6
  @Input('text-inside') textInside: boolean = false
  @Input('show-text') showText: boolean = true
  // only in type=circle
  @Input() width: number = 126
  @Input('active-color') activeColor: string
  
  relativeStrokeWidth: string
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  progressTextSize(): number {
    return this.type === 'line' ? 12 + this.strokeWidth * 0.4
      : this.width * 0.111111 + 2
  }
  
  makeIconClass(): string {
    if (this.type === 'line') {
      return this.status === 'success' ? 'ql-icon-circle-check' : 'ql-icon-circle-cross'
    }
    return this.status === 'success' ? 'ql-icon-check' : 'ql-icon-close'
  }
  
  makeStroke(): string {
    if (this.status === 'success') return '#13ce66'
    if (this.status === 'exception') return '#ff4949'
    return '#20a0ff'
  }
  
  makeTrackPath(): string {
    const radius: number = ~~(50 - Number.parseFloat(this.relativeStrokeWidth) / 2)
    return `M 50 50 m 0 -${radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 -${radius * 2}`
  }
  
  svgStyles(): SafeStyle {
    const perimeter = (50 - parseFloat(this.relativeStrokeWidth) / 2) * 2 * Math.PI
    let styles = `stroke-dasharray: ${perimeter}px, ${ perimeter}px;`
    styles += `stroke-dashoffset: ${(1 - this.percentage / 100) *  perimeter}px;`
    styles += 'transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  colorStryles(): SafeStyle {
    const styles = `width: ${this.percentage}%;` +
      (this.activeColor ? `background-color: ${this.activeColor};` : '')
    return this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  ngOnInit(): void {
    this.percentage > 100 && (this.percentage = 100)
    this.relativeStrokeWidth = (this.strokeWidth / this.width * 100).toFixed(1)
  }
  
}

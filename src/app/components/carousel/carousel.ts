import {
  AfterContentChecked, Component, ContentChildren, forwardRef,
  OnChanges, OnDestroy, QueryList, SimpleChanges,
} from '@angular/core'
import { QlCarouselItem } from './carousel-item'
import { QlCarouselProps } from './carousel-props'
import { carouselBtnLeftAnimation, carouselBtnRightAnimation } from './animations'

@Component({
  selector: 'ql-carousel',
  animations: [carouselBtnLeftAnimation, carouselBtnRightAnimation],
  template: `
    <div class="ql-carousel"
      #carousel
      [class.ql-carousel--card]="type === 'card'"
      (mouseenter)="carousel.hover = true"
      (mouseleave)="carousel.hover = false">
      <div class="ql-carousel__container" [ngStyle]="{height: height}">
        <button class="ql-carousel__arrow ql-carousel__arrow--left"
          #leftBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnLeftAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model - 1,'hover')"
          (click)="btnActionHandle(model - 1, 'click')">
          <i class="ql-icon-arrow-left"></i>
        </button>
        <button class="ql-carousel__arrow ql-carousel__arrow--right"
          #rightBtn
          *ngIf="arrow !== 'never'"
          [@carouselBtnRightAnimation]="arrow === 'always' || carousel.hover"
          (mouseenter)="btnActionHandle(model + 1, 'hover')"
          (click)="btnActionHandle(model + 1, 'click')">
          <i class="ql-icon-arrow-right"></i>
        </button>
        <ng-content></ng-content>
      </div>
      <ul class="ql-carousel__indicators" *ngIf="indicatorPosition !== 'none'"
        [class.ql-carousel__indicators--labels]="hasLabel"
        [class.ql-carousel__indicators--outside]="indicatorPosition === 'outside' || type === 'card'">
        <li *ngFor="let item of items; let i = index"
          class="ql-carousel__indicator"
          [class.is-active]="i === model"
          (mouseenter)="indicatorActionHandle(i, 'hover')"
          (click)="indicatorActionHandle(i, 'click')">
          <button class="ql-carousel__button">
            <span *ngIf="hasLabel">{{item}}</span>
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class QlCarousel extends QlCarouselProps implements AfterContentChecked, OnChanges, OnDestroy {
  
  @ContentChildren(forwardRef(() => QlCarouselItem)) children: QueryList<QlCarouselItem>
  subscriber: Function[] = []
  items: any[] = []
  hasLabel: boolean = false
  timer: any
  
  constructor(
  ) {
    super()
  }
  
  btnActionHandle(nextValue: number, eventType: string): void {
    if (this.trigger !== eventType) return
    this.autoplay && this.resetInterval()
    this.setActiveItem(nextValue)
  }
  
  indicatorActionHandle(nextValue: number, eventType: string): void {
    if (this.indicatorTrigger !== eventType) return
    this.autoplay && this.resetInterval()
    this.setActiveItem(nextValue)
  }
  
  setActiveItem(index: number): void {
    if (!this.children) return
    
    const len = this.children.length
    const nextValue = index >= len ? 0 : index < 0 ? len - 1 : index
    this.model = nextValue
    this.subscriber.forEach(func => func())
    this.modelChange.emit(this.model)
  }
  
  resetInterval(): void {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.setActiveItem(this.model + 1)
    }, this.interval)
  }
  
  ngAfterContentChecked(): void {
    const timer = setTimeout(() => {
      this.children.forEach((item, index) => {
        item.index = index
        item.updateActive()
        item.updateStyles()
      })
      // all labels are validated
      this.hasLabel = !this.items.some(item => !item)
      // auto play
      this.autoplay && this.resetInterval()
      clearTimeout(timer)
    }, 0)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    this.setActiveItem(changes.model.currentValue)
  }
  
  ngOnDestroy(): void {
    this.timer && clearInterval(this.timer)
  }

}

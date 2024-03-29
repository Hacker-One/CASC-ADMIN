import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'

@Component({
  selector: 'ql-pagination-pager',
  template: `
    <ul class="ql-pager">
      <li class="number" [class.active]="current === 1"
        (click)="clickHandle(1)"
        *ngIf="count > 0">1</li>
      <li *ngIf="showPrevMore"
        [class]="'ql-icon more btn-quickprev ' + quickprevIconClass"
        (click)="jumpHandle(-5)"
        (mouseenter)="quickprevIconClass = 'ql-icon-d-arrow-left'"
        (mouseleave)="quickprevIconClass = 'ql-icon-more'"></li>
      <li class="number"
        *ngFor="let pager of pagers"
        (click)="clickHandle(pager)"
        [class.active]="current === pager">{{ pager }}</li>
      <li [class]="'ql-icon more btn-quicknext ' + quicknextIconClass"
        *ngIf="showNextMore"
        (click)="jumpHandle(5)"
        (mouseenter)="quicknextIconClass = 'ql-icon-d-arrow-right'"
        (mouseleave)="quicknextIconClass = 'ql-icon-more'"></li>
      <li class="number"
        [class.active]="current === count"
        (click)="clickHandle(count)"
        *ngIf="count > 1">{{ count }}</li>
    </ul>
  `,
})
export class QlPaginationPager implements OnInit, OnChanges {
  
  @Input() current: number = 1
  @Input() count: number
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  
  pagers: number[]
  showPrevMore: boolean = false
  showNextMore: boolean = false
  quicknextIconClass: string = 'ql-icon-more'
  quickprevIconClass: string = 'ql-icon-more'
  
  static pagerGenerator(minValue: number): number[] {
    const target: number[] = new Array(5).fill('').map((v, i) => i + minValue)
    return target
  }
  
  /**
   * Always show 5 numbers, excluding head and foot
   * like: 1 ... < 5, 6, 7, 8, 9 > ... 100
   *
   * jump page button is [showPrevMore] and [showNextMore]
   *
   * @return number[], like: [2, 3, 4, 5, 6]
   *
   */
  makePagers(current: number, count: number): number[] {
    const pagerCount: number = 7
    if (count < pagerCount) {
      this.setMoreBtn(false, false)
      const target: number[] = QlPaginationPager.pagerGenerator(2)
      target.length = count - 2 >= 0 ? count - 2 : 0
      return target
    }
    
    const max: number = current + 2
    const min: number = current - 2
    if (max >= count) {
      this.setMoreBtn(true, false)
      return QlPaginationPager.pagerGenerator(count - 5)
    }
    if (min <= 2) {
      this.setMoreBtn(false, true)
      return QlPaginationPager.pagerGenerator(2)
    }
    this.setMoreBtn(true, true)
    return QlPaginationPager.pagerGenerator(min)
  }
  
  setMoreBtn(prev: boolean, next: boolean): void {
    this.showPrevMore = prev
    this.showNextMore = next
  }
  
  clickHandle(to: number): void {
    const step: number = to - this.current
    this.next.emit(step)
  }
  
  jumpHandle(step: number): void {
    this.next.emit(step)
  }

  ngOnInit(): void {
    this.pagers = this.makePagers(this.current, this.count)
  }
  
  // manual diff and update
  ngOnChanges(changes: SimpleChanges): void {
    if (!changes) return
    this.pagers = this.makePagers(this.current, this.count)
  }
}

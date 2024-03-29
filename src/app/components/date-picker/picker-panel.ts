import { Component, EventEmitter, Input, OnChanges, OnInit, Optional, Output, SimpleChanges } from '@angular/core'
import { QlDataPicker } from './picker'
import { dropAnimation } from '../shared/animation'

export type DateModelItem = {
  month: number,
  year: number,
  yearRange: number[],
}

@Component({
  selector: 'ql-data-picker-panel',
  animations: [dropAnimation],
  styles: [' .ql-picker-panel-absolute { position: absolute; } '],
  template: `
    <div [@dropAnimation]="show"
      [ngStyle]="{ width: width ? width + 'px' : 'auto', 'z-index': panelIndex}"
      [class]="'ql-picker-panel ql-date-picker '"
      [class.has-time]="showTime"
      [class.ql-picker-panel-absolute]="panelAbsolute">
      <div class="ql-picker-panel__body-wrapper">
        <!--<div class="ql-picker-panel__sidebar" *ngIf="shortcuts">-->
          <!--<button type="button" class="ql-picker-panel__shortcut"-->
            <!--*ngFor="shortcut in shortcuts"-->
            <!--(click)="handleShortcutClick(shortcut)">-->
            <!--{{ shortcut.text }}-->
          <!--</button>-->
        <!--</div>-->
        <div class="ql-picker-panel__body">
          <div class="ql-date-picker__header">
            <button class="ql-picker-panel__icon-btn ql-date-picker__prev-btn ql-icon-d-arrow-left"
              type="button" (click)="nextYear(-1)">
            </button>
            <button class="ql-picker-panel__icon-btn ql-date-picker__prev-btn ql-icon-arrow-left"
              type="button" (click)="nextMonth(-1)"
              *ngIf="currentView === 'date'">
            </button>
            
            <!--year label-->
            <span class="ql-date-picker__header-label" *ngIf="currentView !== 'year'"
              (click)="showPicker('year')">{{dateShowModels.year}} 年</span>
            <!--year range label-->
            <span class="ql-date-picker__header-label" *ngIf="currentView === 'year'">
              {{dateShowModels.yearRange[0]}} 年 - {{dateShowModels.yearRange[1]}} 年
            </span>
            
            <span class="ql-date-picker__header-label"
              [class.active]="currentView === 'month'"
              (click)="showPicker('month')"
              *ngIf="currentView === 'date'">{{dateShowModels.month + 1}} 月</span>
            <button class="ql-picker-panel__icon-btn ql-date-picker__next-btn ql-icon-d-arrow-right"
              type="button" (click)="nextYear(1)">
            </button>
            <button class="ql-picker-panel__icon-btn ql-date-picker__next-btn ql-icon-arrow-right"
              type="button" (click)="nextMonth(1)"
              *ngIf="currentView === 'date'">
            </button>
          </div>

          <div class="ql-picker-panel__content">
            <ql-date-table *ngIf="currentView === 'date' && !hiddenDay"
              (modelChange)="datePickChangeHandle($event)"
              [model]="model">
            </ql-date-table>
            <ql-year-table *ngIf="currentView === 'year'"
              [model]="model"
              (modelChange)="yearPickChangeHandle($event)"
              [disabled-date]="disabledDate">
            </ql-year-table>
            <ql-month-table *ngIf="currentView === 'month'"
              [model]="model"
              (modelChange)="monthPickChangeHandle($event)"
              [disabled-date]="disabledDate">
            </ql-month-table>
          </div>
        </div>
      </div>

      <!--<div class="ql-picker-panel__footer" *ngIf="footerVisible && currentView === 'date'">-->
        <!--<a href="JavaScript:" class="ql-picker-panel__link-btn" (click)="changeToNow()">556</a>-->
        <!--<button class="ql-picker-panel__btn" type="button"-->
          <!--(click)="confirm()">667</button>-->
      <!--</div>-->
    </div>
  `
})
export class QlDatePickerPanel implements OnInit, OnChanges {
  
  @Input() show: boolean = false
  @Input() width: number
  @Input() model: number
  @Input('hidden-day') hiddenDay: boolean = false
  @Input('panel-absolute') panelAbsolute: boolean = true
  @Input('panel-index') panelIndex: number = 200
  @Output() modelChange: EventEmitter<number> = new EventEmitter<number>()
  
  shortcuts: boolean = false
  showTime: boolean = false
  currentView: string = 'date'
  dateShowModels: DateModelItem
  
  constructor(
    @Optional() public root: QlDataPicker,
  ) {
  }
  
  showPicker(pickPath: string): void {
    this.currentView = pickPath
  }
  
  updateDate(): void {
    const date: Date = new Date(this.model)
    const startYear: number = ~~(date.getFullYear() / 10) * 10
    this.dateShowModels = {
      month: date.getMonth(),
      year: date.getFullYear(),
      yearRange: [startYear, startYear + 10],
    }
  }
  
  datePickChangeHandle(time: number): void {
    this.model = time
    this.modelChange.emit(time)
    this.updateDate()
  }
  
  monthPickChangeHandle(time: number): void {
    this.model = time
    // hidden day, only show month
    if (this.hiddenDay) {
      this.modelChange.emit(time)
    } else {
      this.currentView = 'date'
    }
    this.updateDate()
  }
  
  yearPickChangeHandle(time: number): void {
    this.model = time
    this.currentView = 'month'
    this.updateDate()
  }
  
  nextYear(step: number): void {
    // year table component opened, edit year range
    if (this.currentView === 'year') {
      step = step * 10
    }
    const date = new Date(this.model)
    date.setFullYear(this.dateShowModels.year + step)
    this.model = date.getTime()
    this.updateDate()
  }
  
  nextMonth(step: number): void {
    const date = new Date(this.model)
    date.setMonth(this.dateShowModels.month + step)
    this.model = date.getTime()
    this.updateDate()
  }
  
  ngOnInit(): void {
    // hidden day
    this.currentView = this.hiddenDay ? 'month' : 'date'
    this.model = this.model || Date.now()
    this.updateDate()
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    // first change
    if (changes.model.isFirstChange()) return
  
    this.model = changes.model.currentValue
    this.model = this.model || Date.now()
    this.updateDate()
  }
  
}

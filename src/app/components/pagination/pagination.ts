import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core'
import {QlPaginationProps} from './pagination.props'

@Component({
    selector: 'ql-pagination',
    template: `
        <div class="ql-pagination"
             [class.ql-pagination--small]="small">
            <span class="ql-pagination__total" *ngIf="showTotal">共 {{total}} 条</span>
            <div class="ql-pagination__pages">
                <ql-pagination-btn dir="left" (next)="nextHandle($event)"
                                   *ngIf="showPrev"
                                   [disabled]="model <= 1">
                </ql-pagination-btn>
                <ql-pagination-pager [current]="model" [count]="pageCount"
                                     *ngIf="showPager"
                                     (next)="nextHandle($event)">
                </ql-pagination-pager>
                <ql-pagination-btn dir="right" (next)="nextHandle($event)"
                                   *ngIf="showNext"
                                   [disabled]="model === pageCount">
                </ql-pagination-btn>

            </div>
            <div class="ql-pagination__option" *ngIf="showJumper || showSize">
                <ql-pagination-jump *ngIf="showJumper"
                                    [model]="model" [max]="pageCount"
                                    (next)="nextHandle($event)">
                </ql-pagination-jump>

                <ql-pagination-size *ngIf="showSize"
                                    [model]="pageSize" [sizes]="pageSizes"
                                    (modelChange)="updatePageSize($event)">
                </ql-pagination-size>
            </div>
        </div>
    `,
})
export class QlPagination extends QlPaginationProps implements OnInit, OnChanges {

    showPager: boolean = true;
    showPrev: boolean = true;
    showNext: boolean = true;
    showTotal: boolean = true;
    showSize: boolean = true;
    showJumper: boolean = true;

    static showLayout(QlName: string, layout: string[]): boolean {
        const member: string = layout.find(name => name === QlName)
        return !!member
    }

    constructor() {
        super()
    }

    nextHandle(step: number): void {
        const nextPage: number = this.model + step
        this.model = nextPage < 1 ? 1 : nextPage > this.total ? this.total : nextPage
        this.modelChange.emit(this.model)
    }

    updatePageSize(nextPageSize: number): void {
        this.pageCount = Math.ceil(this.total / nextPageSize)
        this.model = 1
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!changes) return
        if (changes.total && changes.total.isFirstChange()) return
        this.updateLayout()
    }

    ngOnInit(): void {
        if (!this.pageCount && this.total === undefined) {
            return console.warn('ql-pagination required [total]')
        }
        this.updateLayout()
    }

    private updateLayout(): void {
        if (this.total === undefined || this.total === null) {
            this.total = Math.round(this.pageCount * this.pageSize)
        }
        this.pageCount = Math.ceil(this.total / this.pageSize) || 1
        this.showPager = QlPagination.showLayout('pager', this.layout)
        this.showPrev = QlPagination.showLayout('prev', this.layout)
        this.showNext = QlPagination.showLayout('next', this.layout)
        this.showTotal = QlPagination.showLayout('total', this.layout)
        this.showSize = QlPagination.showLayout('size', this.layout)
        this.showJumper = QlPagination.showLayout('jumper', this.layout)
    }

}

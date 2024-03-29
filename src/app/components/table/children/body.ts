import {
    SimpleChanges, Component, Input, OnChanges, EventEmitter, Output,
} from '@angular/core'
import {QlTableSlotEvent, TableColumnDataItem} from '../table.interface'
import {QlTableFormat} from '../utils/format'
import {DomSanitizer, SafeHtml} from '@angular/platform-browser'

@Component({
    selector: 'ql-table-body',
    template: `
        <table class="ql-table__body" [ngStyle]="{ width: getBodyWidth() | cssValue }"
               cellspacing="0" cellpadding="0" border="0">
            <tr *ngFor="let tr of model; let k = index" #tableRow
                [hidden]="tr.hidden"
                [class]="makeRowClass(k)"
                [class.hover-row]="tableRow.hover"
                [class.ql-table__row--striped]="stripe && k % 2 !== 1"
                (mouseenter)="tableRow.hover = true" (mouseleave)="tableRow.hover = false">
                <ng-container *ngFor="let td of tr; let i = index;">
                    <td *ngIf="!td.hidden" #tdRef
                        [ngStyle]="{ width: td.width | cssValue }"
                        [class]="'ql-table_1_column_' + (i + 1)"
                        (mouseenter)="cellMouseActionHandle($event, true);tdRef.destroy = destroyRowFunc(k);"
                        (mouseleave)="cellMouseActionHandle($event, false)"
                        (click)="clickHandle($event, tdRef)"
                        (dblclick)="doubleClickHandle($event, tdRef)">
                        <div class="cell" [ngStyle]="{ 'text-align': isAlignRight(td.value) }">
                            <ng-container *ngIf="!isTemplateRef(td.value) && !td._renderHTML">{{ td.value }}
                            </ng-container>
                            <div *ngIf="!isTemplateRef(td.value) && td._renderHTML"
                                 [innerHtml]="renderHtml(td.value)"></div>
                            <ng-container *ngIf="isTemplateRef(td.value)">
                                <ng-template [ngTemplateOutlet]="td.value" [ngTemplateOutletContext]="{
                scope: merge(tdRef, {rowData: getFormatModel(k), index: k})}"></ng-template>
                            </ng-container>
                        </div>
                    </td>
                </ng-container>
            </tr>
        </table>
    `,
})
export class QlTableBody implements OnChanges {

    @Input('model') model: TableColumnDataItem[][]
    @Input() stripe: boolean = false
    @Input() center: boolean = false
    @Input() layout: any
    @Input('row-class-name') rowClassName: (userRow: any, index: number) => string
    @Output('cell-click') cellClick: EventEmitter<QlTableSlotEvent> = new EventEmitter<QlTableSlotEvent>()
    @Output('cell-dblclick') cellDblClick: EventEmitter<QlTableSlotEvent> = new EventEmitter<QlTableSlotEvent>()
    @Output('cell-mouse-enter') cellMouseEnter: EventEmitter<Event> = new EventEmitter<Event>()
    @Output('cell-mouse-leave') cellMouseLeave: EventEmitter<Event> = new EventEmitter<Event>()

    formatModel: any[] = []

    constructor(public tableFormat: QlTableFormat,
                private sanitizer: DomSanitizer) {
    }

    renderHtml(str: string): string | SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(str)
    }

    merge(domHandle: any, next: any): any {
        return Object.assign(domHandle, next)
    }

    isTemplateRef(content: any): boolean {
        return content && typeof content === 'object'
    }

    isAlignRight(value: any): string {
       /* if (typeof value === 'number') {
            return 'right'
        } else {
            if (this.center) {
                return 'center'
            } else {
                return 'unset'
            }
        }*/

        if (this.center) {
            return 'center'
        } else {
            return 'unset'
        }
    }

    getBodyWidth(): number {
        const width: number = QlTableFormat.getCSSValue(this.layout.bodyWidth)
        if (!width) return this.layout.bodyWidth
        return width - this.layout.scrollBarWidth
    }

    getFormatModel(index: number): any {
        return this.formatModel[index]
    }

    destroyRowFunc(index: number): Function {
        return (): void => {
            this.model.splice(index, 1)
            this.formatModel = this.tableFormat.formatRowData(this.model)
        }
    }

    makeRowClass(index: number): string {
        const userRows = this.formatModel[index]
        const userClass: string = this.rowClassName ? this.rowClassName(userRows, index) : ''
        return 'ql-table__row ' + userClass
    }

    doubleClickHandle(event: Event, Ref: any): void {
        Ref.event = event
        this.cellDblClick.emit(Ref)
    }

    clickHandle(event: Event, Ref: any): void {
        Ref.event = event
        this.cellClick.emit(Ref)
    }

    cellMouseActionHandle(event: Event, isEnter: boolean): void {
        if (isEnter) return this.cellMouseEnter.emit(event)
        this.cellMouseLeave.emit(event)
    }

    ngOnChanges(changes: SimpleChanges): void {
        // not include model
        if (!changes || !changes.model) return
        this.formatModel = this.tableFormat.formatRowData(this.model)
    }

}

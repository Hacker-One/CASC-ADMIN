import {
    Component, DoCheck, ElementRef, KeyValueDiffer, KeyValueDiffers, OnChanges, OnDestroy, OnInit, Renderer2,
    SimpleChanges,
    ViewChild,
} from '@angular/core'
import {DocumentWrapper, WindowWrapper} from '../shared/services'
import {ModelWithIndexDataItem, OrderMap, TableColumn, TableColumnDataItem, WidthItem} from './table.interface'
import {QlTableProps} from './table.props'
import {QlTableFormat} from './utils/format'

@Component({
    selector: 'ql-table',
    styles: [`
        .ql-table__header-scroll::-webkit-scrollbar {
            visibility: hidden;
        }
    `],
    template: `
        <div class="ql-table"
             [ngStyle]="{ height: height | cssValue }"
             [class.ql-table--enable-row-transition]="true"
             [class.ql-table--striped]="stripe"
             [class.ql-table--border]="border"
             [class.ql-table--hidden]="false">
            <div class="hidden-columns">
                <ng-content></ng-content>
            </div>
            <div class="ql-table__header-wrapper ql-table__header-scroll" [hidden]="!showHeader"
                 [ngStyle]="{'overflow-x': (scrollX ? 'auto' : 'hidden')}" #headerRef>
                <ql-table-header [model]="columnsWithLevel" [layout]="layout" [columns-width]="columnsWidth"
                                 [border]="border" [height]="height" [center]="center === 'header' || center === 'all'">
                </ql-table-header>
            </div>
            <div class="ql-table__body-wrapper" [ngStyle]="{ height: layout.bodyHeight | cssValue }"
                 (scroll)="bodyScroll($event)">
                <ql-table-body [model]="columnsData" [stripe]="stripe"
                               [layout]="layout" [row-class-name]="rowClassName"
                               [center]="center === 'all'"
                               [ngStyle]="{ width: layout.bodyWidth + 'px' }">
                </ql-table-body>
                <div [ngStyle]="{width: layout.bodyWidth + 'px'}" class="ql-table__empty-block"
                     *ngIf="!model || model.length === 0">
                    <span class="ql-table__empty-text">{{placeholder}}</span>
                </div>
            </div>
        </div>
    `,
})
export class QlTable extends QlTableProps implements OnInit, OnDestroy, OnChanges, DoCheck {

    @ViewChild('headerRef') headerRef: ElementRef

    columnsData: TableColumnDataItem[][]
    columnsWithLevel: any[] = []
    layout: any = {
        headerHeight: 40,
        bodyHeight: 'auto',
        bodyWidth: 'auto',
        scrollBarWidth: 0,
    }
    columnsWidth: WidthItem[] = []
    private columns: TableColumn[] = []
    private globalListenFunc: Function
    private orderMap: OrderMap
    private modelStorge: any
    private differ: KeyValueDiffer<any, any>
    // user set width
    private widthCount: number = 0

    static GEN_TEMPLATE_KEY(): string {
        return Math.random().toString(16).substr(2, 8)
    }

    constructor(private el: ElementRef,
                private renderer: Renderer2,
                private document: DocumentWrapper,
                private window: WindowWrapper,
                private differs: KeyValueDiffers,) {
        super()
        this.differ = this.differs.find([]).create()
    }

    bodyScroll(event: Event): void {
        if (!this.scrollX) return
        const el: Element = (<Element>event.target)
        if (el.scrollLeft === undefined) return
        this.headerRef.nativeElement.scrollLeft = el.scrollLeft
    }

    updateColumns(column: TableColumn): void {
        const next: TableColumn = Object.assign(column, {index: this.columns.length})
        this.columns.push(next)
    }

    updateBodyHeight(): void {
        const height: number = QlTableFormat.getCSSValue(this.height)
        const header: HTMLElement = this.headerRef.nativeElement
        if (!header || !height) return

        const timer: any = setTimeout(() => {
            const headerHeight: number = header.offsetHeight
            if (headerHeight) {
                this.layout.headerHeight = headerHeight
                this.layout.bodyHeight = height - this.layout.headerHeight
                this.layout.scrollBarWidth = this.window.innerWidth - this.document.body.clientWidth
            }
            clearTimeout(timer)
        }, 0)
    }

    updateLayout(): void {
        const elTable: HTMLElement = this.el.nativeElement.children[0]
        this.layout.bodyWidth = this.widthCount || elTable.clientWidth
        if (this.widthCount) {
            this.renderer.setStyle(elTable, 'width', `${this.widthCount}px`)
        }
    }

    updateColumnsWidth(widthItem: WidthItem): void {
        this.columnsWidth.push(widthItem)
        console.log(this.columnsWidth);
    }

    computeColumnsWidth(columnsWidth: WidthItem[]): WidthItem[] {
        let auto: number = 0, count: number = 0
        columnsWidth.forEach((item: WidthItem) => {
            if (item.auto) return auto++
            if (Number.isNaN(item.width)) {         // cannot parse values
                item.auto = true
                return auto++
            }
            count += item.width
        })
        // if user has set the width, use fixed width
        // update layout
        if (!auto) {
            this.widthCount = count
            this.updateLayout()
        }

        const average: number = (this.layout.bodyWidth - count) / auto
        return columnsWidth.map((item: WidthItem) =>
            item.auto ? Object.assign(item, {width: average}) : item)
    }

    transformColumnsData(): void {
        // order by deep
        this.columns = this.columns.map((column: TableColumn) => {
            if (!Array.isArray(this.columnsWithLevel[column.level])) {
                this.columnsWithLevel[column.level] = []
            }
            this.columnsWithLevel[column.level].push(column)
            if (column.deep === 0) return column
            return null
        }).filter(r => r)
        this.columnsWithLevel.reverse()
        this.columnsWidth = this.computeColumnsWidth(this.columnsWidth)

        // distribution template
        this.columns = this.columns.map((column: TableColumn) => {
            if (!column.slot) return column
            const TEMPLATE_KEY: string = QlTable.GEN_TEMPLATE_KEY()
            this.modelStorge = this.model.map((v: any) => Object.assign(v, {[TEMPLATE_KEY]: column.slot}))
            return Object.assign(column, {modelKey: TEMPLATE_KEY})
        })

        this.orderMap = this.columns.reduce((pre, next: TableColumn) =>
            Object.assign(pre, {[next.modelKey]: next}), {})
        this.transformModelData()
    }

    transformModelData(): void {
        const orderMap: OrderMap = this.orderMap
        // add index, width, value
        if (!this.modelStorge) {
            this.modelStorge = this.model
        }
        const modelWithIndex: ModelWithIndexDataItem[][] = this.modelStorge.map((row: any) =>
            Object.keys({...row, ...orderMap}).map((v: string | number) => {
                const item: any = orderMap[v] || {}
                return {
                    hidden: !item.width,
                    value: row[v], [v]: row[v],
                    index: ~~item.index,
                    width: item.width,
                    _renderHTML: item._renderHTML
                }
            })
                .filter((r: any) => !!r)
        )
        // column sort
        this.columnsData = modelWithIndex.map((row: TableColumnDataItem[]) =>
            row.sort((pre, next) => pre.index - next.index))

        this.updateBodyHeight()
    }

    ngOnInit(): void {
        this.updateLayout()
        this.updateBodyHeight()
        this.globalListenFunc = this.renderer.listen('window', 'resize', () => {
            this.updateLayout()
            this.columnsWidth = this.computeColumnsWidth(this.columnsWidth)
            console.log(this.columnsWidth)
        })
    }

    ngOnChanges(changes: SimpleChanges): void {
        // not include model
        if (!changes || !changes.model) return
        // first change
        if (changes.model.isFirstChange()) return
        this.model = changes.model.currentValue
        this.transformModelData()
    }

    ngDoCheck(): void {
        const change = this.differ.diff(this.model)
        if (!change || !this.orderMap) return

        // distribution template
        this.modelStorge = this.model
        const nextColumns: TableColumn[] = this.columns.map((column: TableColumn) => {
            if (!column.slot) return column
            const TEMPLATE_KEY: string = QlTable.GEN_TEMPLATE_KEY()

            this.modelStorge = this.model.map((v: any) => Object.assign(v, {[TEMPLATE_KEY]: column.slot}))
            return Object.assign(column, {modelKey: TEMPLATE_KEY})
        })

        this.orderMap = nextColumns.reduce((pre, next: TableColumn) =>
            Object.assign(pre, {[next.modelKey]: next}), {})
        this.transformModelData()
    }

    ngOnDestroy(): void {
        this.globalListenFunc && this.globalListenFunc()
    }

}

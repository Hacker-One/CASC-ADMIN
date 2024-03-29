import {TemplateRef} from '@angular/core'

export interface TableSelectEvent {
    selection: any,
    row?: number,
}

export interface TableColumn {
    modelKey: string,
    label: string,
    width: string | number,
    slotClick?: Function,
    deep: number,
    level: number,
    align: string,
    childCount: number,
    index?: number,
    slot?: TemplateRef<any>,
    _renderHTML?: boolean,
}

export type TableColumnDataItem = {
    value: string | number,
    index: number,
}

export type QlTableSlotEvent = Element & {
    index: number,
    rowData: any,
    destroy: () => void,
    event?: Event,
}


export type OrderMap = {
    [key: string]: any,
}
export type ModelWithIndexDataItem = OrderMap & {
    value: string | number,
    index: number,
}

export type WidthItem = {
    auto: boolean,
    width: number
}



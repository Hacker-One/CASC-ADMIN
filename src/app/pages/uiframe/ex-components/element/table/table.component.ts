import {Component, ViewEncapsulation} from '@angular/core';
import code from './code';

@Component({
    selector: 'ex-table-demo',
    template: ` `,
})
export class ExTableDemoComponent {

    tableData: any[] = [
        {
            time: '本日',
            guestnum1: '35986',
            guestnum2: '<span style="color: red;">30</span>',
            guestnum3: '<span style="color: red;">30</span>',
            guestnum4: '<span style="color: red;">30</span>',
            guestnum5: '<span style="color: red;">30</span>',
            guestnum6: '<span style="color: red;">30</span>',
            guestnum7: '<span style="color: red;">30</span>',
            guestnum8: '<span style="color: red;">30</span>',
        }, {
            time: '昨日',
            guestnum1: '35986',
            guestnum2: '20',
            guestnum3: '20',
            guestnum4: '20',
            guestnum5: '20',
            guestnum6: '20',
            guestnum7: '20',
            guestnum8: '20',
        }, {
            time: '比上日',
            guestnum1: '0',
            guestnum2: '10',
            guestnum3: '10',
            guestnum4: '10',
            guestnum5: '10',
            guestnum6: '10',
            guestnum7: '10',
            guestnum8: '10',
        }, {
            time: '本月',
            guestnum1: '38756',
            guestnum2: '30',
            guestnum3: '30',
            guestnum4: '30',
            guestnum5: '30',
            guestnum6: '30',
            guestnum7: '30',
            guestnum8: '30',
        }, {
            time: '上月',
            guestnum1: '34987',
            guestnum2: '20',
            guestnum3: '20',
            guestnum4: '20',
            guestnum5: '20',
            guestnum6: '20',
            guestnum7: '20',
            guestnum8: '20',
        }, {
            time: '比上月',
            guestnum1: '3769',
            guestnum2: '10',
            guestnum3: '10',
            guestnum4: '10',
            guestnum5: '10',
            guestnum6: '10',
            guestnum7: '10',
            guestnum8: '10',
        }];
    tableDataMore: any[] = [
        {
            time: '本日',
            guestnum1: '35986',
            guestnum2: '30',
            guestnum3: '30',
            guestnum4: '30',
            guestnum5: '30',
            guestnum6: '30',
            guestnum7: '30',
            guestnum8: '30',
        }, {
            time: '昨日',
            guestnum1: '35986',
            guestnum2: '20',
            guestnum3: '20',
            guestnum4: '20',
            guestnum5: '20',
            guestnum6: '20',
            guestnum7: '20',
            guestnum8: '20',
        }, {
            time: '比上日',
            guestnum1: '0',
            guestnum2: '10',
            guestnum3: '10',
            guestnum4: '10',
            guestnum5: '10',
            guestnum6: '10',
            guestnum7: '10',
            guestnum8: '10',
        }, {
            time: '本月',
            guestnum1: '38756',
            guestnum2: '30',
            guestnum3: '30',
            guestnum4: '30',
            guestnum5: '30',
            guestnum6: '30',
            guestnum7: '30',
            guestnum8: '30',
        }, {
            time: '上月',
            guestnum1: '34987',
            guestnum2: '20',
            guestnum3: '20',
            guestnum4: '20',
            guestnum5: '20',
            guestnum6: '20',
            guestnum7: '20',
            guestnum8: '20',
        }, {
            time: '比上月',
            guestnum1: '3769',
            guestnum2: '10',
            guestnum3: '10',
            guestnum4: '10',
            guestnum5: '10',
            guestnum6: '10',
            guestnum7: '10',
            guestnum8: '10',
        }];
    tableWithHTML: any[] = [];

    constructor() {
        // this.tableDataMore = this.tableData.concat(this.tableData)
        this.tableWithHTML = this.tableData.map(item => {
            return Object.assign({}, item, {
                address: `<span style="color: red;">${item.address}</span>`
            })
        })

    }

    rowClassNameFilter(row: any, index: number): string {
        if (index === 1) {
            return 'info-row';
        } else if (index === 3) {
            return 'positive-row';
        }
        return ''
    }

    handle(ref: any): any {
        // console.log(ref.index)
        // console.log(ref.rowData)
        // console.log(ref.innerHTML)
        ref.destroy()
    }

}

@Component({
    selector: 'ex-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExTableComponent {

    code: string[] = code
    exClass: any = ExTableDemoComponent
    apidoc: any = {
        "name": "Table Attributes",
        "attrs": [{
            "name": "model",
            "notes": "显示的数据",
            "type": "Array<any>",
            "enum": null,
            "default": null
        }, {
            "name": "height",
            "notes": "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px",
            "type": "string | number",
            "enum": null,
            "default": null
        }, {
            "name": "scroll-x",
            "notes": "是否打开横向滚动",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "center",
            "notes": "文字是否居中，所有或仅头部居中",
            "type": "string",
            "enum": "all / header",
            "default": null
        }, {
            "name": "placeholder",
            "notes": "无数据时占位符",
            "type": "string",
            "enum": null,
            "default": "暂无数据"
        }, {
            "name": "stripe",
            "notes": "是否为斑马纹 table",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "border",
            "notes": "是否带有纵向边框",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "show-header",
            "notes": "是否显示表头",
            "type": "boolean",
            "enum": null,
            "default": true
        }, {
            "name": "row-class-name",
            "notes": "行的 className 的回调方法",
            "type": "(row: any, index: number) => string",
            "enum": null,
            "default": null
        }, {
            "name": "cell-click",
            "notes": "表格单元格点击事件",
            "type": "EventEmitter<Element & { index: number, rowData: any, destroy: Function, event?: Event }>",
            "enum": null,
            "default": null
        }, {
            "name": "cell-dblclick",
            "notes": "表格单元格双击事件",
            "type": "EventEmitter<Element & { index: number, rowData: any, destroy: Function, event?: Event }>",
            "enum": null,
            "default": null
        }, {
            "name": "cell-mouse-enter",
            "notes": "表格单元格鼠标事件",
            "type": "EventEmitter<Event>",
            "enum": null,
            "default": null
        }, {
            "name": "cell-mouse-leave",
            "notes": "表格单元格鼠标事件",
            "type": "EventEmitter<Event>",
            "enum": null,
            "default": null
        }]
    }

    apidoc2: any = {
        "name": "Table Column Attributes",
        "attrs": [{
            "name": "model-key",
            "notes": "指定当前列显示 <code>[model]</code> 属性中的属性名",
            "type": "string",
            "enum": null,
            "default": null
        }, {
            "name": "slot",
            "notes": "模板标记",
            "type": "ng-template",
            "enum": null,
            "default": null
        }, {
            "name": "label",
            "notes": "当前列的表头显示名称",
            "type": "string",
            "enum": null,
            "default": null
        }, {
            "name": "width",
            "notes": "当前列的宽度",
            "type": "number",
            "enum": null,
            "default": null
        }, {
            "name": "render-html",
            "notes": "当前列渲染 HTML 内容",
            "type": "boolean",
            "enum": null,
            "default": false
        }]
    }

}

import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExPaginationComponent {

    code: string[] = code
    tags: string[] = ['123', '234234', '0011']

    handle(): void {
        this.tags.pop()
    }

    apidoc: any = {
        "name": "Pagination Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "当前页码，双向绑定值，你也可以通过 <code>(modelChange)</code> 单独捕获事件",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "small",
                "notes": "是否使用小型分页样式",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "page-size",
                "notes": "每页显示条目个数",
                "type": "number",
                "enum": null,
                "default": 10
            },
            {
                "name": "total",
                "notes": "总条目数，与 page-count 之间至少填写一个，建议你总是携带 total",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "page-count",
                "notes": "总页数",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "layout",
                "notes": "组件布局，需要的子组件名",
                "type": "Array<string>",
                "enum": ["prev", "pager", "next", "size", "jumper", "total"],
                "default": ["prev", "pager", "next"]
            },
            {
                "name": "page-sizes",
                "notes": "每页显示个数选择器的选项设置，作用于子组件 <code>size</code>",
                "type": "Array<number>",
                "enum": null,
                "default": [10, 20, 30, 40, 50, 100]
            }
        ]
    }

}

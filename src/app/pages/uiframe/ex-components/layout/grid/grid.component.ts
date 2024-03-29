import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExGridComponent {

    code: string[] = code;
    apidoc: any = {
        "name": "Col Attributes",
        "attrs": [
            {
                "name": "span",
                "notes": "栅格占据的列数",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "offset",
                "notes": "栅格左侧的间隔格数",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "push",
                "notes": "栅格向右移动格数",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "pull",
                "notes": "栅格向左移动格数",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "xs",
                "notes": "<code><768px</code> 响应式栅格数或者栅格属性对象",
                "type": "number/object (例如： {span: 4, offset: 4})",
                "enum": null,
                "default": null
            },
            {
                "name": "sm",
                "notes": "<code>≥768px</code> 响应式栅格数或者栅格属性对象",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "md",
                "notes": "<code>≥992px</code> 响应式栅格数或者栅格属性对象",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "lg",
                "notes": "<code>≥1200px</code> 响应式栅格数或者栅格属性对象",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "xl",
                "notes": "<code>≥1920ox</code> 响应式栅格数或者栅格属性对象",
                "type": "number",
                "enum": null,
                "default": null
            }
        ]
    };
}

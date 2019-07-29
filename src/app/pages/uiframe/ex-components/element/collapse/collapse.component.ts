import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExCollapseComponent {

    code: string[] = code;
    apidoc: any = {
        "name": "Collapse Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "初始值，双向绑定。也可以通过 <code>(modelChange)</code> 单独获得值改变的事件",
                "type": "Array<string | number>",
                "enum": null,
                "default": null
            },
            {
                "name": "accordion",
                "notes": "是否手风琴模式",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    };
    apidoc2: any = {
        "name": "Collapse Item Attributes",
        "attrs": [
            {
                "name": "value",
                "notes": "唯一标志符 ",
                "type": "string | number",
                "enum": null,
                "default": null
            },
            {
                "name": "label",
                "notes": "面板标题栏显示文字",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    };
}

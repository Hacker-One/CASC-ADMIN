import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'


@Component({
    selector: 'ex-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExButtonComponent {
    code: string[] = code;
    apidoc: any = {
        "name": "Button Attributes",
        "attrs": [
            {
                "name": "size",
                "notes": "尺寸",
                "type": "string",
                "enum": "arge,small,mini",
                "default": null
            },
            {
                "name": "type",
                "notes": "类型",
                "type": "string",
                "enum": "primary,success,warning,danger,info,text",
                "default": null
            },
            {
                "name": "plain",
                "notes": "是否朴素按钮",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "round",
                "notes": "是否圆形按钮",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "loading",
                "notes": "是否加载中状态",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "elDisabled",
                "notes": "是否禁用状态",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "icon",
                "notes": "图标，已有的图标库中的图标名",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "native-type",
                "notes": "原生 type 属性",
                "type": "string",
                "enum": "button,submit,reset",
                "default": "button"
            }
        ]
    };


}

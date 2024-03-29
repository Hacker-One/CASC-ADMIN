import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-input-number',
    templateUrl: './input-number.component.html',
    styleUrls: ['./input-number.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExInputNumberComponent {

    exClass: any = class {
        val: number = 5

        changeHandle(event: number): void {
            console.log(event)
        }
    }
    code: string[] = code
    apidoc:any={
        "name": "Input-number Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "绑定值",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "min",
                "notes": "设置计数器允许的最小值",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "max",
                "notes": "设置计数器允许的最大值",
                "type": "number",
                "enum": null,
                "default": "MAX_SAFE_INTEGER"
            },
            {
                "name": "step",
                "notes": "计数器步长 (每次变化的值)",
                "type": "number",
                "enum": null,
                "default": 1
            },
            {
                "name": "size",
                "notes": "计数器尺寸",
                "type": "string",
                "enum": "large, small",
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "是否禁用计数器",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "controls",
                "notes": "是否使用控制按钮",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "debounce",
                "notes": "输入时的去抖延迟，毫秒",
                "type": "number",
                "enum": null,
                "default": 300
            }
        ]
    }


}

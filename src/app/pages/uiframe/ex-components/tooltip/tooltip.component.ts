import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExTooltipComponent {

    code: string[] = code
    apidoc: any = {
        "name": "Tooltip Attributes",
        "attrs": [
            {
                "name": "effect",
                "notes": "默认提供的主题",
                "type": "string",
                "enum": "dark/light",
                "default": "dark"
            },
            {
                "name": "tip",
                "notes": "显示的内容",
                "type": "ng-template",
                "enum": null,
                "default": null
            },
            {
                "name": "push",
                "notes": "栅格向右移动格数",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "placement",
                "notes": "Tooltip 的出现位置",
                "type": "string",
                "enum": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
                "default": "bottom"
            },
            {
                "name": "elDisabled",
                "notes": "Tooltip 是否可用",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "visible-arrow",
                "notes": "是否显示 Tooltip 箭头",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "popper-class",
                "notes": "为 Tooltip 的 popper 添加类名",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    }

}

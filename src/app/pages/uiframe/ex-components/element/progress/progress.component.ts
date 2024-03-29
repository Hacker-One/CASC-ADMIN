import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExProgressComponent {

    code: string[] = code;
    apidoc: any = {
        "name": "Progress Attributes",
        "attrs": [
            {
                "name": "percentage",
                "notes": "百分比（必填",
                "type": "number",
                "enum": "0-100",
                "default": 0
            },
            {
                "name": "type",
                "notes": "进度条类型",
                "type": "string",
                "enum": "line/circle",
                "default": "line"
            },
            {
                "name": "stroke-width",
                "notes": "进度条的宽度，单位 px",
                "type": "number",
                "enum": null,
                "default": 6
            },
            {
                "name": "text-inside",
                "notes": "进度条显示文字内置在进度条内（只在 type=line 时可用）",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "status",
                "notes": "进度条当前状态",
                "type": "string",
                "enum": "success/exception",
                "default": null
            },
            {
                "name": "width",
                "notes": "环形进度条画布宽度（只在 type=circle 时可用）",
                "type": "number",
                "enum": null,
                "default": 126
            },
            {
                "name": "show-text",
                "notes": "是否显示进度条文字内容",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "active-color",
                "notes": "自定义进度条激活时的背景颜色 (只在 type=line 时可用)",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    }

}

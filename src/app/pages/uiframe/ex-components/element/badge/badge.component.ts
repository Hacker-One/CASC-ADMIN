import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExBadgeComponent {
    code: string[] = code
    tags: string[] = ['123', '234234', '0011']
    apidoc: any = {
        "name": "Badge Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "显示值",
                "type": "string | number",
                "enum": null,
                "default": null
            },
            {
                "name": "max",
                "notes": "最大值，超过最大值会显示 '{max}+'，要求 model 是 number 类型",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "is-dot",
                "notes": "小圆点",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "hidden",
                "notes": "隐藏 badge",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    }

    handle(): void {
        this.tags.pop()
    }

}

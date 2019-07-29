import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExTagComponent {

    code: string[] = code
    tags: string[] = ['123', '234234', '0011']

    handle(): void {
        this.tags.pop()
    }

    apidoc: any = {
        "name": "Tag Attributes",
        "attrs": [{
            "name": "type",
            "notes": "主题",
            "type": "string",
            "enum": "primary/gray/success/warning/danger",
            "default": null
        }, {
            "name": "closable",
            "notes": "是否可关闭",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "hit",
            "notes": "是否有边框描边",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "color",
            "notes": "背景色",
            "type": "string",
            "enum": null,
            "default": null
        }, {
            "name": "close",
            "notes": "关闭按钮点击事件",
            "type": "EventEmitter",
            "enum": null,
            "default": null
        }]
    }

}

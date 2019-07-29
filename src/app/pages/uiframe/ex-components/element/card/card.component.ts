import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExCardComponent {

    code: string[] = code;
    exClass: any = class {
        currentDate(): Date {
            return new Date()
        }
    };
    apidoc: any = {
        "name": "Card Attributes",
        "attrs": [
            {
                "name": "header",
                "notes": "设置 header",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "#header",
                "notes": "通过模板设置 #header，设置此项将忽略属性 [header]",
                "type": "ng-template",
                "enum": null,
                "default": null
            },
            {
                "name": "body-style",
                "notes": "设置 body 的样式，会将字符串转换为 SafeStyle，直接传入字符串即可，如: body-style=\"padding: 20px\"",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    };


}

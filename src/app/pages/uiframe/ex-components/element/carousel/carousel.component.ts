import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExCarouselComponent {

    code: string[] = code;
    exClass: any = class {};
    apidoc:any={
        "name": "Carousel Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "初始值，双向绑定。也可以通过 <code>(modelChange)</code> 单独获得值改变的事件",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "height",
                "notes": "走马灯的高度",
                "type": "string",
                "enum": null,
                "default": "150px"
            },
            {
                "name": "trigger",
                "notes": "左右箭头的触发方式",
                "type": "string",
                "enum": "click / hover",
                "default": "click"
            },
            {
                "name": "indicatorTrigger",
                "notes": "指示器的触发方式",
                "type": "string",
                "enum": "click / hover",
                "default": "click"
            },
            {
                "name": "autoplay",
                "notes": "是否自动切换",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "interval",
                "notes": "自动切换的时间间隔，单位为毫秒",
                "type": "number",
                "enum": null,
                "default": 3000
            },
            {
                "name": "indicator-position",
                "notes": "指示器的位置",
                "type": "string",
                "enum": "outside / none",
                "default": null
            },
            {
                "name": "arrow",
                "notes": "切换箭头的显示时机",
                "type": "string",
                "enum": "always / hover / never",
                "default": "hover"
            }
        ]
    };
    apidoc2:any={
        "name": "Carousel Item Attributes",
        "attrs": [
            {
                "name": "label",
                "notes": "该张幻灯片对应的文本描述 (将显示在指示器上)",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    };

}
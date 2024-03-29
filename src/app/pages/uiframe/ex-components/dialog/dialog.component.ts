import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-dialog',
    templateUrl: './dialog.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExDialogComponent {

    code: string[] = code;
    exClass: any = class {
        handle(done: Function): void {
            alert('一段同步或异步的任务');
            done()
        }
    };
    apidoc: any = {
        "name": "Dialog Attributes",
        "attrs": [
            {
                "name": "visible",
                "notes": "是否显示 Dialog，双向绑定的值，亦可以通过 <code>(visibleChange)</code> 单独获取事件推送",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "title",
                "notes": "Dialog 的标题，也可通过具名 <code>ng-template</code> 传入",
                "type": "string | ng-template",
                "enum": null,
                "default": null
            },
            {
                "name": "footer",
                "notes": "Dialog 按钮操作区的尾部内容",
                "type": "ng-template",
                "enum": null,
                "default": null
            },
            {
                "name": "width",
                "notes": "Dialog 的宽度",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "top",
                "notes": "Dialog CSS 中的 top 值",
                "type": "string",
                "enum": null,
                "default": "15%"
            },
            {
                "name": "lock-scroll",
                "notes": "是否在 Dialog 出现时将 body 滚动锁定",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "center",
                "notes": "居中显示(不包括内容)",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "custom-class",
                "notes": "Dialog 的自定义类名",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "close-on-click-modal",
                "notes": "是否可以通过点击 modal 关闭 Dialog",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "close-on-press-escape",
                "notes": "是否可以通过按下 ESC 关闭 Dialog",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "show-close",
                "notes": "是否显示关闭按钮",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "before-close",
                "notes": "关闭前的回调，会暂停 Dialog 的关闭，参数用于关闭 Dialog",
                "type": "function",
                "enum": null,
                "default": null
            }
        ]
    };
}

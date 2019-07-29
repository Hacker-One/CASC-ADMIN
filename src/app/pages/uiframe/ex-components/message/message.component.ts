import {Component, forwardRef, Inject, ViewEncapsulation} from '@angular/core'
import {QlMessageService} from '../../../../qloud-angular.module'
import code from './code'

@Component({
    selector: 'ex-message-demo',
    template: ` `,
})
export class ExMessageDemoComponent {

    constructor(@Inject(forwardRef(() => QlMessageService)) private message: any,) {
    }

    center(): void {
        this.message.setOptions({center: true, duration: 10000});
        this.message.info('一段居中显示的文字。')
    }

    handle(type: string = 'show'): void {
        this.message[type]('这是一条消息提示' + type)
    }

    handle2(type: string = 'show'): void {
        this.message.setOptions({showClose: true})
        this.message[type]('这是一条可关闭的消息提示')
    }
}

@Component({
    selector: 'ex-message',
    templateUrl: './message.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExMessageComponent {

    code: string[] = code;
    exClass: any = ExMessageDemoComponent;
    apidoc: any = {
    "name": "Message Attributes",
    "attrs": [{
        "name": "methods",
        "notes": "messageService 的方法，具体使用请参照上文",
        "type": "function",
        "enum": "success/warning/info/error/show",
        "default": null
    }, {
        "name": "showClose",
        "notes": "是否显示关闭按钮，setOptions(config: {}) 的参数",
        "type": "boolean",
        "enum": null,
        "default": false
    }, {
        "name": "duration",
        "notes": "延迟关闭时间，setOptions(config: {}) 的参数",
        "type": "number",
        "enum": null,
        "default": 3000
    }, {
        "name": "iconClass",
        "notes": "自定义图标样式，setOptions(config: {}) 的参数",
        "type": "string",
        "enum": null,
        "default": null
    }, {
        "name": "customClass",
        "notes": "自定义提示框样式，setOptions(config: {}) 的参数",
        "type": "string",
        "enum": null,
        "default": null
    }, {
        "name": "zIndex",
        "notes": "提示框 z-index，setOptions(config: {}) 的参数",
        "type": "number",
        "enum": null,
        "default": 1000
    }, {
        "name": "center",
        "notes": "文字居中显示",
        "type": "boolean",
        "enum": null,
        "default": false
    }, {
        "name": "onClose",
        "notes": "关闭时的回调函数，setOptions(config: {}) 的参数",
        "type": "function",
        "enum": null,
        "default": null
    }]
}

}

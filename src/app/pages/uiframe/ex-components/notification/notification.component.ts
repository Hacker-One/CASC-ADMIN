import {Component, forwardRef, Inject, ViewEncapsulation} from '@angular/core'
import {QlNotificationService} from '../../../../qloud-angular.module'
import code from './code'


@Component({
    selector: 'ex-notification-demo',
    template: ` `,
})

export class ExNotificationDemoComponent {

    constructor(@Inject(forwardRef(() => QlNotificationService)) private notify: any,) {
    }

    handle(): void {
        this.notify.show('这是一条消息提示')
    }

    handle2(): void {
        this.notify.show('这是一条消息提示', '消息标题')
    }

    handle3(type: string): void {
        this.notify[type]('这是一条消息提示: ' + type, type)
    }

}

@Component({
    selector: 'ex-notification',
    templateUrl: './notification.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExNotificationComponent {

    code: string[] = code
    exClass: any = ExNotificationDemoComponent
    apidoc: any = {
        "name": "Notification Attributes",
        "attrs": [{
            "name": "methods",
            "notes": "notificationService 的方法，具体使用请参照上文",
            "type": "function",
            "enum": "success/warning/info/error/show",
            "default": null
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
            "name": "offset",
            "notes": "组件的偏移量",
            "type": "number",
            "enum": null,
            "default": 15
        }, {
            "name": "zIndex",
            "notes": "提示框 z-index，setOptions(config: {}) 的参数",
            "type": "number",
            "enum": null,
            "default": 1000
        }, {
            "name": "onClose",
            "notes": "关闭时的回调函数，setOptions(config: {}) 的参数",
            "type": "function",
            "enum": null,
            "default": null
        }]
    }

}

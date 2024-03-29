import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'


@Component({
    selector: 'ex-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExInputComponent {

    code: string[] = code
    apidoc:any={
        "name": "Input Attributes",
        "attrs": [
            {
                "name": "type",
                "notes": "类型",
                "type": "string",
                "enum": "text/textarea",
                "default": "text"
            },
            {
                "name": "model",
                "notes": "绑定值",
                "type": "string, number",
                "enum": null,
                "default": null
            },
            {
                "name": "maxlength",
                "notes": "最大输入长度",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "minlength",
                "notes": "最小输入长度",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "placeholder",
                "notes": "输入框占位文本",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "native-type",
                "notes": "输入框原生属性，如 'password'",
                "type": "string",
                "enum": null,
                "default": "text"
            },
            {
                "name": "elDisabled",
                "notes": "禁用",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "size",
                "notes": "输入框尺寸，只在 <code>type=text</code> 时有效",
                "type": "string",
                "enum": "large, small, mini",
                "default": null
            },
            {
                "name": "icon",
                "notes": "输入框尾部图标 参考 Icon",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-class",
                "notes": "输入框尾部图标的额外样式，这些 CSS 类名会被追加到图标上",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-mouseenter",
                "notes": "输入框尾部图标 <code>mouseenter</code> 事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-mouseleave",
                "notes": "输入框尾部图标 <code>mouseleave</code> 事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-mousedown",
                "notes": "输入框尾部图标 <code>mousedown</code> 事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-mouseup",
                "notes": "输入框尾部图标 <code>mouseup</code> 事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "rows",
                "notes": "输入框行数，只对 <code>type=textarea</code> 有效 ",
                "type": "number",
                "enum": null,
                "default": 2
            },
            {
                "name": "autosize",
                "notes": "自适应内容高度，只对 <code>type=textarea</code> 有效",
                "type": "{ minRows: number, maxRows: number } ",
                "enum": null,
                "default": null
            },
            {
                "name": "auto-complete",
                "notes": "原生属性，自动补全，只在 <code>type=text</code> 时有效",
                "type": "string",
                "enum": "on, off",
                "default": "off"
            },
            {
                "name": "readonly",
                "notes": "原生属性，是否只读",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "resize",
                "notes": "控制是否能被用户缩放，只对 <code>type=textarea</code> 有效",
                "type": "string",
                "enum": "none, both, horizontal, vertical",
                "default": null
            },
            {
                "name": "autofocus",
                "notes": "原生属性，自动获取焦点",
                "type": "boolean",
                "enum": "true, false",
                "default": false
            },
            {
                "name": "icon-click",
                "notes": "点击 Input 内的图标的钩子函数",
                "type": "expression",
                "enum": null,
                "default": null
            },
            {
                "name": "#prepend",
                "notes": "前置自定义元素",
                "type": "ng-template",
                "enum": null,
                "default": null
            },
            {
                "name": "#append",
                "notes": "后置自定义元素",
                "type": "ng-template",
                "enum": null,
                "default": null
            }
        ]
    }

}

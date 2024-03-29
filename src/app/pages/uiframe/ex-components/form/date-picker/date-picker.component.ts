import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-date-picker',
    templateUrl: './date-picker.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExDatePickerComponent {

    code: string[] = code
    exClass: any = class {
        handle(time: string): void {
            // [time] is string
            // date style follow format props
            console.log(time)
        }

        clearClickHandle(e: Event): void {
            console.log('clear', e)
        }
    }

    apidoc:any={
        "name": "DatePicker Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "初始时间，无初始时间自动定位至当前时间",
                "type": "string | Date | number",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "禁用组件",
                "type": "boolean",
                "enum": null,
                "default": null
            },
            {
                "name": "clearable",
                "notes": "显示清除按钮",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "change-on-blur",
                "notes": "失焦关闭时立即触发一次更新",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "clear-click",
                "notes": "清除按钮点击事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "icon-click",
                "notes": "右侧图标按钮点击事件",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "size",
                "notes": "输入框尺寸",
                "type": "string",
                "enum": "large, small, mini",
                "default": null
            },
            {
                "name": "align",
                "notes": "对齐方式",
                "type": "string",
                "enum": "left, right",
                "default": "left"
            },
            {
                "name": "placeholder",
                "notes": "占位文字",
                "type": "string",
                "enum": null,
                "default": "选择日期"
            },
            {
                "name": "panel-absolute",
                "notes": "日期选择下拉框使用绝对定位",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "panel-index",
                "notes": "日期选择下拉框的 z-index 值",
                "type": "number",
                "enum": null,
                "default": 200
            },
            {
                "name": "panel-width",
                "notes": "日期选择下拉框的 宽度",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "format",
                "notes": "日期格式化样本",
                "type": "string",
                "enum": "年 <code>yyyy</code>，月 <code>MM</code>，日 <code>dd</code>",
                "default": "'yyyy-MM-dd'"
            },
            {
                "name": "hidden-day",
                "notes": "以月为基本单位，隐藏日期",
                "type": "boolean",
                "enum": null,
                "default": null
            }
        ]
    }

}

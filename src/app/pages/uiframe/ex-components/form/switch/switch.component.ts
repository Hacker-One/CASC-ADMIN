import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSwitchComponent {
  
  code: string[] = code
    apidoc:any={
        "name": "Switch Attributes",
        "attrs": [{
            "name": "elDisabled",
            "notes": "是否禁用",
            "type": "boolean",
            "enum": null,
            "default": false
        },{
            "name": "width",
            "notes": "switch 的宽度（像素",
            "type": "number",
            "enum": null,
            "default": "40"
        },{
            "name": "active-icon-class",
            "notes": " switch 打开时所显示图标的类名，设置此项会忽略 <code>on-text</code>",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "inactive-icon-class",
            "notes": "switch 关闭时所显示图标的类名，设置此项会忽略 <code>off-text</code>",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "active-text",
            "notes": "switch 打开时的文字",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "inactive-text",
            "notes": "switch 关闭时的文字",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "active-color",
            "notes": "switch 打开时的背景色",
            "type": "string",
            "enum": null,
            "default": "#409EFF"
        },{
            "name": "inactive-color",
            "notes": "switch 关闭时的背景色",
            "type": "string",
            "enum": null,
            "default": "#C0CCDA"
        },{
            "name": "name",
            "notes": "switch 对应的 name 属性",
            "type": "string",
            "enum": null,
            "default": null
        }]
    }

}

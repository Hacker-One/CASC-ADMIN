import { Component, OnInit } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-checkbox',
  templateUrl: './checkbox.component.html',
})
export class ExCheckboxComponent {
  
  exClass: any = class {
    
    val: boolean = false
  
    handle(event: any): void {
      console.log('event', event)
    }
  }
  code: string[] = code

    apidoc:any={
        "name": "Checkbox Attributes",
        "attrs": [
            {
                "name": "label",
                "notes": "选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "name",
                "notes": "原生 name 属性",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "按钮禁用",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "checked",
                "notes": "当前是否勾选",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    }

    apidoc2:any={
        "name": "Checkbox-group Attributes",
        "attrs": [
            {
                "name": "size",
                "notes": "Checkbox 按钮组尺寸",
                "type": "string",
                "enum": "large, small",
                "default": null
            },
            {
                "name": "fill",
                "notes": "按钮激活时的填充色和边框颜色",
                "type": "string",
                "enum": null,
                "default": "#20a0ff"
            },
            {
                "name": "text-color",
                "notes": "按钮激活时的文本颜色",
                "type": "string",
                "enum": null,
                "default": "#ffffff"
            },
            {
                "name": "min",
                "notes": "可被勾选的 checkbox 的最小数量",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "max",
                "notes": "可被勾选的 checkbox 的最大数量",
                "type": "number",
                "enum": null,
                "default": null
            }
        ]
    }

}

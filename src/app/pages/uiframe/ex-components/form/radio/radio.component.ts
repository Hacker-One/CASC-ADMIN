import { Component } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-radio',
  templateUrl: './radio.component.html',
})
export class ExRadioComponent {
  
  code: string[] = code
    apidoc:any={
        "name": "Radio Attributes",
        "attrs": [{
            "name": "label",
            "notes": "Radio 的 value",
            "type": "string,number,boolean",
            "enum": null,
            "default": null
        },{
            "name": "elDisabled",
            "notes": "是否禁用",
            "type": "boolean",
            "enum": null,
            "default": false
        },{
            "name": "name",
            "notes": "原生 name 属性",
            "type": "string",
            "enum": null,
            "default": null
        }]
    }

    apidoc2:any={
        "name": "Radio-group Attributes",
        "attrs": [{
            "name": "size",
            "notes": "Radio 按钮组尺寸",
            "type": "string",
            "enum": "large, small",
            "default": null
        },{
            "name": "fill",
            "notes": "按钮激活时的填充色和边框色",
            "type": "string",
            "enum": null,
            "default": "#20a0ff"
        },{
            "name": "text-color",
            "notes": "按钮激活时的文本颜色",
            "type": "string",
            "enum": null,
            "default": "#ffffff"
        }]
    }

    apidoc3:any={
        "name": "Radio-button Attributes",
        "attrs": [{
            "name": "label",
            "notes": "Radio 的 value",
            "type": "string,number",
            "enum": null,
            "default": null
        },{
            "name": "elDisabled",
            "notes": "是否禁用",
            "type": "boolean",
            "enum": null,
            "default": false
        }]
    }

}

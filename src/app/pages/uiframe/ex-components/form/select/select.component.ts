import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-select',
  templateUrl: './select.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExSelectComponent {
  
  exClass: any = class {
    value: any
    foods:any = [{value: '选项1',label: '黄金糕' },
      { value: '选项2', label: '双皮奶' },
      { value: '选项3', label: '蚵仔煎' },
      { value: '选项4', label: '龙须面' },
      { value: '选项5', label: '北京烤鸭' }]
    
    handle(event: any):void {
      this.value = event
      console.log(event)
    }
  
    clear(): void {
      this.value = null
    }
  }
  code: string[] = code
    apidoc:any={
        "name": "Select Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "默认选中的 value",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "modelChange",
                "notes": "选中选项时触发的事件，参数为选中的值",
                "type": "EventEmitter",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "禁用所有选择与选项框",
                "type": "boolean",
                "enum": "true, false",
                "default": false
            },
            {
                "name": "clearable",
                "notes": "清除按钮，清除当前选项",
                "type": "boolean",
                "enum": "true, false",
                "default": false
            },
            {
                "name": "name",
                "notes": "原生属性，select input 的 name 属性",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "size",
                "notes": "select input 尺寸",
                "type": "string",
                "enum": "large/small/mini",
                "default": null
            },
            {
                "name": "placeholder",
                "notes": "select input 占位符",
                "type": "string",
                "enum": "请选择",
                "default": null
            },
            {
                "name": "popper-class",
                "notes": "Select 下拉框的类名",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "multiple",
                "notes": "是否开启多选",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    }

    apidoc2:any={
        "name": "Select-option Attributes",
        "attrs": [
            {
                "name": "value",
                "notes": "选项的值，必选属性",
                "type": "string | number",
                "enum": null,
                "default": null
            },
            {
                "name": "label",
                "notes": "选项的标签，必选属性",
                "type": "string | number",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "是否禁用该选项",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    }

}

import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExSliderComponent {
  
  code: string[] = code
  exClass: any = class {
    handle(val: any): void {
      console.log(val)
    }
  }
    apidoc:any={
        "name": "Slider Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "初始值，必须在最小值与最大值之间",
                "type": "number",
                "enum": null,
                "default": null
            },
            {
                "name": "min",
                "notes": "最小值",
                "type": "number",
                "enum": null,
                "default": 0
            },
            {
                "name": "max",
                "notes": "最大值",
                "type": "number",
                "enum": null,
                "default": 100
            },
            {
                "name": "elDisabled",
                "notes": "禁用整个滑块组件",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "show-tooltip",
                "notes": "显示提示框体",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "format-tooltip",
                "notes": "提示框数值格式化，函数，接受参数为每次变化的数值，需要返回一个用于显示的字符串",
                "type": "function",
                "enum": null,
                "default": null
            },
            {
                "name": "vertical",
                "notes": "是否竖向模式",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "vertical-height",
                "notes": "Slider 高度，竖向模式时必填，单位 px",
                "type": "number",
                "enum": null,
                "default": 200
            }
        ]
    }

}

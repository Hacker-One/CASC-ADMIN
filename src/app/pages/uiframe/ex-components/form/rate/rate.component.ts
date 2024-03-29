import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExRateComponent {
  
  code: string[] = code
    apidoc:any={
        "name": "Rate Attributes",
        "attrs": [
            {
                "name": "max",
                "notes": "最大分值",
                "type": "number",
                "enum": null,
                "default": 5
            },
            {
                "name": "elDisabled",
                "notes": "是否为只读",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "low-threshold",
                "notes": "低分和中等分数的界限值，值本身被划分在低分中",
                "type": "number",
                "enum": null,
                "default": 2
            },
            {
                "name": "high-threshold",
                "notes": "高分和中等分数的界限值，值本身被划分在高分中",
                "type": "number",
                "enum": null,
                "default": 4
            },
            {
                "name": "colors",
                "notes": "icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 ",
                "type": "Array<string>",
                "enum": null,
                "default": "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
            },
            {
                "name": "void-color",
                "notes": "未选中 icon 的颜色",
                "type": "string",
                "enum": null,
                "default": "#C6D1DE"
            },
            {
                "name": "disabled-void-color",
                "notes": "只读时未选中 icon 的颜色",
                "type": "string",
                "enum": null,
                "default": "#EFF2F7"
            },
            {
                "name": "icon-classes",
                "notes": "icon 的类名数组，共有 3 个元素，为 3 个分段所对应的类名",
                "type": "Array<string>",
                "enum": null,
                "default": "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
            },{
                "name": "void-icon-class",
                "notes": "未选中 icon 的类名",
                "type": "string",
                "enum": null,
                "default": "el-icon-star-off"
            },{
                "name": "disabled-void-icon-class",
                "notes": "只读时未选中 icon 的类名",
                "type": "string",
                "enum": null,
                "default": "el-icon-star-on"
            },{
                "name": "show-text",
                "notes": "是否显示辅助文字",
                "type": "boolean",
                "enum": null,
                "default": false
            },{
                "name": "text-color",
                "notes": "辅助文字的颜色",
                "type": "string",
                "enum": null,
                "default": "#1F2D3D"
            },{
                "name": "texts",
                "notes": "辅助文字数组",
                "type": "Array<string>",
                "enum": null,
                "default": "['极差', '失望', '一般', '满意', '惊喜']"
            }
        ]
    }

}

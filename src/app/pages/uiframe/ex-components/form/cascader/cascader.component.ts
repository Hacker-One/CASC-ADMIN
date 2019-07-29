import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-cascader-demo',
  template: ` `,
})
export class ExCascaderDemoComponent {
  options: any[] = [{
    value: 'zhinan',
    label: '指南',
    children: [{
      value: 'shejiyuanze',
      label: '设计原则',
      children: [{
        value: 'yizhi',
        label: '一致',
      }, {
        value: 'fankui',
        label: '反馈',
      }, {
        value: 'xiaolv',
        label: '效率',
      }, {
        value: 'kekong',
        label: '可控',
      }],
    }],
  }, {
    value: 'zujian',
    label: '组件',
    children: [{
      value: 'layout',
      label: 'Layout 布局',
    }, {
      value: 'color',
      label: 'Color 色彩',
    }, {
      value: 'typography',
      label: 'Typography 字体',
    }],
  }, {
    value: 'form',
    label: 'Form',
    children: [{
      value: 'radio',
      label: 'Radio 单选框',
    }, {
      value: 'checkbox',
      label: 'Checkbox 多选框',
    }, {
      value: 'input',
      label: 'Input 输入框',
    }, {
      value: 'input-number',
      label: 'InputNumber 计数器',
    }, {
      value: 'select',
      label: 'Select 选择器',
    }, {
      value: 'cascader',
      label: 'Cascader 级联选择器',
    }],
  }]
  disabledOptions: any[] = [{
    value: 'qlDisabled',
    label: 'qlDisabled',
    qlDisabled: true,
  }, {
    value: 'normal',
    label: 'normal',
  }]
  
  changeHandle(event: { path: string[], value: string }): void {
    console.log(event)
  }
}

@Component({
  selector: 'ex-cascader',
  templateUrl: './cascader.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class ExCascaderComponent {
  
  code: string[] = code
  exClass: any = ExCascaderDemoComponent

    apidoc:any={
        "name": "Collapse Attributes",
        "attrs": [
            {
                "name": "options",
                "notes": "数据源",
                "type": "Array<{ label: string, value: string, disabled?: boolean }>",
                "enum": null,
                "default": null
            },
            {
                "name": "model",
                "notes": "默认绑定值，数组，每一项是数据中每一层的 value",
                "type": "Array<string>",
                "enum": null,
                "default": null
            },
            {
                "name": "placeholder",
                "notes": "输入框占位文本",
                "type": "string",
                "enum": null,
                "default": "请选择"
            },
            {
                "name": "elDisabled",
                "notes": "是否禁用，在数据源 options 中设置",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "clearable",
                "notes": "是否支持清空选项",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "all-levels",
                "notes": "输入框中是否显示选中值的完整路径",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "change-on-select",
                "notes": "选择任意一级的选项立即得到反馈",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "size",
                "notes": "尺寸",
                "type": "string",
                "enum": "large / small / mini",
                "default": null
            },
            {
                "name": "close",
                "notes": "主动关闭 cascader，非属性，实例方法",
                "type": "() => void",
                "enum": null,
                "default": null
            }
        ]
    }

}

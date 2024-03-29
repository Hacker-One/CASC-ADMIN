import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExDropdownComponent {

    exClass: new () => {} = class {
        data: any[] = [{
            value: 'shaanxi',
            label: '陕西省',
        }, {
            value: 'hubei',
            label: '湖北省',
        }, {
            value: 'jiangsu',
            label: '江苏省',
        }];
        data2: any[] = [{
            value: 'shaanxi',
            label: '陕西省',
        }, {
            value: 'hubei',
            label: '湖北省',
            qlDisabled: true,
        }, {
            value: 'jiangsu',
            label: '江苏省',
        }];
        data3: any[] = [{
            value: 'shaanxi',
            label: '陕西省',
        }, {
            value: 'hubei',
            label: '湖北省',
            divided: true,
        }, {
            value: 'jiangsu',
            label: '江苏省',
        }];

        handle(event: any): void {
            console.log(event)
        }
    };
    code: string[] = code;
    apidoc: any = {
        "name": "Dropdown Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "数据源",
                "type": "Array<{ label: string, value: string, disabled?: boolean, divided?: boolean }>",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "禁用，在数据源 <code>model</code> 中设置",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "divided",
                "notes": "显示分割线，在数据源 <code>model</code> 中设置",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "split-button",
                "notes": "下拉触发元素呈现为按钮组",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "size",
                "notes": "菜单按钮尺寸，(只在 split-button 模式下有效)",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "type",
                "notes": "菜单按钮类型，(只在 split-button 模式下有效)",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "menu-align",
                "notes": "菜单水平对齐方向",
                "type": "string",
                "enum": "start, end",
                "default": "end"
            },
            {
                "name": "menu-no-wrap",
                "notes": "是否阻止对东亚字符分行",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "trigger",
                "notes": "触发下拉的行为",
                "type": "string",
                "enum": "hover, click",
                "default": "hover"
            },
            {
                "name": "hide-on-click",
                "notes": "是否在点击菜单项后隐藏菜单",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "visible-change",
                "notes": "事件，当下拉菜单显示与隐藏切换时触发",
                "type": "event",
                "enum": null,
                "default": null
            },
            {
                "name": "selected",
                "notes": "事件，选中一项后触发，参数为数据源中选中的一项",
                "type": "event",
                "enum": null,
                "default": null
            }
        ]
    };
}

import { Component, ViewEncapsulation } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExMenuComponent {
  
  code: any[] = code
  exClass: any = class {
    isCollapse: boolean = true
  
    handle(index: string): void {
      console.log(index)
    }
  }
    apidoc: any = {
        "name": "Menu Attributes",
        "attrs": [
            {
                "name": "mode",
                "notes": "模式",
                "type": "string",
                "enum": "horizontal / vertical",
                "default": "vertical"
            },
            {
                "name": "background-color",
                "notes": "背景颜色 (仅支持 hex 格式)",
                "type": "string",
                "enum": null,
                "default": "#ffffff"
            },
            {
                "name": "text-color",
                "notes": "文字颜色 (仅支持 hex 格式)",
                "type": "string",
                "enum": null,
                "default": "#303133"
            },
            {
                "name": "active-text-color",
                "notes": "当前激活的文字颜色 (仅支持 hex 格式)",
                "type": "string",
                "enum": null,
                "default": "#409eff"
            },
            {
                "name": "model",
                "notes": "当前激活菜单的 index，双向绑定值",
                "type": "string | number",
                "enum": null,
                "default": null
            },
            {
                "name": "menu-trigger",
                "notes": "子菜单打开的触发方式(只在 mode 为 horizontal 时有效)",
                "type": "string",
                "enum": "hover / click",
                "default": "hover"
            }
        ]
    }

    apidoc2: any = {
        "name": "Menu Item Attributes",
        "attrs": [
            {
                "name": "index",
                "notes": "唯一标识",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "title",
                "notes": "默认标题",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "elDisabled",
                "notes": "禁用该项",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "to",
                "notes": "跳转地址，整个 url",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "extras",
                "notes": "额外的路由参数",
                "type": "NavigationExtras",
                "enum": null,
                "default": null
            }
        ]
    }

    apidoc3: any = {
        "name": "Menu Group Attributes",
        "attrs": [
            {
                "name": "title",
                "notes": "默认标题，也可以使用 <code>ng-template</code> 传入",
                "type": "string | ng-tempalte",
                "enum": null,
                "default": null
            }
        ]
    }

}

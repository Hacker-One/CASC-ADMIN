import {Component, ViewEncapsulation} from '@angular/core';
import code from './code';

@Component({
    selector: 'ex-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class ExBreadcrumbComponent {

    code: string[] = code;

    exClass: any = class {
        handle(path: string): void {
            console.log(path)
        }
    };

    apidoc: any = {
        "name": "Breadcrumb Item Attributes",
        "attrs": [
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
            },
            {
                "name": "prevent",
                "notes": "阻止当前子组件的路由跳转",
                "type": "boolean",
                "enum": null,
                "default": false
            }
        ]
    };

}

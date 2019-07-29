import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExLoadingComponent {

    code: string[] = code;
    exClass: new () => {} = class {
        loading: boolean = false;

        handle(): void {
            this.loading = true;
            const timer = setTimeout(() => {
                this.loading = false;
                clearTimeout(timer)
            }, 3000)
        }
    };
    apidoc: any = {
        "name": "Loading Attributes",
        "attrs": [
            {
                "name": "el-loading",
                "notes": "指令名 (必填)，同时接受一个布尔值，标识加载是否显示",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "full-screen",
                "notes": "是否全屏显示遮罩",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "custom-class",
                "notes": "遮罩层的额外 class",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "lock",
                "notes": "全屏遮罩时，是否禁用滚动",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "text",
                "notes": "加载时的提示文字",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "el-loading-top",
                "notes": "loading 图标与顶部的距离",
                "type": "string",
                "enum": null,
                "default": null
            }
        ]
    };
}

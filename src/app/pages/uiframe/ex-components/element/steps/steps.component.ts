import {Component, ViewEncapsulation} from '@angular/core'
import code from './code'

@Component({
    selector: 'ex-steps',
    templateUrl: './steps.component.html',
    styleUrls: ['./steps.component.scss'],
    // encapsulation: ViewEncapsulation.None,
})
export class ExStepsComponent {

    ExClass: new () => {} = class {
        active: number = 1

        handle(): void {
            if (this.active === 3) {
                this.active = 0
            } else {
                this.active++
            }
        }
    }
    code: string[] = code;
    apidoc: any = {
        "name": "Steps Attributes",
        "attrs": [{
            "name": "space |  | Number,String",
            "notes": "每个 step 的间距，不填写将自适应间距。支持百分比。如: 100px/50%",
            "type": "string",
            "enum": null,
            "default": null
        }, {
            "name": "direction",
            "notes": "显示方向",
            "type": "string",
            "enum": "vertical/horizontal",
            "default": "horizontal"
        }, {
            "name": "active",
            "notes": "设置当前激活步骤，默认激活第一个是 1",
            "type": "number",
            "enum": null,
            "default": 0
        }, {
            "name": "process-status",
            "notes": "设置当前步骤的状态",
            "type": "string",
            "enum": "wait/process/finish/error/success",
            "default": "process"
        }, {
            "name": "finish-status",
            "notes": "设置结束步骤的状态",
            "type": "string",
            "enum": "wait/process/finish/error/success",
            "default": "finish"
        }, {
            "name": "align-center",
            "notes": "标题描述居中对齐",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "simple",
            "notes": "开启简洁风格",
            "type": "boolean",
            "enum": null,
            "default": false
        }, {
            "name": "center",
            "notes": "组件居中显示",
            "type": "boolean",
            "enum": null,
            "default": false
        }]
    }

    apidoc2: any = {
        "name": "Step Attributes",
        "attrs": [{
            "name": "title",
            "notes": "标题",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "description",
            "notes": "描述性文字",
            "type": "string",
            "enum": null,
            "default": null
        },{
            "name": "icon",
            "notes": "图标",
            "type": "string",
            "enum": "Element Icon 提供的图标",
            "default": null
        }]
    }


}

import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core'
import code from './code'
import {UserSafeHooks} from '../../../../../components/tree/tree'

class DemoClass implements AfterViewInit {
    @ViewChild('tree') tree: ElementRef
    hooks: UserSafeHooks

    data: any = [{
        label: '一级 1',
        id: '1.1.1',
        children: [{
            label: '二级 1-1',
            id: '2.1.1',
            children: [{
                id: '3.1.1',
                label: '三级 1-1-1',
            }]
        }]
    }, {
        label: '一级 2',
        id: '1.2.1',
        children: [{
            id: '2.2.1',
            label: '二级 2-1',
        }]
    }, {
        id: '1.3.1',
        label: '一级 3',
    }]
    data2: any = [{
        label: '一级 1',
        id: '1.1.1',
        expanded: true,
        children: [{
            label: '二级 1-1',
            id: '2.1.1',
            children: [{
                id: '3.1.1',
                label: '三级 1-1-1',
                checked: true,
            }]
        }]
    }, {
        label: '一级 2',
        id: '1.2.1',
        children: [{
            id: '2.2.1',
            label: '二级 2-1',
        }]
    }, {
        id: '1.3.1',
        label: '一级 3',
    }]
    data3: any = Object.assign([], this.data2)

    findAllChecked(): void {
        console.log(this.hooks.findAllChecked())
    }

    removeAllChecked(): void {
        this.hooks.removeAllChecked()
    }

    updateItemChecked(): void {
        this.hooks.updateItemChecked('1.3.1')
    }

    updateItemExpanded(): void {
        this.hooks.updateItemExpanded('1.2.1')
    }

    ngAfterViewInit(): void {
        if (!this.tree) return
        this.hooks = (<any>this.tree).userSafeHooks()
    }
}

@Component({
    selector: 'ex-tree',
    templateUrl: './tree.component.html',
    styleUrls: ['./tree.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ExTreeComponent {

    exClass: any = DemoClass
    code: string[] = code
    apidoc: any = {
        "name": "Tree Attributes",
        "attrs": [
            {
                "name": "model",
                "notes": "展示数据",
                "type": "Array<{ label: string, children?: [], checked?: boolean, expanded?: boolean }>",
                "enum": null,
                "default": null
            },
            {
                "name": "modelChange",
                "notes": "点击或改变选择后的响应事件, action 包括 close/open/click/checkbox 四种状态",
                "type": "EventEmitter<{ label: string, treeNodeID: string | number, action: string, checked: boolean }>",
                "enum": null,
                "default": null
            },
            {
                "name": "empty-text",
                "notes": "为空的展示文字",
                "type": "string",
                "enum": null,
                "default": null
            },
            {
                "name": "show-checkbox",
                "notes": "节点是否可被选择",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "default-expand-all",
                "notes": "默认展开全部",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "default-expanded-keys",
                "notes": "默认展开的数组。数组中的每项为 model 数据中的 id 属性",
                "type": "Array<string | number>",
                "enum": null,
                "default": "[]"
            },
            {
                "name": "default-checked-keys",
                "notes": "默认选中的数组，需要 show-checkbox 选项打开，数组中的每项为 model 数据中的 id 属性",
                "type": "Array<string | number>",
                "enum": null,
                "default": "[]"
            },
            {
                "name": "indent",
                "notes": "左侧偏移值，px",
                "type": "number",
                "enum": null,
                "default": "16"
            },
            {
                "name": "accordion",
                "notes": "手风琴模式",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "elDisabled",
                "notes": "禁用",
                "type": "boolean",
                "enum": null,
                "default": false
            },
            {
                "name": "expand-on-click-node",
                "notes": "允许点击非图标区域触发展开收起动作",
                "type": "boolean",
                "enum": null,
                "default": true
            },
            {
                "name": "findAllChecked",
                "notes": "获取所有选中项。实例方法，由 Tree.userSafeHooks() 返回",
                "type": "() => string[]",
                "enum": null,
                "default": null
            },
            {
                "name": "removeAllChecked",
                "notes": "移除所有选中项。实例方法，由 Tree.userSafeHooks() 返回",
                "type": "() => void",
                "enum": null,
                "default": null
            },
            {
                "name": "updateItemChecked",
                "notes": "更新指定项的选中状态。实例方法，由 Tree.userSafeHooks() 返回",
                "type": "(id: string | number) => void",
                "enum": null,
                "default": null
            },
            {
                "name": "updateItemExpanded",
                "notes": "更新指定项的展开状态。实例方法，由 Tree.userSafeHooks() 返回",
                "type": "(id: string | number) => void",
                "enum": null,
                "default": null
            }
        ]
    }

}

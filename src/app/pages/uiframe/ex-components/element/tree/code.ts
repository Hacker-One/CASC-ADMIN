export default [
// 基础用法
`
<ql-tree [model]="data">
</ql-tree>

<script type="text">
// in Component
data: any = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1',
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
  }]
}, {
  label: '一级 3',
}]
</script>
`,

// 可选择
`
<ql-tree [model]="data" [show-checkbox]="true">
</ql-tree>

<script type="text">
// in Component
data: any = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1',
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
  }]
}, {
  label: '一级 3',
}]
</script>
`,

// 默认展开和默认选中
`
<ql-tree [model]="data2" [show-checkbox]="true">
</ql-tree>

<script type="text">
// in Component
data2: any = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1',
      checked: true,
      expanded: true,
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
  }]
}, {
  label: '一级 3',
}]
</script>
`,

// 钩子函数
`
<ql-tree [model]="data3" [show-checkbox]="true" #tree>
</ql-tree>

<div class="tree-box">
<ql-button (click)="findAllChecked()">获取所有选中</ql-button>
<ql-button (click)="removeAllChecked()">清除所有</ql-button>
<ql-button (click)="updateItemChecked()">更新选中</ql-button>
<ql-button (click)="updateItemExpanded()">更新展开</ql-button>
</div>
<script type="text">
// in Component
data3: any = [{
  label: '一级 1',
  id: '1.1.1',
  children: [{
    label: '二级 1-1',
    id: '2.1.1',
    children: [{
      id: '3.1.1',
      label: '三级 1-1-1',
      checked: true,
      expanded: true,
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

@ViewChild('tree') tree: ElementRef
hooks: UserSafeHooks

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
  this.hooks = this.tree.userSafeHooks()
}
</script>
`,

// 手风琴模式
`
<ql-tree [model]="data" [accordion]="true">
</ql-tree>

<script type="text">
// in Component
data: any = [{
  label: '一级 1',
  children: [{
    label: '二级 1-1',
    children: [{
      label: '三级 1-1-1',
    }]
  }]
}, {
  label: '一级 2',
  children: [{
    label: '二级 2-1',
  }]
}, {
  label: '一级 3',
}]
</script>
`,
]

export default [
// 基础用法
`
<ql-dropdown [model]="data" (selected)="handle($event)">
  下拉菜单
</ql-dropdown>

<script type="text">
// in component:
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
</script>
`,

// 触发方式
`
<div ql-row class="block-col-2">
  <div ql-col span="12">
    <span class="demonstration">hover 激活</span>
    <ql-dropdown trigger="hover" [model]="data">
      下拉菜单
    </ql-dropdown>
  </div>
  
  <div ql-col span="12">
    <span class="demonstration">click 激活</span>
    <ql-dropdown [model]="data">
      下拉菜单
    </ql-dropdown>
  </div>
</div>
`,

// 禁用
`
<ql-dropdown [model]="data2">
  下拉菜单
</ql-dropdown>

<script type="text">
// in component:
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

</script>
`,

// 分割线
`
<ql-dropdown [model]="data3">
  下拉菜单
</ql-dropdown>

<script type="text">
// in component:
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
</script>
`,

// 按钮
`
<ql-dropdown [model]="data3"
  [split-button]="true"
  type="primary">
  下拉菜单
</ql-dropdown>
`,
]

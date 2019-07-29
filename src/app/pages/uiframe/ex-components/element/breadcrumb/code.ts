export default [

// 手动设置
`
<!--当然，你也可以将 prevent 分别设置在 item 项上，详见文末属性参考-->
<ql-breadcrumb (next)="handle($event)" [prevent]="true" separator-class="ql-icon-arrow-right">
  <ql-breadcrumb-item to="/home">首页</ql-breadcrumb-item>
  <ql-breadcrumb-item to="/2">活动管理</ql-breadcrumb-item>
  <ql-breadcrumb-item to="/list">活动列表</ql-breadcrumb-item>
  <ql-breadcrumb-item to="/test">面包屑导航</ql-breadcrumb-item>
</ql-breadcrumb>

<script src="text">
// in component:

handle(path: string): void {
  console.log(path)
}

</script>
`,
]

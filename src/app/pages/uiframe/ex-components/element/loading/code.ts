export default [
// 基础用法
`
<!-- 你可以为 [ql-loading] 绑定一个变量-->
<!-- 默认将占满整个父级窗口 -->
<div [ql-loading]="true">
  <ql-tag>加载中..</ql-tag>
</div>

`,

// 加载文字
`
<div class="demo" [ql-loading]="true" [text]="'拼命加载中'">
  <ql-tag>加载中..</ql-tag>
</div>
`,

// 全局加载
`
<!--你还可以指定 [lock] 属性来禁止全局遮罩时的页面滚动-->
<ql-button type="primary"
  (click)="handle()"
  [ql-loading]="loading"
  [full-screen]="true">
  显示整页加载，3 秒后消失
</ql-button>
`,

]

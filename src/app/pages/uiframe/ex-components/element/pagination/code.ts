export default [
// 基础用法
`
<ql-pagination [total]="250">
</ql-pagination>
`,

// 小型
`
<ql-pagination [total]="36" [layout]="['prev', 'pager', 'next']"
  [small]="true">
</ql-pagination>
`,

// 附加功能
`
<ul class="list">
<li>
<span>显示总数</span>
<ql-pagination [total]="50"
[layout]="['prev', 'pager', 'next', 'total']">
</ql-pagination>
</li>

<li>
  <span>调整每页显示条数</span>
  <ql-pagination [total]="500"
    [page-size]="20"
    [layout]="['prev', 'pager', 'next', 'size']">
  </ql-pagination>
</li>

<li>
  <span>直接前往</span>
  <ql-pagination [total]="500"
    [layout]="['prev', 'pager', 'next', 'jumper']">
  </ql-pagination>
</li>

<li>
  <span>完整功能</span>
  <ql-pagination [total]="40"
    [layout]="['prev', 'pager', 'next', 'jumper', 'size', 'total']">
  </ql-pagination>
</li>
</ul>


`,

]

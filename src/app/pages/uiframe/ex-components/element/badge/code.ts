export default [
// 基础用法
`
<ql-badge [model]="12" class="item">
  <ql-button size="small">评论</ql-button>
</ql-badge>

<ql-badge [model]="3" class="item">
  <ql-button size="small">回复</ql-button>
</ql-badge>
`,

// 最大值
`
<ql-badge [model]="200" [max]="99" class="item">
  <ql-button size="small">评论</ql-button>
</ql-badge>

<ql-badge [model]="100" [max]="10" class="item">
  <ql-button size="small">回复</ql-button>
</ql-badge>
`,

// 自定义内容
`
<ql-badge model="new" class="item">
  <ql-button size="small">评论</ql-button>
</ql-badge>

<ql-badge model="hot" class="item">
  <ql-button size="small">回复</ql-button>
</ql-badge>
`,

// 小红点
`
<ql-badge [is-dot]="true" class="item">数据查询</ql-badge>

<ql-badge [is-dot]="true" class="item">
  <ql-button class="share-button" icon="share" type="primary"></ql-button>
</ql-badge>
`,
]

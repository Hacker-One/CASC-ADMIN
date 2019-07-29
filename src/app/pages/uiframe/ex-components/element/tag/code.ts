export default [
// 基础用法
`
<ql-tag class="mr-3">标签一</ql-tag>
<ql-tag class="mr-3" type="gray">标签二</ql-tag>
<ql-tag class="mr-3" type="primary">标签三</ql-tag>
<ql-tag class="mr-3" type="success">标签四</ql-tag>
<ql-tag class="mr-3" type="warning">标签五</ql-tag>
<ql-tag class="mr-3" type="danger">标签六</ql-tag>

`,

// 可移除
`
<ql-tag class="mr-3" *ngFor="let tag of [
{ name: '标签一', type: ''
},{ name: '标签二', type: 'gray'
},{ name: '标签三', type: 'primary'
},{ name: '标签四', type: 'success'
},{ name: '标签五', type: 'warning'
},{ name: '标签六', type: 'danger' }]"
  [closable]="true"
  [type]="tag.type">
  {{tag.name}}
</ql-tag>
`,
]

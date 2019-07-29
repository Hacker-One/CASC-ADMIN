export default [
// 基础用法
`
<!--你可以通过 [(model)] 进行双向绑定-->
<ql-input-number [model]="val" (modelChange)="changeHandle($event)" [min]="1" [max]="10"></ql-input-number>
`,

// 禁用
`
<ql-input-number [model]="1" [qlDisabled]="true"></ql-input-number>
`,

// 步数
`
<ql-input-number [model]="10" [step]="2"></ql-input-number>
`,

// 尺寸
`

<ql-input-number [model]="3"></ql-input-number>

<ql-input-number size="small" [model]="5"></ql-input-number>

`,
]

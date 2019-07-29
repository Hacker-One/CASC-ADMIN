export default [
// 百分比外显
`
<ql-progress [percentage]="0"></ql-progress>
<ql-progress [percentage]="70"></ql-progress>
<ql-progress [percentage]="100" status="success"></ql-progress>
<ql-progress [percentage]="50" status="exception"></ql-progress>
`,

// 百分比内显
`
<ql-progress [text-inside]="true" [stroke-width]="18" [percentage]="0"></ql-progress>
<ql-progress [text-inside]="true" [stroke-width]="18" [percentage]="70"></ql-progress>
<ql-progress [text-inside]="true" [stroke-width]="18" [percentage]="100" status="success"></ql-progress>
<ql-progress [text-inside]="true" [stroke-width]="18" [percentage]="50" status="exception"></ql-progress>
`,

// 环形

`
<ql-progress type="circle" [percentage]="0"></ql-progress>
<ql-progress type="circle" [percentage]="25"></ql-progress>
<ql-progress type="circle" [percentage]="100" status="success"></ql-progress>
<ql-progress type="circle" [percentage]="50" status="exception"></ql-progress>
`,
]

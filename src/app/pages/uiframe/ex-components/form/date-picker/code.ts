export default [
// 基础用法
`
<ql-date-picker (modelChange)="handle($event)"
  (clear-click)="clearClickHandle($event)">
</ql-date-picker>

<script type="text">
// in component:

handle(time: number): void {
  // [time] is string
  // date style follow format props
  console.log(time)
}

</script>

`,

// 日期格式
`
<ql-date-picker (modelChange)="handle($event)"
  [format]="'yyyy年MM月-dd日'">
</ql-date-picker>
`,

// 隐藏日期
`
<ql-date-picker (modelChange)="handle($event)"
  [format]="'yyyy - MM'" [hidden-day]="true">
</ql-date-picker>
`,

// 禁用
`
<ql-date-picker (modelChange)="handle($event)"
  [qlDisabled]="true">
</ql-date-picker>
`,
]

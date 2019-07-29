export default [
// 基础用法
`
<!--你可以为 model 绑定布尔变量-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<ql-switch [(model)]="value1">
</ql-switch>
<ql-switch [model]="true" [active-color]="'#13ce66'" [inactive-color]="'#ff4949'">
</ql-switch>

`,

// 有禁用选项
`
<ql-switch [(model)]="value1"[qlDisabled]="true">
</ql-switch>
<ql-switch [(model)]="value2" [active-color]="'#13ce66'" [inactive-color]="'#ff4949'"
  [qlDisabled]="true">
</ql-switch>
`,

// 自定义图标
`
<ql-switch [model]="true" [active-icon-class]="'ql-icon-circle-check'"
  [inactive-icon-class]="'ql-icon-circle-cross'">
</ql-switch>
`,

// 自定义图标
`
<ql-switch [model]="true" active-text="移动"
  inactive-text="联通">
</ql-switch>
`,
]

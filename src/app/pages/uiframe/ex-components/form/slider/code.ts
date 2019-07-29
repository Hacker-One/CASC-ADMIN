export default [
// 基础用法
`
<!--你可以为 model 绑定布尔变量-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<ql-slider (modelChange)="handle($event)">
</ql-slider>

`,

// 初始值
`
<ql-slider [model]="50">
</ql-slider>
`,

// 隐藏提示框
`
<ql-slider [show-tooltip]="false">
</ql-slider>
`,

// 最小值与最大值
`
<ql-slider [min]="10" [max]="50">
</ql-slider>
`,

// 竖向
`
<ql-slider [vertical]="true" [vertical-height]="200">
</ql-slider>
`,
]

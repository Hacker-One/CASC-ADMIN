export default [
// 基础用法
`
<!-- 'checked' 为 true 或 false -->
<ql-checkbox [model]="val" (modelChange)="handle($event)">备选项</ql-checkbox>

`,

// 禁用
`
<ql-checkbox [model]="checked1" [qlDisabled]="true">备选项1</ql-checkbox>
<ql-checkbox [model]="checked2" [qlDisabled]="true">备选项2</ql-checkbox>
`,

// 多选框组
`
<!--当组件中无值时，label 属性的值也会用于显示-->
<ql-checkbox-group [model]="['复选框 B', '选中且禁用']" (modelChange)="handle($event)">
  <ql-checkbox label="复选框 A"></ql-checkbox>
  <ql-checkbox label="复选框 B">复选框 F</ql-checkbox>
  <ql-checkbox label="复选框 C"></ql-checkbox>
  <ql-checkbox label="禁用" [qlDisabled]="true"></ql-checkbox>
  <ql-checkbox label="选中且禁用" [qlDisabled]="true"></ql-checkbox>
</ql-checkbox-group>
`,

// 限制数量
`
<!--min 与 [min] 并不是等价的，具体请参见 Angular 官方文档-->
<ql-checkbox-group [model]="['Java', 'TypeScript']" [min]="1" max="2">
  <ql-checkbox label="Java"></ql-checkbox>
  <ql-checkbox label=".NET">复选框 F</ql-checkbox>
  <ql-checkbox label="C++"></ql-checkbox>
  <ql-checkbox label="JavaScript" [qlDisabled]="true"></ql-checkbox>
  <ql-checkbox label="TypeScript" [qlDisabled]="true"></ql-checkbox>
</ql-checkbox-group>

`,

// 按钮样式
`
<div style="margin: 15px 0;"></div>
<ql-checkbox-group [model]="['Java', 'TypeScript', 'Swift']">
  <ql-checkbox-button *ngFor="let city of ['Hello', 'TypeScript', 'CSS']"
    [label]="city"></ql-checkbox-button>
</ql-checkbox-group>

<div style="margin: 15px 0;"></div>
<ql-checkbox-group [model]="['Hegel', 'Aristotle', 'Dewey']" size="small">
  <ql-checkbox-button *ngFor="let man of ['Hegel', 'Aristotle', 'Dewey']"
    [label]="man" [qlDisabled]="man === 'Aristotle'">{{man}}</ql-checkbox-button>
</ql-checkbox-group>
`,
]

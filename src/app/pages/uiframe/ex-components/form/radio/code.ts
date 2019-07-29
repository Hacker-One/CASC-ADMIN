export default [
// 基础用法
`
<!--绑定的 model 与 label 值相同时就会被选中-->
<ql-radio class="radio" [(model)]="radio" label="备选1">备选项1</ql-radio>

<ql-radio class="radio" [(model)]="radio" label="备选2">备选项2</ql-radio>

<ql-radio class="radio" [(model)]="radio" label="备选3">备选项3</ql-radio>

`,

// 禁用状态
`
<!--你可以拆分 model 达到不同的用途：-->
<!--单独使用 '[]' 来标记输入组件的值，甚至可以不声明变量-->
<!--单独使用 '(modelChange)' 来获取组件返回的变化-->
<ql-radio [qlDisabled]="true" [model]="'element'" label="element">备选项</ql-radio>

<ql-radio [qlDisabled]="true" [(model)]="element2" label="element">备选项</ql-radio>

`,

// 单选框组
`
<ql-radio-group [model]="'3'">
  <ql-radio label="3">备选项</ql-radio>
  <ql-radio label="6">备选项</ql-radio>
  <ql-radio label="9">备选项</ql-radio>
</ql-radio-group>
`,

// 按钮样式
`
<ql-radio-group [model]="'上海'">
  <ql-radio-button label="上海">上海</ql-radio-button>
  <ql-radio-button label="北京">北京</ql-radio-button>
  <ql-radio-button label="广州">广州</ql-radio-button>
  <ql-radio-button label="深圳">深圳</ql-radio-button>
</ql-radio-group>
<div style="margin: 15px 0;"></div>

<ql-radio-group [model]="'Angular'">
  <ql-radio-button label="Angular">Angular</ql-radio-button>
  <ql-radio-button label="React">React</ql-radio-button>
  <ql-radio-button label="Bootstrap" [qlDisabled]="true">Bootstrap</ql-radio-button>
  <ql-radio-button label="Vue">Vue</ql-radio-button>
</ql-radio-group>
<div style="margin: 15px 0;"></div>

<ql-radio-group [model]="'黄山'" [qlDisabled]="true">
  <ql-radio-button label="华山">华山</ql-radio-button>
  <ql-radio-button label="武夷山">武夷山</ql-radio-button>
  <ql-radio-button label="长白山">长白山</ql-radio-button>
  <ql-radio-button label="泰山">泰山</ql-radio-button>
</ql-radio-group>
`,
]

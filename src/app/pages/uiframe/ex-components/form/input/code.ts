export default [
// 基础用法
`
<!--当设置 value 初始值属性后，会覆盖 placeholder-->
<!--你可以通过 [(model)] 进行双向绑定-->
<ql-input [model]="input" placeholder="请输入内容"></ql-input>

`,

// 禁用状态
`
<ql-input placeholder="请输入内容"
  [model]="input1"
  [qlDisabled]="true">
</ql-input>
`,

// 图标

`
<!--你可以使用 (icon-click)=Function 来得到图标点击的事件-->
<ql-input placeholder="请选择日期"
  icon="search"
  [model]="input2">
</ql-input>
`,

// 文本域
`
<ql-input type="textarea"
  [rows]="2"
  placeholder="请输入内容"
  [model]="textarea">
</ql-input>
`,

// 自动高度
`
<ql-input type="textarea"
  autosize
  placeholder="固定高度文本域"
  [model]="textarea2">
</ql-input>

<div style="margin: 20px 0;"></div>

<ql-input type="textarea"
  [autosize]="{ minRows: 2, maxRows: 4}"
  placeholder="自动调整高度 { minRows: 2, maxRows: 4 }"
  [model]="textarea3">
</ql-input>
`,

// 复合型
`
<div>
  <ql-input placeholder="请输入内容" [model]="input3">
    <ng-template #prepend>
      <span>Http://</span>
    </ng-template>
  </ql-input>
</div>

<div style="margin-top: 15px;">
  <ql-input placeholder="请输入内容" [model]="input4">
    <ng-template #append>
      <span>.com</span>
    </ng-template>
  </ql-input>
</div>

`,

// 尺寸
`
<div class="demo-input-size">
  <ql-input placeholder="请输入内容" [model]="input7"></ql-input>
  
  <ql-input size="small" placeholder="请输入内容" [model]="input8"></ql-input>
  
  <ql-input size="mini" placeholder="请输入内容" [model]="input9"></ql-input>
  
</div>
`,

]

export default [
// 基础用法
`
<!--[active] 的值标识当前的进度 它是一个整数-->
<div class="demo">
  <ql-steps [active]="active" [finish-status]="'success'">
    <ql-step title="步骤 1"></ql-step>
    <ql-step title="步骤 2"></ql-step>
    <ql-step title="步骤 3"></ql-step>
  </ql-steps>
</div>
<ql-button (click)="handle()">next</ql-button>
`,

// 状态条
`
<ql-steps space="150px" [active]="1" [finish-status]="'success'">
  <ql-step title="已完成"></ql-step>
  <ql-step title="进行中"></ql-step>
  <ql-step title="步骤 3"></ql-step>
</ql-steps>
`,

// 描述
`
<ql-steps  [active]="1" [align-center]="true">
  <ql-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></ql-step>
  <ql-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></ql-step>
  <ql-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></ql-step>
</ql-steps>
`,

// 图标
`
<ql-steps [active]="1">
  <ql-step title="步骤 1" icon="edit"></ql-step>
  <ql-step title="步骤 2" icon="upload"></ql-step>
  <ql-step title="步骤 3" icon="picture"></ql-step>
</ql-steps>

`,

// 竖向
`
<ql-steps space="120px" [active]="1" direction="vertical" [finish-status]="'success'">
  <ql-step title="步骤 1"></ql-step>
  <ql-step title="步骤 2"></ql-step>
  <ql-step title="步骤 3"></ql-step>
</ql-steps>
`,

// 简洁风格
`
<ql-steps [active]="1" [simple]="true">
  <ql-step title="步骤 1"></ql-step>
  <ql-step title="步骤 2"></ql-step>
  <ql-step title="步骤 3"></ql-step>
</ql-steps>
`,
]

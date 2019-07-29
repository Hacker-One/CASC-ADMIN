export default [
// 基础的栅格布局
`
<div ql-row>
  <div ql-col span="24"><div class="grid-content bg-purple-dark"></div></div>
</div>
<div ql-row>
  <div ql-col span="12"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="12"><div class="grid-content bg-purple-light"></div></div>
</div>
<div ql-row>
  <div ql-col span="8"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="8"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col span="8"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row>
  <div ql-col span="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col span="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="6"><div class="grid-content bg-purple-light"></div></div>
</div>
<div ql-row>
  <div ql-col span="4"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="4"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col span="4"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="4"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col span="4"><div class="grid-content bg-purple"></div></div>
  <div ql-col span="4"><div class="grid-content bg-purple-light"></div></div>
</div>
`,
// 分栏之间存在间隔
`
<div ql-row gutter="20">
  <div ql-col [span]="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div ql-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div ql-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
  <div ql-col span="6">
    <div class="grid-content bg-purple"></div>
  </div>
</div>
`,
// 复杂的混合布局
`
<div ql-row gutter="20">
  <div ql-col [span]="16"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="8"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row :gutter="20">
  <div ql-col [span]="8"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="8"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="4"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="4"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row :gutter="20">
  <div ql-col [span]="4"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="16"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="4"><div class="grid-content bg-purple"></div></div>
</div>
`,
// 对齐方式
`
<div ql-row type="flex" class="row-bg">
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row type="flex" class="row-bg" justify="center">
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row type="flex" class="row-bg" justify="end">
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row type="flex" class="row-bg" justify="space-between">
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
<div ql-row type="flex" class="row-bg" justify="space-around">
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple-light"></div></div>
  <div ql-col [span]="6"><div class="grid-content bg-purple"></div></div>
</div>
`
]

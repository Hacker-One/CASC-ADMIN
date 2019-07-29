export default [
// 基础用法
`
<div class="box">
  <div class="top">
    <ql-tooltip placement="top-start">
      <ql-button>上左</ql-button>
      <ng-template #tip><span>placement is top-start</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="top">
      <ql-button>上边</ql-button>
      <ng-template #tip> <span>placement is top</span> </ng-template>
    </ql-tooltip>
    <ql-tooltip placement="top-end">
      <ql-button>上右</ql-button>
      <ng-template #tip><span>placement is top-end</span></ng-template>
    </ql-tooltip>
  </div>

  <div class="left">
    <ql-tooltip placement="left-start">
      <ql-button>左上</ql-button>
      <ng-template #tip><span>placement is left-start</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="left">
      <ql-button>左边</ql-button>
      <ng-template #tip><span>placement is left</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="left-end">
      <ql-button>左下</ql-button>
      <ng-template #tip><span>placement is left-end</span></ng-template>
    </ql-tooltip>
  </div>

  <div class="right">
    <ql-tooltip placement="right-start">
      <ql-button>右上</ql-button>
      <ng-template #tip><span>placement is right-start</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="right">
      <ql-button>右边</ql-button>
      <ng-template #tip><span>placement is right</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="right-end">
      <ql-button>右下</ql-button>
      <ng-template #tip><span>placement is right-end</span></ng-template>
    </ql-tooltip>
  </div>

  <div class="bottom">
    <ql-tooltip placement="bottom-start">
      <ql-button>下左</ql-button>
      <ng-template #tip><span>placement is bottom-start</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="bottom">
      <ql-button>下边</ql-button>
      <ng-template #tip><span>placement is bottom</span></ng-template>
    </ql-tooltip>
    <ql-tooltip placement="bottom-end">
      <ql-button>下右</ql-button>
      <ng-template #tip> <span>placement is bottom-end</span> </ng-template>
    </ql-tooltip>
  </div>
</div>
`,

// 主题
`
<ql-tooltip placement="top">
  <ql-button>Dark</ql-button>
  <ng-template #tip>
    <span>Top center</span>
  </ng-template>
</ql-tooltip>

<ql-tooltip placement="bottom" effect="light">
  <ql-button>Light</ql-button>
  <ng-template #tip>
    <span>Bottom center</span>
  </ng-template>
</ql-tooltip>
`,

// 禁用
`
<ql-tooltip placement="bottom" [qlDisabled]="true">
  <ql-button>qlDisabled</ql-button>
  <ng-template #tip>
    <span>Top center</span>
  </ng-template>
</ql-tooltip>
`,
]

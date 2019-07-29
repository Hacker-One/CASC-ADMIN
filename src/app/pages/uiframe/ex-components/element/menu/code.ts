export default [
// 基础用法
`
<ql-menu [model]="0" (modelChange)="handle($event)" class="ql-menu-demo" mode="horizontal">
  <ql-menu-item index="1">处理中心</ql-menu-item>
  <ql-submenu index="2" title="我的工作台">
    <ql-menu-item index="2-1">选项1</ql-menu-item>
    <ql-menu-item index="2-2">选项2</ql-menu-item>
    <ql-menu-item index="2-3">选项3</ql-menu-item>
  </ql-submenu>
  <ql-menu-item index="3"><a href="https://github.com/eleme/qloud-angular" target="_blank">GITHUB</a></ql-menu-item>
</ql-menu>

<ql-menu [model]="0" (modelChange)="handle($event)" class="ql-menu-demo" mode="horizontal"
  background-color="#292f43"
  active-text-color="#ffd04b"
  text-color="#fff">
  <ql-menu-item index="1">处理中心</ql-menu-item>
  <ql-submenu index="2" title="我的工作台">
    <ql-menu-item index="2-1">选项1</ql-menu-item>
    <ql-menu-item index="2-2">选项2</ql-menu-item>
    <ql-menu-item index="2-3">选项3</ql-menu-item>
  </ql-submenu>
  <ql-menu-item index="3"><a href="https://github.com/eleme/qloud-angular" target="_blank">GITHUB</a></ql-menu-item>
</ql-menu>

<script type="text">
// in Component
handle(index: string): void {
  console.log(index)
}
</script>
`,
  
`
<div ql-row class="tac">
  <div ql-col span="8">
    <h5>带 icon</h5>
    <ql-menu model="2" class="ql-menu-vertical-demo">
      <ql-submenu index="1">
        <ng-template #title>
          <i class="ql-icon-message"></i>导航一
        </ng-template>
        <ql-menu-item-group title="分组一">
          <ql-menu-item index="1-1">选项1</ql-menu-item>
          <ql-menu-item index="1-2">选项2</ql-menu-item>
        </ql-menu-item-group>
        <ql-menu-item-group title="分组2">
          <ql-menu-item index="1-3">选项3</ql-menu-item>
        </ql-menu-item-group>
        <ql-submenu index="1-4" title="选项4">
          <ql-menu-item index="1-4-1">选项1</ql-menu-item>
        </ql-submenu>
      </ql-submenu>
      <ql-menu-item index="2"><i class="ql-icon-menu"></i>导航二</ql-menu-item>
      <ql-menu-item index="3"><i class="ql-icon-setting"></i>导航三</ql-menu-item>
    </ql-menu>
  </div>
  <div ql-col span="8">
    <h5>不带 icon</h5>
    <ql-menu default-active="2" class="ql-menu-vertical-demo" theme="dark">
      <ql-submenu index="1" title="导航一">
        <ql-menu-item-group title="分组一">
          <ql-menu-item index="1-1">选项1</ql-menu-item>
          <ql-menu-item index="1-2">选项2</ql-menu-item>
        </ql-menu-item-group>
        <ql-menu-item-group title="分组2">
          <ql-menu-item index="1-3">选项3</ql-menu-item>
        </ql-menu-item-group>
        <ql-submenu index="1-4" title="选项4">
          <ql-menu-item index="1-4-1">选项1</ql-menu-item>
        </ql-submenu>
      </ql-submenu>
      <ql-menu-item index="2">导航二</ql-menu-item>
      <ql-menu-item index="3">导航三</ql-menu-item>
    </ql-menu>
  </div>
  <div ql-col span="8">
    <h5>分组</h5>
    <ql-menu mode="vertical" default-active="1" class="ql-menu-vertical-demo">
      <ql-menu-item-group title="分组一">
        <ql-menu-item index="1"><i class="ql-icon-message"></i>导航一</ql-menu-item>
        <ql-menu-item index="2"><i class="ql-icon-message"></i>导航二</ql-menu-item>
      </ql-menu-item-group>
      <ql-menu-item-group title="分组二">
        <ql-menu-item index="3"><i class="ql-icon-message"></i>导航三</ql-menu-item>
        <ql-menu-item index="4"><i class="ql-icon-message"></i>导航四</ql-menu-item>
      </ql-menu-item-group>
    </ql-menu>
  </div>
</div>
`,

]

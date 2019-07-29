export default [
// 基础用法
`
<ql-card class="box-card">
  <ng-template #header>
    <div class="clearfix">
    
        <div class="card-title">
            <div class="h3">卡片名称</div>
            <ql-button style="float: right;" type="primary">操作按钮</ql-button>
        </div>
      
    </div>
  </ng-template>
  <div *ngFor="let item of [0, 1, 2, 4]" class="text itxwem">
    {{'列表内容 ' + item }}
  </div>
</ql-card>
`,

// 简单卡片
`
<ql-card class="box-card">
  <div *ngFor="let item of [0, 1, 2, 4]" class="text item">
    {{'列表内容 ' + item }}
  </div>
</ql-card>

`,
]

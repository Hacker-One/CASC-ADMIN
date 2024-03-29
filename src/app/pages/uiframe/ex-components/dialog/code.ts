export default [
// 基础用法
`
<div class="box-card" #card>
  <p ql-row>点击按钮显示提示</p>
  <ql-button (click)="card.toggle = true">扬州</ql-button>
  <ql-dialog [title]="'扬州'" [(visible)]="card.toggle" width="320px">
    <span>一个平均寿命很高的城市。</span>
  </ql-dialog>
  
  <ql-button (click)="card.toggle2 = true">夏威夷</ql-button>
  <ql-dialog [title]="'夏威夷'" [(visible)]="card.toggle2">
    <span>我选择在夏威夷演讲。</span>
  </ql-dialog>
</div>
`,

// 自定义内容
`
<div class="box-card" #card>

  <ql-button (click)="card.toggle = true">自定义标题</ql-button>
  <ql-dialog [title]="'扬州'" [(visible)]="card.toggle">
    <ng-template #title>
      <span class="ql-icon-warning"></span>
      <span>自定义的标题</span>
    </ng-template>
    <span>一个平均寿命很高的城市。</span>
  </ql-dialog>
  
  <ql-button (click)="card.toggle2 = true">自定义尾部</ql-button>
  <ql-dialog [(visible)]="card.toggle2">
    <ng-template #title>
      <span>朗诵</span>
    </ng-template>
    <span>这篇葛底斯堡演讲朗诵的很好。</span>
    <ng-template #footer>
      <ql-button (click)="card.toggle2 = false">是的</ql-button>
    </ng-template>
  </ql-dialog>
</div>

`,

// 基础用法
`
<div class="box-card" #card>
  <ql-button (click)="card.toggle = true">回调函数</ql-button>
  
  <ql-dialog [title]="'扬州'" [(visible)]="card.toggle"
    [before-close]="handle">
    <span>一个平均寿命很高的城市。</span>
  </ql-dialog>
  
</div>

<script type="text">
// in Component:
handle(done: Function): void {
  alert('一段同步或异步的任务')
  done()
}
</script>
`,

// 居中
`
<div class="box-card" #card>
  <ql-button (click)="card.toggle = true">居中显示</ql-button>
  
  <ql-dialog [title]="'一位扬州的长者'" [(visible)]="card.toggle"
    [center]="true">
    <span>他为我们朗诵了葛底斯堡演讲。</span>
  </ql-dialog>
  
</div>
`,
]

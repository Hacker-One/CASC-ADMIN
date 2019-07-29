export default [
// 基础用法
`
<ql-button [plain]="true" (click)="handle()">
  尝试
</ql-button>

<!--组件中使用: -->
<script type="text">
  import { QlNotificationService } from 'qloud-angular'
  // ...
  
  constructor(
    private notify: QlNotificationService,
  ) {
  }
  
  // ...
  
  handle(): void {
    this.notify.show('这是一条消息提示')
  }
</script>
`,
  
  // 基础用法
`
<ql-button [plain]="true" (click)="handle2()">
  尝试
</ql-button>

<!--组件中使用: -->
<script type="text">
  // ...
  
  handle2(): void {
    this.notify.show('这是一条消息提示', '消息标题')
  }
</script>
`,
  
// 不同类型
`
<ql-button [plain]="true" (click)="handle3('success')">成功</ql-button>
<ql-button [plain]="true" (click)="handle3('warning')">警告</ql-button>
<ql-button [plain]="true" (click)="handle3('info')">消息</ql-button>
<ql-button [plain]="true" (click)="handle3('error')">错误</ql-button>

<!--组件中使用: -->
<script type="text">
  
  handle3(type: string): void {
    this.notify[type]('这是一条消息提示: ' + type, type)
  }
</script>
`,

// 引用说明
`
import { QlNotificationService } from 'qloud-angular'
// ...

constructor( private notify: QlNotificationService, ) {}


handle(): void {
  this.notify.setOptions(config: {})
  this.notify.show('一条经过设置的消息')
}

`,

]

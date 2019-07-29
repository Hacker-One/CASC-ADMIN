export default [
// 基础用法
`
<!--你可以从 [qloud-angular] 中引入 QlMessageService 并注入到自己的组件中-->
<!--使用 messageService.show('msg') 来触发一个提示-->
<ql-button (click)="handle()">show</ql-button>

<!--组件中使用: -->
<script type="text">
  import { QlMessageService } from 'qloud-angular'
  // ...
  
  constructor(
    private message: QlMessageService,
  ) {
  }
  
  // ...
  
  handle(): void {
    this.message.show('这是一条消息提示')
  }
</script>
`,

// 不同类型
`
<ql-button [plain]="true" (click)="handle('success')">成功</ql-button>
<ql-button [plain]="true" (click)="handle('warning')">警告</ql-button>
<ql-button [plain]="true" (click)="handle('info')">消息</ql-button>
<ql-button [plain]="true" (click)="handle('error')">错误</ql-button>

<!--组件中使用: -->
<script type="text">
  
  handle(type: string): void {
    this.message[type]('这是一条消息提示: ' + type)
  }
</script>
`,

// 可关闭
`
<ql-button [plain]="true" (click)="handle2('success')">成功(可关闭)</ql-button>
<ql-button [plain]="true" (click)="handle2('error')">错误(可关闭)</ql-button>

<!--组件中使用: -->
<script type="text">
  
  handle2(type: string): void {
    this.message.setOptions({ showClose: true })
    this.message[type]('这是一条可关闭的消息提示')
  }
</script>
`,

// 引用说明
`
import { QlMessageService } from 'qloud-angular'
// ...

constructor(private message: QlMessageService,) {}

`,

// 居中
`
<ql-button [plain]="true" (click)="center()">居中</ql-button>

<!--组件中使用: -->
<script type="text">
  
  handle(type: string): void {
    this.message[type]('这是一条消息提示: ' + type)
  }
</script>
`,

]

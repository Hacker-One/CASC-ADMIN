export default [
// 基础用法
  `
<!--你可以通过 model 来获取每次选择的值-->
<!--或者通过绑定 (modelChange)=handle 来获得每次值改变的触发-->
<ql-select [model]="value" placeholder="请选择" (modelChange)="handle($event)">
  <ql-option *ngFor="let item of foods"
    [label]="item.label"
    [value]="item.value">
  </ql-option>
</ql-select>
<ql-button (click)="clear()">clear</ql-button>

<script type="text">

// in component

handle(event: any):void {
  this.value = event
  console.log(event, this.value)
}

clear(): void {
  this.value = null
}

</script>
`,

// 有禁用选项
`
<ql-select [(model)]="value" placeholder="请选择">
  <ql-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { qlDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [qlDisabled]="item.qlDisabled"
    [value]="item.value">
  </ql-option>
</ql-select>
`,

// 禁用 select
`
<ql-select [model]="'选项2'" [qlDisabled]="true">
  <ql-option *ngFor="let item of [{value: '选项1',label: '黄金糕' }]"
    [label]="item.label"
    [value]="item.value">
  </ql-option>
</ql-select>
`,

// 默认选中
`
<ql-select [model]="'选项2'">
  <ql-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { qlDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </ql-option>
</ql-select>
`,

// 有清空按钮
`
<ql-select [(model)]="value" [clearable]="true">
  <ql-option *ngFor="let item of [{value: '选项1',label: '黄金糕' },
    { value: '选项2', label: '双皮奶' },
    { qlDisabled: true, value: '选项3', label: '蚵仔煎' },
    { value: '选项4', label: '龙须面' },
    { value: '选项5', label: '北京烤鸭' }]"
    [label]="item.label"
    [value]="item.value">
  </ql-option>
</ql-select>
`,

// 多选
`
<ql-select [model]="value" (modelChange)="handle($event)" [clearable]="true" [multiple]="true" size="large">
  <ql-option *ngFor="let item of [{value: 'hello',label: 'hello' },
    { value: 'ruby', label: 'ruby' },
    { qlDisabled: true, value: 'scala', label: 'scala' },
    { value: 'javascript', label: 'javascript' },
    { value: 'java', label: 'java' }]"
    [label]="item.label"
    [value]="item.value">
  </ql-option>
</ql-select>
`,
]

export default [
// 基础用法
`
<!-- 你可以通过 [(model)] 来指定一个初始值 -->
<!-- 同时获得所有值变更的推送 -->
<ql-carousel height="150px">
  <ql-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </ql-carousel-item>
</ql-carousel>

`,

// 指示器
`
<ql-carousel height="300px" indicator-position="outside">
  <ql-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <h3>{{item}}</h3>
  </ql-carousel-item>
</ql-carousel>
`,

// 切换箭头
`
<ql-carousel height="150px" arrow="always">
  <ql-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </ql-carousel-item>
</ql-carousel>
`,

// 标签
`
<ql-carousel height="150px">
  <ql-carousel-item *ngFor="let item of ['第一个', '第二个', '第三个']; let i = index"
    [label]="'label' + i">
    <div class="small">
      <h3>{{item}}</h3>
    </div>
  </ql-carousel-item>
</ql-carousel>
`,

]

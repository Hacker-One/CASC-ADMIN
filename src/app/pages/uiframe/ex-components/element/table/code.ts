export default [
// 基础用法
    `
<ql-table [model]="tableData" [border]="true" [stripe]="true">
    <ql-table-column model-key="time" label="时点"></ql-table-column>
    <ql-table-column model-key="guestnum1" [render-html]="true" label="总客户数"></ql-table-column>
    <ql-table-column model-key="guestnum2" [render-html]="true" label="月初升级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum3" [render-html]="true" label="月初降级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum4" [render-html]="true" label="私人银行客户数"></ql-table-column>
    <ql-table-column model-key="guestnum5" [render-html]="true" label="财富管理客户数"></ql-table-column>
    <ql-table-column model-key="guestnum6" [render-html]="true" label="金卡客户数"></ql-table-column>
    <ql-table-column model-key="guestnum7" [render-html]="true" label="潜力客户数"></ql-table-column>
    <ql-table-column model-key="guestnum8" [render-html]="true" label="普通客户数"></ql-table-column>
    <ql-table-column label="操作" width="150">
        <ng-template #slot let-scope="scope">
             <ql-button type="text" size="small" (click)="handle(scope)">详情</ql-button>
             <ql-button type="text" size="small" (click)="handle(scope)">删除</ql-button>
        </ng-template>
    </ql-table-column>
</ql-table>

<script type="text">
// in component
tableData: any[] = [{
  time: '本日',
  guestnum1: '35986',
  guestnum2: '30',
  guestnum3: '30',
  guestnum4: '30',
  guestnum5: '30',
  guestnum6: '30',
  guestnum7: '30',
  guestnum8: '30',
},
{
  time: '昨日',
  guestnum1: '35986',
  guestnum2: '20',
  guestnum3: '20',
  guestnum4: '20',
  guestnum5: '20',
  guestnum6: '20',
  guestnum7: '20',
  guestnum8: '20',
},
{
  time: '比上日',
  guestnum1: '0',
  guestnum2: '10',
  guestnum3: '10',
  guestnum4: '10',
  guestnum5: '10',
  guestnum6: '10',
  guestnum7: '10',
  guestnum8: '10',
},
{
  time: '本月',
  guestnum1: '38756',
  guestnum2: '30',
  guestnum3: '30',
  guestnum4: '30',
  guestnum5: '30',
  guestnum6: '30',
  guestnum7: '30',
  guestnum8: '30',
},
{
  time: '上月',
  guestnum1: '34987',
  guestnum2: '20',
  guestnum3: '20',
  guestnum4: '20',
  guestnum5: '20',
  guestnum6: '20',
  guestnum7: '20',
  guestnum8: '20',
},
{
  time: '比上月',
  guestnum1: '3769',
  guestnum2: '10',
  guestnum3: '10',
  guestnum4: '10',
  guestnum5: '10',
  guestnum6: '10',
  guestnum7: '10',
  guestnum8: '10',
}]
</script>
`,

// 带状态
    `
<ql-table [model]="tableDataMore" [row-class-name]="rowClassNameFilter">
    <ql-table-column model-key="time" label="时点"></ql-table-column>
    <ql-table-column model-key="guestnum1" [render-html]="true" label="总客户数"></ql-table-column>
    <ql-table-column model-key="guestnum2" [render-html]="true" label="月初升级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum3" [render-html]="true" label="月初降级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum4" [render-html]="true" label="私人银行客户数"></ql-table-column>
    <ql-table-column model-key="guestnum5" [render-html]="true" label="财富管理客户数"></ql-table-column>
    <ql-table-column model-key="guestnum6" [render-html]="true" label="金卡客户数"></ql-table-column>
    <ql-table-column model-key="guestnum7" [render-html]="true" label="潜力客户数"></ql-table-column>
    <ql-table-column model-key="guestnum8" [render-html]="true" label="普通客户数"></ql-table-column>
</ql-table>

<script type="text">
// in component
rowClassNameFilter(row: any, index: number): string {
  if (index === 1) {
    return 'info-row';
  } else if (index === 3) {
    return 'positive-row';
  }
  return ''
}
</script>

<style type="text">
.ql-table .info-row {
  background: #c9e5f5;
}

.ql-table .positive-row {
  background: #e2f0e4;
}
</style>
`,

// 固定表头
    `
<ql-table [model]="tableDataMore" [border]="true" [stripe]="true" height="300px">
    <ql-table-column model-key="time" label="时点"></ql-table-column>
    <ql-table-column model-key="guestnum1" [render-html]="true" label="总客户数"></ql-table-column>
    <ql-table-column model-key="guestnum2" [render-html]="true" label="月初升级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum3" [render-html]="true" label="月初降级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum4" [render-html]="true" label="私人银行客户数"></ql-table-column>
    <ql-table-column model-key="guestnum5" [render-html]="true" label="财富管理客户数"></ql-table-column>
    <ql-table-column model-key="guestnum6" [render-html]="true" label="金卡客户数"></ql-table-column>
    <ql-table-column model-key="guestnum7" [render-html]="true" label="潜力客户数"></ql-table-column>
    <ql-table-column model-key="guestnum8" [render-html]="true" label="普通客户数"></ql-table-column>
</ql-table>
`,



// 多级表头
    `
<ql-table [model]="tableDataMore" [border]="true" [stripe]="true" >
  <ql-table-column model-key="time" label="时点"></ql-table-column>
  <ql-table-column label="其他信息">
    <ql-table-column model-key="guestnum1" label="总客户数"></ql-table-column>
    <ql-table-column model-key="guestnum2" label="月初升级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum3" label="月初降级客户数"></ql-table-column>
    <ql-table-column model-key="guestnum4" label="私人银行客户数"></ql-table-column>
    <ql-table-column model-key="guestnum5" label="财富管理客户数"></ql-table-column>
    <ql-table-column model-key="guestnum6" label="金卡客户数"></ql-table-column>
    <ql-table-column model-key="guestnum7" label="潜力客户数"></ql-table-column>
    <ql-table-column model-key="guestnum8" label="普通客户数"></ql-table-column>
  </ql-table-column>
  
</ql-table>

`,

]

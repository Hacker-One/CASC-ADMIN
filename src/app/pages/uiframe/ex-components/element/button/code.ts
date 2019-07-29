export default [
// 基础的按钮用法
`
<ql-button >默认按钮</ql-button>
<ql-button type="primary">颜色按钮</ql-button>
<ql-button type="text">文字按钮</ql-button>
<ql-button [round]="true">圆角按钮</ql-button>
    
`,
// 按钮不可用状态
`
<ql-button [plain]="true" [qlDisabled]="true">默认按钮</ql-button>
<ql-button type="primary" [qlDisabled]="true">颜色按钮</ql-button>
<ql-button type="text" [qlDisabled]="true">文字按钮</ql-button>
<ql-button [round]="true" [qlDisabled]="true">圆角按钮</ql-button>
`,

// 颜色倾向
`
<ql-button type="primary">确定</ql-button>
<ql-button type="success">完成</ql-button>
<ql-button type="info">详情</ql-button>
<ql-button type="danger">删除</ql-button>
<ql-button type="warning">驳回</ql-button>
`,


// 按钮组
`
<ql-button-group class="mr-3">
    <ql-button icon="arrow-left">上一页</ql-button>
    <ql-button>下一页<i class="ql-icon-arrow-right ql-icon--right"></i></ql-button>
</ql-button-group>
<ql-button-group>
    <ql-button icon="edit"></ql-button>
    <ql-button icon="share"></ql-button>
    <ql-button icon="delete"></ql-button>
</ql-button-group>
`,

// 不同尺寸
`
<ql-button>正常按钮</ql-button>
<ql-button size="small">小型按钮</ql-button>
<ql-button size="mini">超小按钮</ql-button>
`,

// 加载中
`
<ql-button type="primary" [loading]="true">加载中</ql-button>
`,
]


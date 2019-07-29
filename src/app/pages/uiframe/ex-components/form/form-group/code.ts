export default [
    `
<ql-form [formGroup]="validateForm" label-width="100px"
 [show-icon]="true" [show-message]="true" ql-class="form-demo">

  <ql-form-item label="邮箱" [required]="true"
    [status]="statusCtrl('mail')" [error]="messageCtrl('mail')">
    <ql-input formControlName="mail"></ql-input>
  </ql-form-item>
  
  <ql-form-item label="密码" [required]="true"
    [status]="statusCtrl('password')" [error]="messageCtrl('password')">
    <ql-input formControlName="password" native-type="password"></ql-input>
  </ql-form-item>
  
  <ql-form-item>
    <ql-button type="primary" (click)="submit()">提交</ql-button>
    <ql-button (click)="reset()">重置</ql-button>
  </ql-form-item>
  
</ql-form>

<script type="text">
// in Component:
validateForm: FormGroup

constructor(
  @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
) {
}

submit(): void {
  console.log(this.validateForm.value)
}

reset(): void {
  this.validateForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.validateForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}

ngOnInit(): void {
  this.validateForm = this.formBuilder.group({
    password: [ '', [this.passwordValidator] ],
    mail: [ '', [this.emailValidator] ],
  })
}

private emailValidator = (control: FormControl): validateResult => {
  const mailReg: RegExp = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/
  if (!mailReg.test(control.value)) {
    return { status: 'error', message: '邮箱格式不正确' }
  }
  return { status: 'success' }
}

private passwordValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '密码是必填的' }
  }
  if (control.value.length < 6) {
    return { status: 'error', message: '密码长度必须大于 6 位' }
  }
  return { status: 'success' }
}

</script>
`,
    `
<ql-form [formGroup]="validateForm" label-width="100px" size="small"
 [show-icon]="true" [show-message]="true" ql-class="form-demo">

  <ql-form-item label="城市" [required]="true"
    [status]="statusCtrl('city')" [error]="messageCtrl('city')">
    <ql-input formControlName="city"></ql-input>
  </ql-form-item>
  
  <ql-form-item label="规格">
    <ql-cascader [options]="options" [change-on-select]="true" formControlName="spec"></ql-cascader>
  </ql-form-item>
  
  <ql-form-item label="配送日期" [status]="statusCtrl('date')" [error]="messageCtrl('date')" >
    <ql-date-picker formControlName="date" [format]="'yyyy-MM-dd'"></ql-date-picker>
  </ql-form-item>
  
  <ql-form-item label="配送方式">
    <ql-radio-group formControlName="express">
      <ql-radio label="eleme">蜂鸟配送</ql-radio>
      <ql-radio label="shop">商家配送</ql-radio>
    </ql-radio-group>
  </ql-form-item>
  
  <ql-form-item label="发票">
    <ql-checkbox formControlName="invoice">需要发票</ql-checkbox>
  </ql-form-item>
  
  <ql-form-item label="使用折扣">
    <ql-checkbox-group formControlName="discount" (modelChange)="discount">
      <ql-checkbox label="discount1">折扣1</ql-checkbox>
      <ql-checkbox label="discount2">折扣2</ql-checkbox>
      <ql-checkbox label="discount3">折扣3</ql-checkbox>
      <ql-checkbox label="禁用" [qlDisabled]="true">vip 折扣</ql-checkbox>
    </ql-checkbox-group>
  </ql-form-item>
  
  <ql-form-item label="配送时间" [status]="statusCtrl('time')" [error]="messageCtrl('time')">
    <ql-select placeholder="请选择" formControlName="time" [clearable]="true" [multiple]="true">
      <ql-option label="尽快配送" value="now"></ql-option>
      <ql-option label="夜间配送" value="night"></ql-option>
    </ql-select>
  </ql-form-item>
  
  
  <ql-form-item>
    <ql-button type="primary" (click)="submit()">提交</ql-button>
  </ql-form-item>
  
</ql-form>

<script type="text">
// in Component:

labelPosition: string = 'left'
validateForm: FormGroup
options: any[] = [{
  value: 'mike',
  label: '加奶油',
  children: [{
    value: 'hot',
    label: '热奶油',
    children: [{
      value: 'more',
      label: '多糖',
    }, {
      value: 'half',
      label: '半糖',
    }, {
      value: 'few',
      label: '少糖',
    }],
  }],
}, {
  value: 'cafe',
  label: '加咖啡',
  children: [{
    value: 'cubita',
    label: '古巴咖啡',
  }, {
    value: 'brazil',
    label: '巴西咖啡',
  }, {
    value: 'jamaica',
    label: '牙买加咖啡',
  }, {
    value: 'mamba',
    label: '曼巴咖啡',
  }],
}]

constructor(
  @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder
) {
}

submit(): void {
  console.log(this.validateForm.value)
}

reset(): void {
  this.validateForm.reset()
}

ctrl(item: string): AbstractControl {
  return this.validateForm.controls[item]
}

statusCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('status') ? control.errors.status : ''
}

messageCtrl(item: string): string {
  if (!this.validateForm.controls[item]) return
  const control: AbstractControl = this.validateForm.controls[item]
  return control.dirty && control.hasError('message') ? control.errors.message : ''
}

ngOnInit(): void {
  this.validateForm = this.formBuilder.group({
    city: [ '', [this.cityValidator] ],
    express: [ '' ],
    invoice: [ '' ],
    discount: [ [] ],
    time: [ '', [this.timeValidator] ],
    num: [ 1 ],
    spec: [ '' ],
    date: [ '', [this.dateValidator] ],
  })
}

private timeValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送时间' }
  }
  return { status: 'success' }
}

private dateValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须选择配送日期' }
  }
  return { status: 'success' }
}

private cityValidator = (control: FormControl): validateResult => {
  if (!control.value) {
    return { status: 'error', message: '必须填写城市名' }
  }
  if (!/[\u4e00-\u9fa5]/.test(control.value)) {
    return { status: 'error', message: '城市名必须是中文' }
  }
  return { status: 'success' }
}

</script>

`,

    `
<ql-radio-group [(model)]="labelPosition" size="small">
  <ql-radio-button label="left">左对齐</ql-radio-button>
  <ql-radio-button label="right">右对齐</ql-radio-button>
  <ql-radio-button label="top">顶部对齐</ql-radio-button>
</ql-radio-group>

<div style="margin: 20px;"></div>
<ql-form [formGroup]="validateForm" label-width="100px" size="small"
 ql-class="form-demo" [label-position]="labelPosition">

  <ql-form-item label="早餐">
    <ql-input></ql-input>
  </ql-form-item>
  
  <ql-form-item label="午餐">
    <ql-input></ql-input>
  </ql-form-item>
  
  <ql-form-item>
    <ql-button type="primary">提交</ql-button>
  </ql-form-item>
  
</ql-form>

`,

    `
<ql-form [formGroup]="validateForm" [inline]="true" size="small">

  <ql-form-item label="年龄">
    <ql-input></ql-input>
  </ql-form-item>
  
  <ql-form-item label="姓名">
    <ql-input></ql-input>
  </ql-form-item>
  
  <ql-form-item>
    <ql-button type="primary">搜索</ql-button>
  </ql-form-item>
  
</ql-form>
`,
]

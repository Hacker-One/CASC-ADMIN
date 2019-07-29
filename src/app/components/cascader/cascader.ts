import { Component, forwardRef, OnDestroy, OnInit, Renderer2 } from '@angular/core'
import { QlCascaderPoprs, Option } from './cascader-props'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'ql-cascader',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => QlCascader),
    multi: true
  }],
  template: `
    <span [class]="'ql-cascader ' +  (menuVisible ? 'is-opened ' : '') + (qlDisabled ? 'is-disabled ' : '')
      + (size ? 'ql-cascader--' + size : '')"
      (click)="clickHandle($event)"
      (mouseenter)="inputHover = true" (mouseleave)="inputHover = false">
      <ql-input [readonly]="true"
        [placeholder]="currentLabels.length ? '' : placeholder"
        [size]="size" [qlDisabled]="qlDisabled"
        [icon]="showClearIcon() ? 'circle-close' : 'caret-bottom'"
        [iconClass]="showClearIcon() ? 'ql-cascader__clearIcon' : (menuVisible ? 'is-reverse' : '')"
        (icon-click)="clearValue($event)">
      </ql-input>
    
      <span class="ql-cascader__label" *ngIf="currentLabels.length">
        <ng-container *ngIf="allLevels">
          <ng-container *ngFor="let item of currentLabels; let i = index">
            {{ item.label }}
            <span *ngIf="i < currentLabels.length - 1"> / </span>
          </ng-container>
        </ng-container>
        <ng-container *ngIf="!allLevels">
          {{ currentLabels[currentLabels.length - 1].label }}
        </ng-container>
      </span>
      <ql-cascader-menu></ql-cascader-menu>
  </span>
  `,
})
export class QlCascader extends QlCascaderPoprs implements OnInit, OnDestroy, ControlValueAccessor {
  
  steps: any[] = []
  menuVisible: boolean = false
  inputHover: boolean = false
  currentLabels: Option[] = []
  globalListenFunc: Function
  
  constructor(
    private renderer: Renderer2,
  ) {
    super()
  }
  
  close(): void {
    this.menuVisible = false
    this.globalListenFunc && this.globalListenFunc()
  }
  
  clickHandle(event: MouseEvent): void {
    event.stopPropagation()
    if (this.qlDisabled) return
    
    const element: HTMLElement = event.target as HTMLElement
    const isSelfTrigger = ['SPAN', 'I', 'INPUT'].find(v => v === element.tagName)
    if (!isSelfTrigger) return
    this.menuVisible = !this.menuVisible
    
    if (this.menuVisible) {
      this.globalListenFunc = this.renderer.listen(
        'document', 'click', () => {
          this.menuVisible = false
        }
      )
    } else {
      this.globalListenFunc && this.globalListenFunc()
    }
  }
  
  changeLabels(): void {
    const nextValue: Option[] = []
    this.steps.forEach((items: Option[]) => {
      const steps: Option[] = items.filter((item: Option) => item.active)
      nextValue.push(steps[0])
    })
    this.currentLabels = nextValue
    const next = nextValue.map((item: Option) => item.value)
    this.model = next
    this.modelChange.emit(next)
    this.controlChange(next)
  }
  
  clearValue(event?: Event): void {
    event && event.stopPropagation()
    this.currentLabels = []
    const step1 = this.options.map((option: Option) =>
      Object.assign(option, {
        active: false,
      }))
    this.steps = [step1]
    this.menuVisible = false
  }
  
  selectHandle(event: Event, step: number, index: number): any {
    event.stopPropagation()
    
    if (this.steps[step][index].qlDisabled) return
    this.steps[step] = this.steps[step].map((item: Option, i: number) =>
      Object.assign(item, { active: i === index }))
    // reset steps
    this.steps.length = step + 1
    const next = this.steps[step][index].children
    
    // go next
    if (next && Array.isArray(next)) {
      // change on select (props)
      this.changeOnSelect && this.changeLabels()
      const nativeNext = next.map((item: Option) => Object.assign(item, { active: false }))
      return this.steps.push(nativeNext)
    }
    // last step
    this.changeLabels()
    this.menuVisible = false
  }
  
  showClearIcon(): boolean {
    return !!(this.clearable && this.inputHover && this.currentLabels.length)
  }
  
  ngOnInit(): void {
    this.clearValue()
    if (this.model && this.model.length) {
      const getLabel = (options: Option[], val: string) => {
        const item: Option = options.filter((item: Option) => item.value === val)[0]
        return { children: item.children, val: item }
      }
      
      let options: Option[] = this.options
      const val: Option[] = this.model.map(v => {
        const { children, val } = getLabel(options, v)
        options = children
        return val
      })
      this.currentLabels = val.filter(v => !!v)
    }
  }
  
  ngOnDestroy(): void {
    this.globalListenFunc && this.globalListenFunc()
  }
  
  writeValue(value: any): void {
    this.model = value
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  private controlTouch: Function = () => {}
  
}

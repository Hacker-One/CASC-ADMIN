import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlInputsModule } from '../input/module'
import { QlCascader } from './cascader'
import { QlCascaderMenu } from './cascader.menu'


@NgModule({
  declarations: [QlCascader, QlCascaderMenu],
  exports: [QlCascader, QlCascaderMenu],
  imports: [CommonModule, QlInputsModule],
  entryComponents: [QlCascader],
})
export class QlCascaderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlCascaderModule, providers: [] }
  }
}

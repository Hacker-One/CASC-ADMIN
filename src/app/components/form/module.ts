import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlSharedModule } from '../shared/module'
import { QlButtonsModule } from '../button/module'
import { QlForm } from './form'
import { QlFormItem } from './form-item'

@NgModule({
  declarations: [QlForm, QlFormItem],
  exports: [QlForm, QlFormItem],
  imports: [CommonModule, QlButtonsModule, QlSharedModule],
  entryComponents: [QlForm],
})
export class QlFormModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlFormModule, providers: [] }
  }
}

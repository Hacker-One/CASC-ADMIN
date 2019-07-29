import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlInput } from './input'
import { FormsModule } from '@angular/forms'
import { QlFormItem } from '../form/form-item'


@NgModule({
  declarations: [QlInput],
  exports: [QlInput],
  imports: [CommonModule, FormsModule],
  entryComponents: [QlInput],
})
export class QlInputsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlInputsModule, providers: [ QlFormItem ] }
  }
}

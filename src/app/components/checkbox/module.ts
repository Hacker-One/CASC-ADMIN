import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { QlCheckbox } from './checkbox'
import { QlCheckboxButton } from './checkbox-button'
import { QlCheckboxGroup } from './checkbox-group'

@NgModule({
  declarations: [QlCheckbox, QlCheckboxButton, QlCheckboxGroup],
  exports: [QlCheckbox, QlCheckboxButton, QlCheckboxGroup],
  imports: [CommonModule, FormsModule],
  entryComponents: [QlCheckbox, QlCheckboxButton, QlCheckboxGroup],
})
export class QlCheckboxsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlCheckboxsModule, providers: [] }
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlSharedModule } from '../shared/module'
import { QlButtonsModule } from '../button/module'
import { QlDropdownItem } from './dropdown.item'
import { QlDropdown } from './dropdown'

@NgModule({
  declarations: [QlDropdown, QlDropdownItem],
  exports: [QlDropdown, QlDropdownItem],
  imports: [CommonModule, QlButtonsModule, QlSharedModule],
  entryComponents: [QlDropdown],
})
export class QlDropdownModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlDropdownModule, providers: [] }
  }
}

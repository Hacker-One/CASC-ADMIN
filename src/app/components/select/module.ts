import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { QlTagsModule} from '../tag/module'
import { QlInputsModule } from '../input/module'
import { QlSelectDropdown } from './select-dropdown'
import { QlOption } from './option'
import { QlSelect } from './select'


@NgModule({
  declarations: [QlSelectDropdown, QlOption, QlSelect],
  exports: [QlSelectDropdown, QlOption, QlSelect],
  imports: [CommonModule, FormsModule, QlTagsModule, QlInputsModule],
  entryComponents: [QlSelectDropdown, QlOption, QlSelect],
})
export class QlSelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlSelectModule, providers: [] }
  }
}

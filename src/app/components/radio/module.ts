import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { QlRadioGroup } from './radio-group'
import { QlRadioButton } from './radio-button'
import { QlRadio } from './radio'


@NgModule({
  declarations: [QlRadio, QlRadioGroup, QlRadioButton],
  exports: [QlRadio, QlRadioGroup, QlRadioButton],
  imports: [CommonModule, FormsModule],
  entryComponents: [QlRadio, QlRadioGroup, QlRadioButton],
})
export class QlRadiosModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlRadiosModule, providers: [] }
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlSwitch } from './switch'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [QlSwitch],
  exports: [QlSwitch],
  imports: [CommonModule, FormsModule],
  entryComponents: [QlSwitch],
})
export class QlSwitchModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlSwitchModule, providers: [] }
  }
}

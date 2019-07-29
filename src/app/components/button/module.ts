import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlButton } from './button'
import { QlButtonGroup } from './button-group'


@NgModule({
  declarations: [QlButton, QlButtonGroup],
  exports: [QlButton, QlButtonGroup],
  imports: [CommonModule],
  entryComponents: [QlButton, QlButtonGroup],
})
export class QlButtonsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlButtonsModule, providers: [] }
  }
}

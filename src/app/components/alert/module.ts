import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlAlert } from './alert'


@NgModule({
  declarations: [QlAlert],
  exports: [QlAlert],
  imports: [CommonModule],
  entryComponents: [QlAlert],
})
export class QlAlertModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlAlertModule, providers: [] }
  }
}

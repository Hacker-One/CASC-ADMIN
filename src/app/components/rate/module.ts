import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlRate } from './rate'


@NgModule({
  declarations: [QlRate],
  exports: [QlRate],
  imports: [CommonModule],
  entryComponents: [QlRate],
})
export class QlRateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlRateModule, providers: [] }
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Qlprogress } from './progress'


@NgModule({
  declarations: [Qlprogress],
  exports: [Qlprogress],
  imports: [CommonModule],
  entryComponents: [Qlprogress],
})
export class QlProgressModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlProgressModule, providers: [] }
  }
}

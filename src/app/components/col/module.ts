import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlColDirective } from './col.directive'


@NgModule({
  declarations: [QlColDirective],
  exports: [QlColDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class QlColModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlColModule, providers: [] }
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlRowDirective } from './row.directive'


@NgModule({
  declarations: [QlRowDirective],
  exports: [QlRowDirective],
  imports: [CommonModule],
  entryComponents: [],
})
export class QlRowModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlRowModule, providers: [] }
  }
}

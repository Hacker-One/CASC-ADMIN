import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlSharedModule } from '../shared/module'
import { QlLoadingDirective } from './loading.directive'

@NgModule({
  declarations: [QlLoadingDirective],
  exports: [QlLoadingDirective],
  imports: [CommonModule, QlSharedModule],
  entryComponents: [],
})
export class QlLoadingModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlLoadingModule, providers: []}
  }
}

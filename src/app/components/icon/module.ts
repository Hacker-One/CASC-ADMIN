import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlIcon } from './icon'


@NgModule({
  declarations: [QlIcon],
  exports: [QlIcon],
  imports: [CommonModule],
  entryComponents: [QlIcon],
})
export class QlIconsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlIconsModule, providers: [] }
  }
}

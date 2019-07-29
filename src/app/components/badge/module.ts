import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlBadge } from './badge'


@NgModule({
  declarations: [QlBadge],
  exports: [QlBadge],
  imports: [CommonModule],
  entryComponents: [QlBadge],
})
export class QlBadgesModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlBadgesModule, providers: [] }
  }
}

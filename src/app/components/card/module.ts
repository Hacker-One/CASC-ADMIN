import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlCard } from './card'


@NgModule({
  declarations: [QlCard],
  exports: [QlCard],
  imports: [CommonModule],
  entryComponents: [QlCard],
})
export class QlCardsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlCardsModule, providers: [] }
  }
}

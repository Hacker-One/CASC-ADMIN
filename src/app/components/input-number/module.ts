import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { QlInputNumber } from './input-number'


@NgModule({
  declarations: [QlInputNumber],
  exports: [QlInputNumber],
  imports: [CommonModule, FormsModule],
  entryComponents: [QlInputNumber],
})
export class QlInputNumberModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlInputNumberModule, providers: [] }
  }
}

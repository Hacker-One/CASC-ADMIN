import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTooltip } from './tooltip'
import { QlSharedModule } from '../shared/module'

export function getWindow(): any { return window }

@NgModule({
  declarations: [QlTooltip],
  exports: [QlTooltip],
  imports: [CommonModule, QlSharedModule],
  entryComponents: [QlTooltip],
})
export class QlTooltipModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlTooltipModule, providers: []}
  }
}

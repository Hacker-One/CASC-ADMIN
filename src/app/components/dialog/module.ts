import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlSharedModule } from '../shared/module'
import { QlDialog } from './dialog'

export function getDocument(): any { return document }
export function getWindow(): any { return window }
@NgModule({
  declarations: [QlDialog],
  exports: [QlDialog],
  imports: [CommonModule, QlSharedModule],
  entryComponents: [QlDialog],
})
export class QlDialogModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlDialogModule, providers: [] }
  }
}

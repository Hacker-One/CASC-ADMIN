import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTableHeader, QlTableColumn, QlTableBody } from './children'
import { QlTable } from './table'
import { QlTableFormat } from './utils/format'
import { QlSharedModule } from '../shared/module'

@NgModule({
  declarations: [
    QlTable,
    QlTableHeader,
    QlTableColumn,
    QlTableBody,
  ],
  exports: [
    QlTable,
    QlTableColumn,
  ],
  imports: [CommonModule, QlSharedModule],
  entryComponents: [QlTable],
})
export class QlTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlTableModule, providers: [QlTableFormat] }
  }
}

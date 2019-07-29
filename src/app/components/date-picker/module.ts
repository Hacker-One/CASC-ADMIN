import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { QlInputsModule } from '../input/module'
import { QlDataPicker } from './picker'
import { QlDatePickerPanel } from './picker-panel'
import { QlDateTable } from './children/date-table'
import { QlYearTable } from './children/year-table'
import { EMonthTable } from './children/month-table'

@NgModule({
  declarations: [QlDataPicker, QlDatePickerPanel, QlDateTable, QlYearTable, EMonthTable],
  exports: [QlDataPicker, QlDatePickerPanel, QlDateTable, QlYearTable, EMonthTable],
  imports: [CommonModule, FormsModule,QlInputsModule],
  entryComponents: [QlDataPicker],
})
export class QlDateModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlDateModule, providers: [] }
  }
}

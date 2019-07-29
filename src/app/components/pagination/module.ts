import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { QlSelectModule } from '../select/module'
import { QlPaginationButton, QlPaginationPager, QlPaginationSize, QlPaginationJump } from './children'
import { QlPagination } from './pagination'


@NgModule({
  declarations: [
    QlPagination,
    QlPaginationButton,
    QlPaginationPager,
    QlPaginationSize,
    QlPaginationJump,
  ],
  exports: [QlPagination],
  imports: [CommonModule, FormsModule, QlSelectModule],
  entryComponents: [QlPagination],
})
export class QlPaginationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlPaginationModule, providers: [] }
  }
}

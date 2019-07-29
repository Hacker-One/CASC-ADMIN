import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlCollapse } from './collapse'
import { QlCollapseItem } from './collapse-item'


@NgModule({
  declarations: [QlCollapse, QlCollapseItem],
  exports: [QlCollapse, QlCollapseItem],
  imports: [CommonModule],
  entryComponents: [QlCollapse],
})
export class QlCollapseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlCollapseModule, providers: [] }
  }
}

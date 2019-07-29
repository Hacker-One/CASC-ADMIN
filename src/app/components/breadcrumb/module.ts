import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlBreadcrumb } from './breadcrumb'
import { QlBreadcrumbItem } from './breadcrumb-item'


@NgModule({
  declarations: [QlBreadcrumb, QlBreadcrumbItem],
  exports: [QlBreadcrumb, QlBreadcrumbItem],
  imports: [CommonModule],
  entryComponents: [QlBreadcrumb],
})
export class QlBreadcrumbsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlBreadcrumbsModule, providers: [] }
  }
}

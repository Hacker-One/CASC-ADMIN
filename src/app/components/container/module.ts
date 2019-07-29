import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlContainer } from './container'
import { QlContainerDirective } from './container.directive'
import { QlHeader, QlAside, QlMain, QlFooter } from './children'
import { QlAsideDirective, QlFooterDirective, QlHeaderDirective, QlMainDirective } from './directives'


@NgModule({
  declarations: [
    QlContainer,
    QlHeader,
    QlAside,
    QlMain,
    QlFooter,
    QlContainerDirective,
    QlHeaderDirective,
    QlMainDirective,
    QlFooterDirective,
    QlAsideDirective,
  ],
  exports: [
    QlContainer,
    QlHeader,
    QlAside,
    QlMain,
    QlFooter,
    QlContainerDirective,
    QlHeaderDirective,
    QlMainDirective,
    QlFooterDirective,
    QlAsideDirective,
  ],
  imports: [CommonModule],
  entryComponents: [QlContainer],
})
export class QlContainerModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlContainerModule, providers: [] }
  }
}

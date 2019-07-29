import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlClassDirective } from './directives'
import { ExDynamicService, DocumentWrapper, WindowWrapper } from '../shared/services'
import { QlCSSValuePipe } from './pipe'
export function getDocument(): any { return document }
export function getWindow(): any { return window }

@NgModule({
  declarations: [
    QlCSSValuePipe,
    QlClassDirective,
  ],
  exports: [
    QlCSSValuePipe,
    QlClassDirective,
  ],
  imports: [CommonModule],
  entryComponents: [],
})
export class QlSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlSharedModule, providers: [
      ExDynamicService,
      QlCSSValuePipe,
      { provide: DocumentWrapper, useFactory: getDocument },
      { provide: WindowWrapper, useFactory: getWindow },
    ]}
  }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { QlModule } from '../../../qloud-angular.module'
import { ExDemoComponent } from './components'
import { QlDynamicDirective } from './directives'
import { HighLightPipe } from './pipe'

@NgModule({
  declarations: [
    QlDynamicDirective,
    ExDemoComponent,
    HighLightPipe,
  ],
  exports: [
    QlDynamicDirective,
    HighLightPipe,
    ExDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    QlModule,
  ],
  entryComponents: [],
})
export class ExSharedModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ExSharedModule, providers: [] }
  }
}

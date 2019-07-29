import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlStep } from './step'
import { QlSteps } from './steps'


@NgModule({
  declarations: [QlStep, QlSteps],
  exports: [QlStep, QlSteps],
  imports: [CommonModule],
  entryComponents: [QlStep, QlSteps],
})
export class QlStepsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlStepsModule, providers: [] }
  }
}

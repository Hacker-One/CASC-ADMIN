import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTooltipModule } from '../tooltip/module'
import { QlSliderButton } from './slider-button'
import { QlSlider } from './slider'


@NgModule({
  declarations: [QlSlider, QlSliderButton],
  exports: [QlSlider, QlSliderButton],
  imports: [CommonModule, QlTooltipModule],
  entryComponents: [QlSlider],
})
export class QlSliderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlSliderModule, providers: [] }
  }
}

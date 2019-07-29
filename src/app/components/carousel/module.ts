import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlCarousel } from './carousel'
import { QlCarouselItem } from './carousel-item'


@NgModule({
  declarations: [QlCarousel, QlCarouselItem],
  exports: [QlCarousel, QlCarouselItem],
  imports: [CommonModule],
  entryComponents: [QlCarousel],
})
export class QlCarouselModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlCarouselModule, providers: [] }
  }
}

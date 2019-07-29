import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlTag } from './tag'


@NgModule({
  declarations: [QlTag],
  exports: [QlTag],
  imports: [CommonModule],
  entryComponents: [QlTag],
})
export class QlTagsModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlTagsModule, providers: [] }
  }
}

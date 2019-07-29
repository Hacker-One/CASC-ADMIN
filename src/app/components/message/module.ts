import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlMessageContainer } from './message'
import { QlMessageService } from './message.service'

@NgModule({
  declarations: [QlMessageContainer],
  exports: [QlMessageContainer],
  imports: [CommonModule],
  entryComponents: [QlMessageContainer],
})
export class QlMessagesModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlMessagesModule, providers: [
      QlMessageService,
    ]}
  }
}

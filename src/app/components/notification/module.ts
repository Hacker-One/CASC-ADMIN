import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { QlNotificationContainer } from './notification'
import { QlNotificationService } from './notification.service'

@NgModule({
  declarations: [QlNotificationContainer],
  exports: [QlNotificationContainer],
  imports: [CommonModule],
  entryComponents: [QlNotificationContainer],
})
export class QlNotificationModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlNotificationModule, providers: [
      QlNotificationService,
    ]}
  }
}

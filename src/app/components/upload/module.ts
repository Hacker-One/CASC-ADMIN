import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { QlProgressModule } from '../progress/module'
import { QlButtonsModule } from '../button/module'
import { QlUploadRequest } from './upload.request'
import { QlUpload } from './upload'
import { QlUploadList } from './upload.list'
import { QlUploadDragger } from './upload.dragger'


@NgModule({
  declarations: [QlUpload, QlUploadList, QlUploadDragger],
  exports: [QlUpload],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    QlButtonsModule,
    QlProgressModule,
  ],
  entryComponents: [QlUpload],
})
export class QlUploadModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QlUploadModule, providers: [QlUploadRequest] }
  }
}

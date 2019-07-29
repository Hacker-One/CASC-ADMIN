import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from './http.service';
import { PathNavComponent } from './components/path-nav/path-nav.component';
import { QlModule } from '../../../app/qloud-angular.module';

@NgModule({
  imports: [
    CommonModule,
    QlModule
  ],
  declarations: [PathNavComponent],
  providers: [HttpService],
  exports: [PathNavComponent]
})
export class ShareModule { }

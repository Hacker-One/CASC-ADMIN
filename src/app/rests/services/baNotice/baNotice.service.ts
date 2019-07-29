import {Injectable} from '@angular/core';
import { QlMessageService } from '../../../qloud-angular.module'

@Injectable()
export class BaNoticeService {
  constructor(private message: QlMessageService,) {}
  public notice(type,message){
      this.message.setOptions({ showClose: true });
      this.message[type](message);
  }
}

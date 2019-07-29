import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpService } from '../../../../system/share/http.service';

@Component({
  selector: 'app-application-directory',
  templateUrl: './application-directory.component.html',
  styleUrls: ['./application-directory.component.scss']
})
export class ApplicationDirectoryComponent implements OnInit {

  directoryObj = {
    desc: '',
    pdesc: '',
    sortNum: null,
    rExtId: []
  }
  roleCheckBoxArr: Array<any> = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    const url = `http://qmsauthz.qloud-qloud.service.sd/applications/7012984/roles`;
    this.http.getCommonGet(url).subscribe(res => {
      console.log(res);
      this.roleCheckBoxArr = res.resources;
      this.roleCheckBoxArr.map(item => {
        return item['selected'] = false;
      })
    })
  }

  checkboxClicked(idx, evt) {
    console.log(evt);
    this.roleCheckBoxArr[idx].selected = true;
    console.log(this.roleCheckBoxArr);
  }

  save() {
    for (let item of this.roleCheckBoxArr) {
      if (item.selected) {
        this.directoryObj.rExtId.push(item.appExtId);
      }
    };
    console.log(this.directoryObj);
    
    const url = `${environment.apiURl.saveDirectory}`;
    this.http.getCommonPost(this.directoryObj, url).subscribe(res => {
      console.log(res);
    })
  }


}

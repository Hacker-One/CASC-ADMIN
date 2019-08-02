import { Component, OnInit } from '@angular/core';
import { GlobalState } from '../../../app/global.state';

@Component({
  selector: 'app-sys-siderbar',
  templateUrl: './sys-siderbar.component.html',
  styleUrls: ['./sys-siderbar.component.scss']
})
export class SysSiderbarComponent implements OnInit {
  menuList = [];
  collectCboxsArr = [];
  collectDialog = false;

  constructor(private _state: GlobalState) {
    this._state.subscribe('menu.data', (menuData) => {
      this.menuList = menuData;
      this.setCollectCboxsArr();
    })
  }

  ngOnInit() {
  }

  setCollectCboxsArr() {
    const arr = [];
    for (let element of this.menuList) {
      if (element.hasOwnProperty('resourcess')) {
        for (let item of element['resourcess']) {
          arr.push(item);
        }
      }
    };
    arr.map(item => {
      return item['selected'] = false;
    });
    this.collectCboxsArr = arr;
  }

  collect() {

  }

}

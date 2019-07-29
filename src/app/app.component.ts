import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

import { GlobalState } from './global.state';
import { BaImageLoaderService, BaThemeSpinner } from './rests/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  templateUrl:'./app.component.html'
})
export class App implements OnInit {

  isMenuCollapsed: boolean = false;

  constructor(private _state: GlobalState,
              private _imageLoader: BaImageLoaderService,
              private _spinner: BaThemeSpinner,
              private viewContainerRef: ViewContainerRef,
              private spinner:NgxSpinnerService) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }
  ngOnInit() {
    /** spinner starts on init */
    // this.spinner.show();
  }
  public ngAfterViewInit(): void {
    window.onload=()=>{
      // this.spinner.hide();
    }
  }


}

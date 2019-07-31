import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QlModule } from '../../qloud-angular.module'

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TextNewsComponent } from './text-news/text-news.component';
import { ImageNewsComponent } from './image-news/image-news.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    QlModule.forRoot(),
    HomeRoutingModule
  ],
  declarations: [HomeComponent, TextNewsComponent, ImageNewsComponent],
  entryComponents: [TextNewsComponent]
})
export class HomeModule { }

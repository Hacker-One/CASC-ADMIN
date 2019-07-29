import { Component, OnInit } from '@angular/core';
import { HttpService } from '../share/http.service';
import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
    
  }

  

}

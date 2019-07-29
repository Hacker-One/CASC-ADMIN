import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public pathFrom: any[];
    constructor(
        private activeRoute: ActivatedRoute,
    ) {}
    ngOnInit() {
        // console.log(this.activeRoute.pathFromRoot);
        this.getPathFrom();
    }
    getPathFrom():void{
        console.log(this.activeRoute.snapshot);
        let data = this.activeRoute.pathFromRoot;
        let i = 0;
        for(i; i < data.length; i++) {
            // console.log(data[i].snapshot);
            // console.log(data[i].snapshot);


        }
    }
}

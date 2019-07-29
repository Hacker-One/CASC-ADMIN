import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map';

@Injectable()
export class DocsService {
    constructor(private http:Http,) {}

    getChangeLogs(): Observable<any> {
        return this.http.get(`./assets/changelog.json`).map(res => res.json())
    }

}

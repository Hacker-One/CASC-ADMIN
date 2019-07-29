import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(protected hc: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }
  /**
  * http post method
  * @param {{}} params
  * @param {string} url
  * @returns {Observable<any>}
  */
  getCommonPost(params: {}, url: string): Observable<any> {
    return this.hc.post<{}>(url, params, this.httpOptions);
  }

  /**
   * http get method
   * @param {string} url
   * @returns {Observable<any>}
   */
  getCommonGet(url: string): Observable<any> {
    return this.hc.get<{}>(url);
  }


}

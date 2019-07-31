import { Injectable, EventEmitter } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { LocalStorage } from './local.storage';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(private spinner: NgxSpinnerService, public localStorage: LocalStorage, public router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 忽略请求接口的拦截
        const ignoreUrl = [];
        if (!ignoreUrl.includes(req.url)) {
            this.spinner.show();
        }
        return next.handle(req).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.spinner.hide();
            }
            if (event) {
                // 	if(event['body']){
                // 		if(event['body']['code']){
                // 			if(event['body']['code']=='unlogin'){
                // 				this.localStorage.remove("user");
                // 				this.router.navigate(['/']);
                // 			}
                // 		}
                // 	}
                console.log(event);
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                console.log(err);
                const started = Date.now();
                const elapsed = Date.now() - started;
                console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
                // debugger;
            }
            this.spinner.hide();
        });
    }
}

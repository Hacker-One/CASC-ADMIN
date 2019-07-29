"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaHttpInterceptorService = /** @class */ (function () {
    function BaHttpInterceptorService(http) {
        this.http = http;
    }
    /**
     * 统一发送请求
     * @param params
     * @param headers 头部信息
     * @param successFunc 成功回调函数
     * @param errFunc 失败回调函数
     * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
     */
    BaHttpInterceptorService.prototype.request = function (params, successFunc, errFunc, headers) {
        // POST请求（参数、返回值类型都是任意类型）
        if (params['method'] == 'post' || params['method'] == 'POST') {
            this.post(params['url'], params['data'], successFunc, errFunc, headers);
        }
        else if (params['method'] == 'put' || params['method'] == 'PUT') {
            this.put(params['url'], params['data'], successFunc, errFunc, headers);
        }
        else if (params['delete'] == 'put' || params['method'] == 'DELETE') {
            this.delete(params['url'], successFunc, errFunc, headers);
        }
        else { // 其他请求
            return this.get(params['url'], successFunc, errFunc, headers);
        }
    };
    /**
     * get请求
     * @param url 接口地址
     * @param headers 头部信息
     * @param successFunc 成功回调函数
     * @param errFunc 失败回调函数
     */
    BaHttpInterceptorService.prototype.get = function (url, successFunc, errFunc, headers) {
        return this.http.get(url, { headers: headers })
            .subscribe(successFunc, errFunc);
    };
    /**
     * post请求
     * @param url 接口地址
     * @param params body信息
     * @param headers 头部信息
     * @param successFunc 成功回调函数
     * @param errFunc 失败回调函数
     * @returns {Promise<R>|Promise<U>}
     */
    BaHttpInterceptorService.prototype.post = function (url, params, successFunc, errFunc, headers) {
        return this.http.post(url, params, { headers: headers })
            .subscribe(successFunc, errFunc);
    };
    /**
     * put请求
     * @param url 接口地址
     * @param params body信息
     * @param headers 头部信息
     * @param successFunc 成功回调函数
     * @param errFunc 失败回调函数
     * @returns {Promise<R>|Promise<U>}
     */
    BaHttpInterceptorService.prototype.put = function (url, params, successFunc, errFunc, headers) {
        return this.http.put(url, params, { headers: headers })
            .subscribe(successFunc, errFunc);
    };
    /**
     * delete请求
     * @param url 接口地址
     * @param headers 头部信息
     * @param successFunc 成功回调函数
     * @param errFunc 失败回调函数
     * @returns {Promise<R>|Promise<U>}
     */
    BaHttpInterceptorService.prototype.delete = function (url, successFunc, errFunc, headers) {
        return this.http.delete(url, { headers: headers })
            .subscribe(successFunc, errFunc);
    };
    BaHttpInterceptorService = __decorate([
        core_1.Injectable()
    ], BaHttpInterceptorService);
    return BaHttpInterceptorService;
}());
exports.BaHttpInterceptorService = BaHttpInterceptorService;

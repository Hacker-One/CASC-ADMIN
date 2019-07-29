import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";

@Injectable()
export class BaHttpInterceptorService {
	constructor(private http: HttpClient) {
	}
	/**
	 * 统一发送请求
	 * @param params
	 * @param headers 头部信息
	 * @param successFunc 成功回调函数
	 * @param errFunc 失败回调函数
	 * @returns {Promise<{success: boolean, msg: string}>|Promise<R>}
	 */
	public request(params: any,successFunc,errFunc,options?):void {
		// POST请求（参数、返回值类型都是任意类型）
		if (params['method'] == 'post' || params['method'] == 'POST') {
			this.post(params['url'], params['data'],successFunc,errFunc,options);
		} else if(params['method'] == 'put' || params['method'] == 'PUT') {
			this.put(params['url'], params['data'],successFunc,errFunc,options);
		}else if(params['delete'] == 'put' || params['method'] == 'DELETE') {
			this.delete(params['url'], successFunc,errFunc,options);
		} else { // 其他请求
			return this.get(params['url'],successFunc,errFunc,options);
		}
	}

	/**
	 * get请求
	 * @param url 接口地址
	 * @param headers 头部信息
	 * @param successFunc 成功回调函数
	 * @param errFunc 失败回调函数
	 */
	public get(url: string,successFunc,errFunc,options?): any {
		return this.http.get(url,options)
			.subscribe(
				successFunc,
				errFunc
			);
	}

	/**
	 * post请求
	 * @param url 接口地址
	 * @param params body信息
	 * @param headers 头部信息
	 * @param successFunc 成功回调函数
	 * @param errFunc 失败回调函数
	 * @returns {Promise<R>|Promise<U>}
	 */
	public post(url: string, params: any,successFunc,errFunc, options?) {
		return this.http.post(url, params,options)
			.subscribe(
				successFunc,
				errFunc
			);
	}
	/**
	 * put请求
	 * @param url 接口地址
	 * @param params body信息
	 * @param headers 头部信息
	 * @param successFunc 成功回调函数
	 * @param errFunc 失败回调函数
	 * @returns {Promise<R>|Promise<U>}
	 */
	public put(url: string, params: any,successFunc,errFunc,options?) {
		return this.http.put(url, params,options)
			.subscribe(
				successFunc,
				errFunc
			);
	}
	/**
	 * delete请求
	 * @param url 接口地址
	 * @param headers 头部信息
	 * @param successFunc 成功回调函数
	 * @param errFunc 失败回调函数
	 * @returns {Promise<R>|Promise<U>}
	 */
	public delete(url: string,successFunc,errFunc,options?) {
		return this.http.delete(url,options)
			.subscribe(
				successFunc,
				errFunc
			);
	}

}

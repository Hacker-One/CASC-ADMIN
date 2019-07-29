import { Injectable } from '@angular/core';
import * as SocketIO from 'socket.io-client';
import {Observable, Subject} from "rxjs";
@Injectable()
export class WebsocketService {
    io;
    message$: Observable<string>;
    private _message$ = new Subject<string>();
    constructor() {

        // 这里为什么进行额外的转换，请看历史文章： Rxjs 之 asObservable
        this.message$ = this._message$.asObservable();
    }
    listionSocket(event: string,callback){
        // 客户端在监听服务器推送的 指定时间事件。
        this.io.off(event);//先关闭以前的
        this.io.on(event, callback);
    }
    sendMessage(event: string,message: string) {
        // 对比原生的websocket实现，你可以 emit 指定类型的事件，服务器只要在监听
        // 你指定的事件，就会做响应的处理。普通的websocket 里则要通过的发送的信息中
        // 添加额外的类型信息，服务器通过解析才知道这个请求对应的处理方式。
        // 这里服务器在监听着 event 事件。
        this.io.emit(event, message);
    }
    //连接socket
    connect(url){
        this.io = SocketIO(url,{'autoConnect':false});
        this.io.emit('connection');
        this.io.open();
    }
    //断开socket
    disconnect(){
        this.io.disconnect();
    }
}


"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SocketIO = require("socket.io-client");
var rxjs_1 = require("rxjs");
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this._message$ = new rxjs_1.Subject();
        // 这里为什么进行额外的转换，请看历史文章： Rxjs 之 asObservable
        this.message$ = this._message$.asObservable();
    }
    WebsocketService.prototype.listionSocket = function (event, callback) {
        // 客户端在监听服务器推送的 指定时间事件。
        this.io.off(event); //先关闭以前的
        this.io.on(event, callback);
    };
    WebsocketService.prototype.sendMessage = function (event, message) {
        // 对比原生的websocket实现，你可以 emit 指定类型的事件，服务器只要在监听
        // 你指定的事件，就会做响应的处理。普通的websocket 里则要通过的发送的信息中
        // 添加额外的类型信息，服务器通过解析才知道这个请求对应的处理方式。
        // 这里服务器在监听着 event 事件。
        this.io.emit(event, message);
    };
    //连接socket
    WebsocketService.prototype.connect = function (url) {
        this.io = SocketIO(url, { 'autoConnect': false });
        this.io.emit('connection');
        this.io.open();
    };
    //断开socket
    WebsocketService.prototype.disconnect = function () {
        this.io.disconnect();
    };
    WebsocketService = __decorate([
        core_1.Injectable()
    ], WebsocketService);
    return WebsocketService;
}());
exports.WebsocketService = WebsocketService;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaNoticeService = /** @class */ (function () {
    function BaNoticeService(toastrService) {
        this.toastrService = toastrService;
    }
    BaNoticeService.prototype.notice = function (type, message, title) {
        var options = { toastClass: 'opacity', timeOut: 3000 };
        if (type == "error") {
            this.opacityShowError(message, title, options);
        }
        else if (type == "success") {
            this.opacityShowSuccess(message, title, options);
        }
        else if (type == "warning") {
            this.opacityShowWarning(message, title, options);
        }
        else {
            this.opacityShowInfo(message, title, options);
        }
    };
    BaNoticeService.prototype.opacityShowSuccess = function (message, title, options) {
        this.toastrService.success(message, title, options);
    };
    BaNoticeService.prototype.opacityShowError = function (message, title, options) {
        this.toastrService.error(message, title, options);
    };
    BaNoticeService.prototype.opacityShowInfo = function (message, title, options) {
        this.toastrService.info(message, title, options);
    };
    BaNoticeService.prototype.opacityShowWarning = function (message, title, options) {
        this.toastrService.warning(message, title, options);
    };
    BaNoticeService = __decorate([
        core_1.Injectable()
    ], BaNoticeService);
    return BaNoticeService;
}());
exports.BaNoticeService = BaNoticeService;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RandomWord = /** @class */ (function () {
    function RandomWord() {
    }
    /*
     ** randomWord 产生任意长度随机字母数字组合
     ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
     ** wushaohua 2018-06-07
     */
    RandomWord.get = function (randomFlag, min, max) {
        var str = "", range = min, arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            var pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    };
    /*生成随机数
     ** size 生成的uuid长度为4的倍数
     ** wushaohua 2018-06-07
     */
    RandomWord.getUUID = function (size) {
        if (!size) {
            size = 4;
        }
        var uuid = "";
        for (var i = 0; i < size; i++) {
            uuid = uuid + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return uuid;
    };
    return RandomWord;
}());
exports.RandomWord = RandomWord;

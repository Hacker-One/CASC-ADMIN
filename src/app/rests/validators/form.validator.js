"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormValidators = /** @class */ (function () {
    function FormValidators() {
    }
    /*校验是否含有特殊符号
     ** text 需要校验的字符串
     ** wushaohua 2018-06-07
     */
    FormValidators.specialText = function (text) {
        var pat = new RegExp("[^a-zA-Z0-9\_\u4e00-\u9fa5]", "i");
        return pat.test(text);
    };
    /*校验是否为ip
     ** ip 需要校验的字符串
     ** wushaohua 2018-06-07
     */
    FormValidators.ip = function (ip) {
        var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        return reg.test(ip);
    };
    /*校验是否为port
    ** port 需要校验的字符串
    ** wushaohua 2018-06-07
    */
    FormValidators.port = function (port) {
        var reg = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-5]{2}[0-3][0-5])$/;
        return reg.test(port);
    };
    /*校验是否为数字
    ** num 需要校验的字符串
    ** wushaohua 2018-06-07
    */
    FormValidators.number = function (num) {
        var reg = /^\d+(\.\d+)?$/;
        return reg.test(num);
    };
    /*校验是整数
    ** num 需要校验的字符串
    ** wushaohua 2018-06-07
    */
    FormValidators.numberZ = function (num) {
        var reg = /^[-\+]?\d+$/;
        return reg.test(num);
    };
    /*校验是大于-1整数
   ** num 需要校验的字符串
   ** wushaohua 2018-06-07
   */
    FormValidators.numberZ1 = function (num) {
        var reg = /^(-1|\d+)$/;
        return reg.test(num);
    };
    /*校验是大于0整数
  ** num 需要校验的字符串
  ** wushaohua 2018-06-07
  */
    FormValidators.numberZ2 = function (num) {
        var reg = /^[1-9]\d*$/;
        return reg.test(num);
    };
    /*校验是否为url
  ** url 需要校验的字符串
  ** wushaohua 2018-06-07
  */
    FormValidators.isUrl = function (url) {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        return reg.test(url);
    };
    /**
     * 大小写字母转化
     * @param  {[type]} str  需要转化的字符串
     * @param  {[type]} type 1: 首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
     * @return {[type]}      转化后的字符串
     * changeCase('asdasd', 1) --> Asdasd
     */
    FormValidators.changeCase = function (str, type) {
        if (!str)
            return '';
        function ToggleCase(str) {
            var itemText = "";
            str.split("").forEach(function (item) {
                if (/^([a-z]+)/.test(item)) {
                    itemText += item.toUpperCase();
                }
                else if (/^([A-Z]+)/.test(item)) {
                    itemText += item.toLowerCase();
                }
                else {
                    itemText += item;
                }
            });
            return itemText;
        }
        switch (type) {
            case 1:
                return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                    return v1.toUpperCase() + v2;
                });
            case 2:
                return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                    return v1.toLowerCase() + v2;
                });
            case 3:
                return ToggleCase(str);
            case 4:
                return str.toUpperCase();
            case 5:
                return str.toLowerCase();
            default:
                return str;
        }
    };
    /**
     * [generateUUID 返回一串序列码]
     * @return {String} [uuid]
     */
    FormValidators.generateUUID = function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return FormValidators;
}());
exports.FormValidators = FormValidators;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EqualPasswordsValidator = /** @class */ (function () {
    function EqualPasswordsValidator() {
    }
    EqualPasswordsValidator.validate = function (firstField, secondField) {
        return function (c) {
            return (c.controls && c.controls[firstField].value == c.controls[secondField].value) ? null : {
                passwordsEqual: {
                    valid: false
                }
            };
        };
    };
    return EqualPasswordsValidator;
}());
exports.EqualPasswordsValidator = EqualPasswordsValidator;

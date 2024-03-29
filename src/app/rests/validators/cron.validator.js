"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CronValidators = /** @class */ (function () {
    function CronValidators() {
    }
    /**
     * Validates a cron expression.
     *
     * @param cronExpression The expression to validate
     * @return True is expression is valid
     */
    CronValidators.cronValidate = function (cronExpression) {
        //alert("校验函数的开始！");
        var cronParams = cronExpression.split(" ");
        if (cronParams.length < 6 || cronParams.length > 7) {
            return false;
        }
        //CronTrigger cronTrigger = new CronTrigger();
        //cronTrigger.setCronExpression( cronExpression );
        if (cronParams[3] == "?" || cronParams[5] == "?") {
            //Check seconds param
            if (!this.checkSecondsField(cronParams[0])) {
                return false;
            }
            //Check minutes param
            if (!this.checkMinutesField(cronParams[1])) {
                return false;
            }
            //Check hours param
            if (!this.checkHoursField(cronParams[2])) {
                return false;
            }
            //Check day-of-month param
            if (!this.checkDayOfMonthField(cronParams[3])) {
                return false;
            }
            //Check months param
            if (!this.checkMonthsField(cronParams[4])) {
                return false;
            }
            //Check day-of-week param
            if (!this.checkDayOfWeekField(cronParams[5])) {
                return false;
            }
            //Check year param
            if (cronParams.length == 7) {
                if (!this.checkYearField(cronParams[6])) {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    };
    CronValidators.checkSecondsField = function (secondsField) {
        return this.checkField(secondsField, 0, 59);
    };
    CronValidators.checkField = function (secondsField, minimal, maximal) {
        if (secondsField.indexOf("-") > -1) {
            var startValue = secondsField.substring(0, secondsField.indexOf("-"));
            var endValue = secondsField.substring(secondsField.indexOf("-") + 1);
            if (!(this.checkIntValue(startValue, minimal, maximal, true) && this.checkIntValue(endValue, minimal, maximal, true))) {
                return false;
            }
            try {
                var startVal = parseInt(startValue, 10);
                var endVal = parseInt(endValue, 10);
                return endVal > startVal;
            }
            catch (e) {
                return false;
            }
        }
        else if (secondsField.indexOf(",") > -1) {
            return this.checkListField(secondsField, minimal, maximal);
        }
        else if (secondsField.indexOf("/") > -1) {
            return this.checkIncrementField(secondsField, minimal, maximal);
        }
        else if (secondsField.indexOf("*") != -1) {
            return true;
        }
        else {
            return this.checkIntValue(secondsField, minimal, maximal);
        }
    };
    CronValidators.checkIntValue = function (value, minimal, maximal, checkExtremity) {
        try {
            var val = parseInt(value, 10);
            //判断是否为整数
            if (value == val) {
                if (checkExtremity) {
                    if (val < minimal || val > maximal) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        catch (e) {
            return false;
        }
    };
    CronValidators.checkMinutesField = function (minutesField) {
        return this.checkField(minutesField, 0, 59);
    };
    CronValidators.checkHoursField = function (hoursField) {
        return this.checkField(hoursField, 0, 23);
    };
    CronValidators.checkDayOfMonthField = function (dayOfMonthField) {
        if (dayOfMonthField == "?") {
            return true;
        }
        if (dayOfMonthField.indexOf("L") >= 0) {
            return this.checkFieldWithLetter(dayOfMonthField, "L", 1, 7, -1, -1);
        }
        else if (dayOfMonthField.indexOf("W") >= 0) {
            return this.checkFieldWithLetter(dayOfMonthField, "W", 1, 31, -1, -1);
        }
        else if (dayOfMonthField.indexOf("C") >= 0) {
            return this.checkFieldWithLetter(dayOfMonthField, "C", 1, 31, -1, -1);
        }
        else {
            return this.checkField(dayOfMonthField, 1, 31);
        }
    };
    CronValidators.checkMonthsField = function (monthsField) {
        /*        monthsField = StringUtils.replace( monthsField, "JAN", "1" );
                monthsField = StringUtils.replace( monthsField, "FEB", "2" );
                monthsField = StringUtils.replace( monthsField, "MAR", "3" );
                monthsField = StringUtils.replace( monthsField, "APR", "4" );
                monthsField = StringUtils.replace( monthsField, "MAY", "5" );
                monthsField = StringUtils.replace( monthsField, "JUN", "6" );
                monthsField = StringUtils.replace( monthsField, "JUL", "7" );
                monthsField = StringUtils.replace( monthsField, "AUG", "8" );
                monthsField = StringUtils.replace( monthsField, "SEP", "9" );
                monthsField = StringUtils.replace( monthsField, "OCT", "10" );
                monthsField = StringUtils.replace( monthsField, "NOV", "11" );
                monthsField = StringUtils.replace( monthsField, "DEC", "12" );*/
        monthsField.replace("JAN", "1");
        monthsField.replace("FEB", "2");
        monthsField.replace("MAR", "3");
        monthsField.replace("APR", "4");
        monthsField.replace("MAY", "5");
        monthsField.replace("JUN", "6");
        monthsField.replace("JUL", "7");
        monthsField.replace("AUG", "8");
        monthsField.replace("SEP", "9");
        monthsField.replace("OCT", "10");
        monthsField.replace("NOV", "11");
        monthsField.replace("DEC", "12");
        return this.checkField(monthsField, 1, 31);
    };
    CronValidators.checkDayOfWeekField = function (dayOfWeekField) {
        /*        dayOfWeekField = StringUtils.replace( dayOfWeekField, "SUN", "1" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "MON", "2" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "TUE", "3" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "WED", "4" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "THU", "5" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "FRI", "6" );
                dayOfWeekField = StringUtils.replace( dayOfWeekField, "SAT", "7" );*/
        dayOfWeekField.replace("SUN", "1");
        dayOfWeekField.replace("MON", "2");
        dayOfWeekField.replace("TUE", "3");
        dayOfWeekField.replace("WED", "4");
        dayOfWeekField.replace("THU", "5");
        dayOfWeekField.replace("FRI", "6");
        dayOfWeekField.replace("SAT", "7");
        if (dayOfWeekField == "?") {
            return true;
        }
        if (dayOfWeekField.indexOf("L") >= 0) {
            return this.checkFieldWithLetter(dayOfWeekField, "L", 1, 7, -1, -1);
        }
        else if (dayOfWeekField.indexOf("C") >= 0) {
            return this.checkFieldWithLetter(dayOfWeekField, "C", 1, 7, -1, -1);
        }
        else if (dayOfWeekField.indexOf("#") >= 0) {
            return this.checkFieldWithLetter(dayOfWeekField, "#", 1, 7, 1, 5);
        }
        else {
            return this.checkField(dayOfWeekField, 1, 7);
        }
    };
    CronValidators.checkYearField = function (yearField) {
        return this.checkField(yearField, 1970, 2099);
    };
    CronValidators.checkFieldWithLetter = function (value, letter, minimalBefore, maximalBefore, minimalAfter, maximalAfter) {
        var canBeAlone = false;
        var canHaveIntBefore = false;
        var canHaveIntAfter = false;
        var mustHaveIntBefore = false;
        var mustHaveIntAfter = false;
        if (letter == "L") {
            canBeAlone = true;
            canHaveIntBefore = true;
            canHaveIntAfter = false;
            mustHaveIntBefore = false;
            mustHaveIntAfter = false;
        }
        if (letter == "W" || letter == "C") {
            canBeAlone = false;
            canHaveIntBefore = true;
            canHaveIntAfter = false;
            mustHaveIntBefore = true;
            mustHaveIntAfter = false;
        }
        if (letter == "#") {
            canBeAlone = false;
            canHaveIntBefore = true;
            canHaveIntAfter = true;
            mustHaveIntBefore = true;
            mustHaveIntAfter = true;
        }
        var beforeLetter = "";
        var afterLetter = "";
        if (value.indexOf(letter) >= 0) {
            beforeLetter = value.substring(0, value.indexOf(letter));
        }
        if (!value.endsWith(letter)) {
            afterLetter = value.substring(value.indexOf(letter) + 1);
        }
        if (value.indexOf(letter) >= 0) {
            if (letter == value) {
                return canBeAlone;
            }
            if (canHaveIntBefore) {
                if (mustHaveIntBefore && beforeLetter.length == 0) {
                    return false;
                }
                if (!this.checkIntValue(beforeLetter, minimalBefore, maximalBefore, true)) {
                    return false;
                }
            }
            else {
                if (beforeLetter.length > 0) {
                    return false;
                }
            }
            if (canHaveIntAfter) {
                if (mustHaveIntAfter && afterLetter.length == 0) {
                    return false;
                }
                if (!this.checkIntValue(afterLetter, minimalAfter, maximalAfter, true)) {
                    return false;
                }
            }
            else {
                if (afterLetter.length > 0) {
                    return false;
                }
            }
        }
        return true;
    };
    /*    public static checkIntValue(value, minimal, maximal) {
            return checkIntValue(value, minimal, maximal, true);
        } */
    CronValidators.checkIncrementField = function (value, minimal, maximal) {
        var start = value.substring(0, value.indexOf("/"));
        var increment = value.substring(value.indexOf("/") + 1);
        if (!("*" == start)) {
            return this.checkIntValue(start, minimal, maximal, true) && this.checkIntValue(increment, minimal, maximal, false);
        }
        else {
            return this.checkIntValue(increment, minimal, maximal, true);
        }
    };
    CronValidators.checkListField = function (value, minimal, maximal) {
        var st = value.split(",");
        var values = new Array(st.length);
        for (var j = 0; j < st.length; j++) {
            values[j] = st[j];
        }
        var previousValue = -1;
        for (var i = 0; i < values.length; i++) {
            var currentValue = values[i];
            if (!this.checkIntValue(currentValue, minimal, maximal, true)) {
                return false;
            }
            try {
                var val = parseInt(currentValue, 10);
                if (val <= previousValue) {
                    return false;
                }
                else {
                    previousValue = val;
                }
            }
            catch (e) {
                // we have always an int
            }
        }
        return true;
    };
    return CronValidators;
}());
exports.CronValidators = CronValidators;

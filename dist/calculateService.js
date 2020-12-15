"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateService = void 0;
var CalculateService = /** @class */ (function () {
    function CalculateService() {
    }
    CalculateService.prototype.calculateDuration = function (arrayOfItem) {
        if (CalculateService.newestValueGreatherThanOddestValue(arrayOfItem)) {
            return null;
        }
        return arrayOfItem[arrayOfItem.length - 1] - arrayOfItem[0];
    };
    CalculateService.prototype.calculateMedian = function (array) {
        var middleOfArray = [];
        if (CalculateService.isArrayLengthIsEven(array)) {
            CalculateService.findMiddleOfArray(middleOfArray, array);
            return Math.floor((middleOfArray[0] + middleOfArray[middleOfArray.length - 1]) / 2);
        }
        else if (CalculateService.isArrayLengthIsOdd(array)) {
            return array[array.length - 1] - (array[(array.length + 1) / 2]);
        }
        return 0;
    };
    CalculateService.findMiddle = function (array) {
        return array.length % 2 === 0;
    };
    CalculateService.newestValueGreatherThanOddestValue = function (arrayOfelements) {
        return arrayOfelements[0] > arrayOfelements[arrayOfelements.length - 1];
    };
    CalculateService.isArrayLengthIsEven = function (arrayOfElements) {
        return arrayOfElements.length % 2 === 0;
    };
    CalculateService.isArrayLengthIsOdd = function (arrayOfElements) {
        return arrayOfElements.length % 2 === 1;
    };
    CalculateService.findMiddleOfArray = function (arrayMiddlesValues, array) {
        arrayMiddlesValues.push(arrayMiddlesValues[arrayMiddlesValues.length / 2], array[array.length / 2 + 1]);
    };
    return CalculateService;
}());
exports.CalculateService = CalculateService;

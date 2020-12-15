"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildUrl = void 0;
var buildUrl = /** @class */ (function () {
    function buildUrl(data, service) {
        this.data = data;
        this.calculateService = service;
    }
    buildUrl.prototype.build = function () {
        var duration = this.calculateService.calculateDuration(this.data.timestamps);
        var median = this.calculateService.calculateMedian(this.data.timestamps);
        var name = this.data.name;
        return "https://server/record?name=" + name + "&duration=" + duration + "0s&median=" + median;
    };
    return buildUrl;
}());
exports.buildUrl = buildUrl;

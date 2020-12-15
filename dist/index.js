"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buildUrl_1 = require("./buildUrl");
var calculateService_1 = require("./calculateService");
var data = {
    name: 'Cédric',
    timestamps: [
        1508349990,
        1508350000,
        1508357300,
        1508367300,
        1508397300,
        1508407300,
    ]
};
var builder = new buildUrl_1.buildUrl(data, new calculateService_1.CalculateService());
console.log(builder.build());

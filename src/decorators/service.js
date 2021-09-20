"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.service = void 0;
var inversify_1 = require("inversify");
var constants_1 = require("../constants");
// 全局service服务 与 controller的path相对应，自动将服务放入到控制器上下文中
var service = function (controllerPath) {
    return function (target) {
        (0, inversify_1.injectable)()(target);
        var data = {
            target: target,
            pathArray: controllerPath
        };
        var Services = Reflect.getMetadata(constants_1.METADATA_KEY.service, Reflect) || [];
        var newMetada = __spreadArray([data], Services, true);
        Reflect.defineMetadata(constants_1.METADATA_KEY.service, newMetada, Reflect);
    };
};
exports.service = service;

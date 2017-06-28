"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wdio_workflo_1 = require("wdio-workflo");
////////////////////////////////////////////////////////////////////////
// EDIT THIS AREA IN ORDER FOR INTELLISENSE TO SUGGEST STEPS BY NAMES
////////////////////////////////////////////////////////////////////////
const login_step_1 = require("~/steps/login.step");
const logout_step_1 = require("./logout.step");
// create a single steps object that merges all single step definitions
const Steps = Object.assign({}, login_step_1.default, logout_step_1.default);
////////////////////////////////////////////////////////////////////////
const steps = new Proxy(Steps, {
    get: (target, name, receiver) => wdio_workflo_1.stepsGetter(target, name, receiver),
    set: (target, name, value) => wdio_workflo_1.stepsSetter(target, name, value)
});
exports.default = steps;
//# sourceMappingURL=index.js.map
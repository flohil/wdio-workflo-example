"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wdio_workflo_1 = require("wdio-workflo");
const types_1 = require("../types");
const index_1 = require("./index");
const LoginSteps = {
    // params contains both the arguments to step function and the callback function which is passed the result from the step function
    // there is no need to manually invoke the callback function from within the step function
    "login as %{username}": (params) => new wdio_workflo_1.ParameterizedStep(params, (credentials) => {
        console.log("logging in");
        return new types_1.User(params.arg, 23);
    }),
    "login and logout as %{username}": (params) => new wdio_workflo_1.ParameterizedStep(params, (credentials) => {
        index_1.default["login as %{username}"]({ arg: params.arg, cb: (user) => {
                console.log("logged in as", user);
            } }).execute();
        //Steps["logout"]({}).execute()
    })
};
exports.default = LoginSteps;
//# sourceMappingURL=login.step.js.map
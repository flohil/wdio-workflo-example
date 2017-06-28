"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wdio_workflo_1 = require("wdio-workflo");
const LogoutSteps = {
    // write empty object so that user does not have to
    "logout": (params) => new wdio_workflo_1.ParameterizedStep(params, () => {
        console.log("logging out");
        /*browser.url('https://duckduckgo.com/')
        browser.setValue('#search_form_input_homepage', 'WebdriverIO')
        browser.click('#search_button_homepagesss')*/
    }),
    "variable vars": (params) => new wdio_workflo_1.ParameterizedStep(params, () => {
        console.log("variable vars:", params);
    })
};
exports.default = LogoutSteps;
//# sourceMappingURL=logout.step.js.map
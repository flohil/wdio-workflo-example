"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { when, given, verify } from './testcase'
const steps_1 = require("../steps");
let adminCredentials = { username: "admin", password: "password" };
suite("My second suite", {}, () => {
    testcase("bla test", {}, () => {
        given(steps_1.default["login as %{username}"]({ arg: adminCredentials }))
            .and(steps_1.default["logout"]({}))
            .when(steps_1.default["variable vars"]({ arg: { arg1: 44, arg2: "asdf" }, cb: () => {
                const title = browser.getTitle();
                verify({ "1.1.5": [1] }, (expected = 1, actual = 3) => {
                    expect(actual).toBe(expected);
                });
            } }));
    });
});
//# sourceMappingURL=other.tc.js.map
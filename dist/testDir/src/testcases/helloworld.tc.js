"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { when, given, verify } from './testcase'
const steps_1 = require("../steps");
let adminCredentials = { username: 'admin', password: 'password' };
suite("My first suite", {}, () => {
    // testcase("login test", {}, () => {
    //   given(steps["login as %{username}"]({arg: adminCredentials, cb: () => {
    //     browser.url('https://duckduckgo.com/')
    //   }}))
    //   .when(steps["variable vars"]({ arg: {arg1: 3, arg2: "test"}, cb: () => {
    //     browser.url('https://duckduckgo.com/')
    //     browser.setValue('#search_form_input_homepage', 'WebdriverIO')
    //     browser.click('#search_button_homepagesss')
    //   }}))
    //   .and(steps["logout"]({cb: () => {
    //     // attention, function will be executed by specs later - must ensure that passed in values are evaluated immediatly
    //     // hence the default parameter notation!
    //     verify({"7.1.2": 1}, (expected: string = 'asdf', actual: string = browser.getTitle()) => {
    //       expect(actual).toMatch(expected)
    //       expect(actual.length).toBeGreaterThan(0)
    //     })
    //     browser.url('https://duckduckgo.com/')
    //     console.log(browser.getTitle())
    //   }}))
    // })
    // testcase("logout test", {}, () => {
    //   given(steps["login as %{username}"]({arg: adminCredentials}))
    //   .and(steps["logout"]({}))
    //   .when(steps["variable vars"]({ arg: {arg1: 44, arg2: "asdf"}, cb: () => {
    //     const title = browser.getTitle()
    //     /*browser.url('https://duckduckgo.com/')
    //     browser.setValue('#search_form_input_homepage', 'WebdriverIO')
    //     browser.click('#search_button_homepagesss')*/
    //     verify({"7.0.1": [1]}, (expected = 1, actual = 2) => {
    //       expect(actual).toBe(expected)
    //       expect('other').toMatch('this')
    //     })
    //   }}))
    //   .and(steps["variable vars"]({ arg: {arg1: 44, arg2: "asdf"}, cb: () => {
    //     verify({"7.0.1": [2]}, () => {
    //       expect(true).toBe(true)
    //     })
    //   }}))
    //   .and(steps["variable vars"]({ arg: {arg1: 44, arg2: "asdf"}, cb: () => {
    //     verify({"7.0.1": [3]}, () => {
    //       expect(true).toBe(false)
    //     })
    //   }}))
    // })
    testcase("both test", {}, () => {
        given(steps_1.default["login as %{username}"]({ arg: adminCredentials }))
            .when(steps_1.default["login and logout as %{username}"]({ arg: adminCredentials, cb: () => {
                verify({ "7.0.1": [2] }, (expected = 1, actual = 2) => {
                    expect(1).toBe(2);
                    expect('other').toEqual('jolo');
                });
                verify({ "7.0.1": [2] }, (expected = 1, actual = 2) => {
                    expect(true).toBe(true);
                });
                verify({ "7.0.1": [3] }, (expected = 1, actual = 2) => {
                    expect(true).toBe(true);
                });
                verify({ "7.0.1": [2] }, (expected = 1, actual = 2) => {
                    expect(true).toBe(false);
                });
            } }));
    });
});
/*when(step["login as %{username}"]({
  arg: adminCredentials, cb: (user: IUser) => {
    verify(user)
  }
}))
.and(step["login as %{username}"]({
  arg: adminCredentials, cb: (user: IUser) => {
    verify(user)
  }
}))
.and(step["logout"]({}))
.finish()

when(step["login and logout as %{username}"]({arg: adminCredentials})).finish()

given(step["login as %{username}"]({
  arg: adminCredentials, cb: (user: IUser) => {
    when(step["logout"]({}))
    .and(step["variable vars"]({arg: {arg1: 1, arg2: "asdf"}}))
    .finish()
  }
}))*/ 
//# sourceMappingURL=helloworld.tc.js.map
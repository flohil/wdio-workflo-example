import { InstallOpts, StartOpts  } from 'selenium-standalone'
import { DesiredCapabilities, Options, Suite, Test } from 'webdriverio'

interface Error {
  stack?: string;
}

/**
 * Timeouts in milliseconds.
 */
interface ITimeouts {
  [key: string]: number
  default?: number
}

/**
 * Intervals in milliseconds.
 */
interface IIntervals {
  [key: string]: number
  default?: number
}

interface ICapabilities extends DesiredCapabilities {
  [key: string]: any,
}

interface IConfig extends Options {

}

interface IWorkfloConfig {
  /**
   * Root directory for all test artifacts of wdio-workflo.
   */
  testDir: string
  /**
   * Set a base URL in order to shorten url command calls. If your `url` parameter starts
   * with `/`, the base url gets prepended, not including the path portion of your baseUrl.
   * If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
   * gets prepended directly.
   */
  baseUrl: string
  /**
   * Protocol to use when communicating with the Selenium standalone server (or driver)
   * @default http
   */
  protocol?: string,
  /**
   * Host of your WebDriver server.
   * @default 127.0.0.1
   */
  host?: string,
  /**
   * Port your WebDriver server is on.
   * @default 4444
   */
  port?: number,
  /**
   * Path to WebDriver server.
   * @default  /wd/hub
   */
  path?: string
  /**
   * WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
   * should work too though). These services define specific user and key (or access key)
   * values you need to put in here in order to connect to these services.
   *
   * @default undefined
   */
  user?: string
  /**
   * WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
   * should work too though). These services define specific user and key (or access key)
   * values you need to put in here in order to connect to these services.
   *
   * @default undefined
   */
  key?: string
  /**
   * http(s).Agent instance to use
   *
   * @default new http(s).Agent({ keepAlive: true })
   */
  agent?: Object
  /**
   * An HTTP proxy to be used. Supports proxy Auth with Basic Auth, identical to support for the url
   * parameter (by embedding the auth info in the uri)
   *
   * @default undefined (no proxy used)
   */
  proxy?: String,
  /**
   * Width of the browser window in pixels.
   */
  width: number,
  /**
   * Height of the browser window in pixels.
   */
  height: number,
  /**
   * Defines the capabilities you want to run in your Selenium session.
   * See https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities for a list of the available capabilities.
   *
   * Please be aware that wdio-workflo's reporting only supports one single instance at a time.
   * Therefore, the "maxInstance" property will always be set to 1.
   */
  capabilities: ICapabilities
  /**
   * Webdriverio Services to run for test execution.
   *
   * See http://webdriver.io/guide for more information.
   *
   * @default ['selenium-standalone']
   */
  services?: string[]
  /**
   * If set to true, Node debugging via the chrome extension "Node-Inspector Manager" is enabled.
   * The test process will then automatically connect to chrome's dedicated dev tools and break on
   * "debugger" statements.
   *
   * In order for this to work properly, a chrome browser must be installed on the system
   * and the chrome extension "Node-Inspector Manager" needs to be installed.
   *
   * Sometimes tests might hang after running with debug enabled.
   * In this case, close all chrome processes, open a new chrome window,
   * turn "Node-Inspector Menu" from "Auto" to "Manual" and again to "Auto"
   * and then restarting the tests should resolve the problem.
   *
   * The following settings are recommended for the "Node-Inspector Manager" extension:
   *
   * (Main Menu)
   * - Host: localhost
   * - Port: 9229
   * - Open DevTools: "Auto"
   *
   * (Settings Menu)
   * - Open in new Window: On
   * - Switch to inspector-window: On
   * - Close automatically: On
   * - Choose DevTools Version: On (default version)
   *
   * @default false
   */
  debug?: boolean
  /**
   * Skip future testcases after specific amount of already executed testcases have failed.
   * By default, does not bail.
   *
   * @default 0
   */
  bail?: number
  /**
   * Defines how many times a testcase should be rerun if it did not pass.
   * The current testcase will be aborted on the first error or failed expectation
   * and rerun <retries> times.
   *
   * @default 0
   */
  retries?: number
  /**
   * Timeout for any request to the Selenium server in milliseconds.
   *
   * @default 90000
   */
  connectionRetryTimeout?: number
  /**
   * Count of request retries to the Selenium server.
   *
   * @default 3
   */
  connectionRetryCount?: number
  /**
   * Timeouts (for waitXXX and eventuallyXXX actions) in milliseconds.
   *
   * "default" property will be used for every waitXXX and eventuallyXXX action
   * if not explicitly stated otherwise.
   *
   * @default {default: 5000}
   */
  timeouts?: ITimeouts
  /**
   * Intervals (for waitXXX and eventuallyXXX actions) in milliseconds.
   *
   * "default" property will be used for every waitXXX and eventuallyXXX action
   * if not explicitly stated otherwise.
   *
   * @default {default: 500}
   */
  intervals?: IIntervals
  /**
   * A key-value store of query parameters to be added to every selenium request.
   *
   * @default {}
   */
  queryParams?: Object
  /**
   * A key-value store of headers to be added to every selenium request. Values must be strings.
   *
   * @default {}
   */
  headers?: Object

  /**
   * Arguments for start command of selenium-standalone service.
   *
   * @default {}
   */
  seleniumStartArgs?: StartOpts
  /**
   * Arguments for install command of selenium-standalone service.
   *
   * @default {}
   */
  seleniumInstallArgs?: InstallOpts

  /**
   * Define which testcase files should run. The pattern is relative to the directory
   * from which `wdio-workflo` was called. Notice that, if you are calling `wdio-workflo` from an
   * NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
   * directory is where your package.json resides, so `wdio-workflo` will be called from there.
   */
  testcaseFiles: string[],
  /**
   * Define which spec files should run. The pattern is relative to the directory
   * from which `wdio-workflo` was called. Notice that, if you are calling `wdio-workflo` from an
   * NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
   * directory is where your package.json resides, so `wdio-workflo` will be called from there.
   */
  specFiles: string[],
  /**
   * Define which manual testcase result files should run. The pattern is relative to the directory
   * from which `wdio-workflo` was called. Notice that, if you are calling `wdio-workflo` from an
   * NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
   * directory is where your package.json resides, so `wdio-workflo` will be called from there.
   */
  manualResultFiles: string[],
  /**
   * Path to the uidStore.json file which is used to generate unique ids during test execution.
   *
   * The generated ids will be preversed for future test runs until the uidStore.json file is deleted.
   */
  uidStorePath: string,

// RETYPE OBJECTS

  /**
   * Gets executed once before all workers get launched.
   * @param {IConfig} config wdio-workflo configuration object
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   */
  onPrepare?<T>(config: IConfig, capabilities: ICapabilities[]): Promise<T> & undefined
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or testcase.
   *
   * This callback is only invoked during the "testcases" phase.
   *
   * @param {IConfig} config wdio-workflo configuration object
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} testcaseFiles List of testcases file paths that are to be run
   */
  beforeSession?<T>(config: IConfig, capabilities: ICapabilities[], testcaseFiles: string[]): Promise<T> & undefined
  /**
   * Gets executed before testcases execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   *
   * This callback is only invoked during the "testcases" phase.
   *
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} testcaseFiles List of testcases file paths that are to be run
   */
  before?<T>(capabilities: ICapabilities[], testcaseFiles: string[]): Promise<T> & undefined
  /**
   * Hook that gets executed before the suite starts
   * @param {Suite} suite suite details
   */
  beforeSuite?<T>(suite: Suite): Promise<T> & undefined
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Jasmine)
   */
  beforeHook?<T>(): Promise<T> & undefined
  /**
   * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
   * afterEach in Jasmine)
   */
  afterHook?<T>(): Promise<T> & undefined
  /**
   * Function to be executed before a testcase starts.
   * @param {Test} test test details
   */
  beforeTest?<T>(test: Test): Promise<T> & undefined
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  beforeCommand?<T>(commandName: string, args: any[]): Promise<T> & undefined
  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Error} error error object if any
   */
  afterCommand?<T>(commandName: string, args: any[], result: number, error: Error): Promise<T> & undefined
  /**
   * Function to be executed after a testcase ends.
   * @param {Test} test test details
   */
  afterTest?<T>(test: Test): Promise<T> & undefined
  /**
   * Hook that gets executed after the suite has ended
   * @param {Suite} suite suite details
   */
  afterSuite?<T>(suite: Suite): Promise<T> & undefined
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} testcaseFiles List of testcases file paths that ran
   */
  after?<T>(result: number, capabilities: ICapabilities[], testcaseFiles: string[]): Promise<T> & undefined
  /**
   * Gets executed right after terminating the webdriver session.
   *
   * This callback is only invoked during the "testcases" phase.
   *
   * @param {IConfig} config wdio-workflo configuration object
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} testcaseFiles List of testcases file paths that ran
   */
  afterSession?<T>(config: IConfig, capabilities: ICapabilities, testcaseFiles: string[]): Promise<T> & undefined
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   *
   * This callback is only invoked during the "testcases" phase.
   *
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} specFiles List of spec file paths that are to be run
   */
  beforeValidator?<T>(capabilities: ICapabilities[], specFiles: string[]): Promise<T> & undefined
   /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   * @param {Array.<String>} specFiles List of spec file paths that ran
   */
  afterValidator?<T>(result: number, capabilities: ICapabilities[], specFiles: string[]): Promise<T> & undefined
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Number} exitCode 0 - success, 1 - fail
   * @param {IConfig} config wdio-workflo configuration object
   * @param {Array.<ICapabilities>} capabilities list of capabilities details
   */
  onComplete?<T>(exitCode: number, config: IConfig, capabilities: ICapabilities[]): Promise<T> & undefined
  /**
  * Gets executed when an error happens, good place to take a screenshot
  * @ {Error} error
  */
  onError?<T>(error: Error): Promise<T> & undefined
}

const testDir = __dirname + '/system_test'

const myConf: IWorkfloConfig = {
  testDir: testDir,
  baseUrl: 'http://www.google.com/',
  host: '127.0.0.1',
  port: 4444,
  width: 1280,
  height: 800,
  capabilities: {
    browserName: 'chrome',
    requireWindowFocus: true,
    nativeEvents: true,
    unexpectedAlertBehaviour: "accept",
    ignoreProtectedModeSettings: true,
    "disable-popup-blocking": true,
    enablePersistentHover: true,
  },
  timeouts: {
    default: 4000
  },
  intervals: {
    default: 400
  },
  specFiles: [ `${testDir}/src/specs/**/*.spec.ts` ],
  testcaseFiles: [ `${testDir}/src/testcases/**/*.tc.ts` ],
  manualResultFiles: [ `${testDir}/src/manualResults/**/*.man.ts` ],
  uidStorePath: `${testDir}/data/uidStore.json`,
  beforeSession: (config, capabilities) => {
  }
}

module.exports = {
  capabilities: {
    browserName: 'chrome',
    requireWindowFocus: true,
    nativeEvents: true,
    unexpectedAlertBehaviour: "accept",
    ignoreProtectedModeSettings: true,
    "disable-popup-blocking": true,
    enablePersistentHover: true,
  },
  services: ['selenium-standalone'],

  selenium: {
    version: '3.12.0',
    baseURL: 'http://selenium-release.storage.googleapis.com'
  },
  specFiles: [ `${testDir}/src/specs/**/*.spec.ts` ],
  testcaseFiles: [ `${testDir}/src/testcases/**/*.tc.ts` ],
  manualResultFiles: [ `${testDir}/src/manualResults/**/*.man.ts` ],
  allure: {
    issueTrackerPattern: "http://hq.documatrix.com/jira/browse/%s",
    bugAppendix: "#bug", // will be appended to issue url to identify it as bug in report
    bugPrefix: "" // will be appended to issue url to identify it as bug in report
  },
  uidStorePath: `${testDir}/data/uidStore.json`,
  reportErrorsInstantly: false,

  retries: 0,
  beforeSuite: function (suite) {
  },
  timeouts: {
    default: 4000
  },
  intervals: {
    default: 400
  }
}
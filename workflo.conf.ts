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
   */
  user?: string
  /**
   * WebdriverIO supports Sauce Labs, Browserstack and Testing Bot (other cloud providers
   * should work too though). These services define specific user and key (or access key)
   * values you need to put in here in order to connect to these services.
   */
  key?: string
  /**
   * Width of the browser window in pixels.
   */
  width: number,
  /**
   * Height of the browser window in pixels.
   */
  height: number

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
}

const myConf: IWorkfloConfig = {
  testDir: __dirname + '/system_test',
  baseUrl: 'http://www.google.com/',
  host: '127.0.0.1',
  port: 4444,
  width: 1280,
  height: 800,
}

module.exports = {
  selenium: {
    version: '3.12.0',
    baseURL: 'http://selenium-release.storage.googleapis.com'
  },
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
  }
}
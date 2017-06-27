const path = require('path')

const testDir = path.join(__dirname, 'testDir')

module.exports = {
  testDir: testDir,
  logLevel: 'verbose',
  baseUrl: 'http://webdriver.io', // replace with anna base url
  windowSize: {
    width: 1280,
    height: 800
  },
  webdriver: {
    host: '127.0.0.1',
    port: 4444
  },
  selenium: {
    version: '2.53.1',
    baseURL: 'http://selenium-release.storage.googleapis.com'
  },
  capabilities: {
    maxInstances: 1,
    browserName: 'chrome',
    requireWindowFocus: true,
    nativeEvents: true,    
    unexpectedAlertBehaviour: "accept",
    ignoreProtectedModeSettings: true,
    "disable-popup-blocking": true,
    enablePersistentHover: true,
  },
  specs: [ `${testDir}/src/specs/**/*.spec.ts` ],
  //specs: [],
  //testcases: [ `${testDir}/src/testcases/**/*.tc.ts` ]
  testcases: [ `${testDir}/src/testcases/helloworld.tc.ts` ]
}
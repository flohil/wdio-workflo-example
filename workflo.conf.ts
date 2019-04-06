import { IWorkfloConfig } from 'wdio-workflo';

const testDir = `${__dirname}/system_test`;

export const workfloConfig: IWorkfloConfig = {
  testDir,
  baseUrl: 'https://flohil.github.io/wdio-workflo/demo',
  width: 1280,
  height: 800,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ["headless", "disable-gpu"]
    }
  },
  timeouts: {
    default: 6000
  },
  intervals: {
    default: 300
  },
  allure: {
    issueTrackerPattern: 'http://example.com/issues/%s',
    testManagementPattern: 'http://example.com/tms/%s',
  },
  debug: false,
  consoleLogLevel: 'steps'
};

export default workfloConfig;

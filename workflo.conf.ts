import { IWorkfloConfig } from 'wdio-workflo';

const testDir = `${__dirname}/system_test`;

export const workfloConfig: IWorkfloConfig = {
  testDir,
  baseUrl: 'https://www.npmjs.com',
  width: 1280,
  height: 800,
  capabilities: {
    browserName: 'chrome',
  },
  timeouts: {
    default: 3000
  },
  intervals: {
    default: 300
  },
  allure: {
    issueTrackerPattern: 'http://example.com/issues/%s',
    testManagementPattern: 'http://example.com/tms/%s',
  },
  consoleLogLevel: 'steps'
};

export default workfloConfig;

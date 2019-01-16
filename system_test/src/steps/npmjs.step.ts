import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';

const npmJsSteps = defineSteps({
  "open npmJs page":
  (params?: IOptStepParams<{path?: string}, void>) =>
    new Step(params, ({ path }): void => {
      const _path = path || '';

      // the baseUrl defined in workflo.conf.ts is prepended automatically when invoking browse.url()
      browser.url(`${_path}`);
    }),

  "search for the npm package %{packageName}":
  (params?: IStepParams<{packageName: string}, void>) =>
    new Step(params, ({ packageName }): void => {
      pages.npmJs.searchInputField.setValue(packageName);
      pages.npmJs.searchButton.click();
    }),
});

export { npmJsSteps };


import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';

const npmJsSteps = defineSteps({
  "open npmjs page":
  // use IOptStepParams if all of the step's arguments are optional
  // the first template parameter of IOptStepParams represents the type of the step's arguments object
  // the second template parameter defines the return type of the step
  (params?: IOptStepParams<{path?: string}, string>) =>
    new Step(params, ({ path }): string => {
      const _path = path || '';

      // the baseUrl defined in workflo.conf.ts is prepended automatically when invoking browse.url()
      browser.url(`${_path}`);

      // the step's return value will be passed to step's callback function as a single paramter
      return _path;
    }),

  "search for the npm package %{packageName}":
  // use IStepParams if at least one of the step's arguments is mandatory
  (params: IStepParams<{packageName: string}, void>) =>
    new Step(params, ({ packageName }): void => {
      pages.npmjs.searchInputField.setValue(packageName);
      pages.npmjs.searchButton.click();
    }),
});

export { npmJsSteps };


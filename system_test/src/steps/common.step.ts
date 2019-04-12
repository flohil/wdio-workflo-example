import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';
import { workfloConfig } from '~/workflo.conf';

const commonSteps = defineSteps({
  "open demo website":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, (): void => {
      // When not providing a protocol, the url is resolved relative to the baseUrl.
      browser.url('');
      pages.common.footer.wait.isOpen();
    }),

  "open page '%{page}'":
  (params: IStepParams<{page: pages.BasePage<any>}, void>) =>
    new Step(params, ({ page }): void => {
      pages.common.header.linkMap.$[page.pageName].click();
      page.wait.isOpen();
    }),

  "navigate to page '%{pageName}'":
  (params: IStepParams<{pageName: DemoApp.PageName}, void>) =>
    new Step(params, ({ pageName }): void => {
      pages.common.header.linkMap.$[pageName].click();
    }),

  "open path %{path} on demo website and return resulting url":
  (params: IStepParams<{path: string}, string>) =>
    new Step(params, ({ path }): string => {
      // the baseUrl defined in workflo.conf.ts is prepended automatically
      browser.url(path);

      // the return value is passed to the step's callback function as a single parameter
      return browser.getUrl();
    }),
});

export { commonSteps };


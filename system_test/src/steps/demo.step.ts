import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';
import { workfloConfig } from '~/workflo.conf';

const demoSteps = defineSteps({
  "open demo website":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, (): void => {
      // When not providing a protocol, the url is resolved relative to the baseUrl.
      browser.url('');
      pages.common.footer.wait.isOpen();
    }),

  "open framework link in footer":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, ({}): void => {
      pages.common.footer.frameworkLink.click();
    }),

  "open page '%{page}'":
  (params: IStepParams<{page: pages.BasePage<any>}, void>) =>
    new Step(params, ({ page }): void => {
      pages.common.header.linkMap.$[page.pageName].click();
      page.wait.isOpen();
    }),

  "filter feet items by term %{term}":
  (params: IStepParams<{term: string}, void>) =>
    new Step(params, ({ term }): void => {
      pages.feed.filterBox.setValue(term);
    }),

  "fill in registration form":
  (params: IStepParams<
    {formData: Workflo.PageNode.ExtractValue<pages.Registration['form']['$']> }, void
  >) =>
    new Step(params, ({ formData }): void => {
      pages.registration.form.setValue(formData);
    }),

  "submit registration form":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, (): void => {
      pages.registration.submitButton.click();
    }),

  "open path on demo website and return resulting url":
  (params: IStepParams<{path: string}, string>) =>
    new Step(params, ({ path }): string => {
      // the baseUrl defined in workflo.conf.ts is prepended automatically
      browser.url(path);

      // the return value is passed to the step's callback function as a single parameter
      return `${workfloConfig.baseUrl}/${path}`;
    }),
});

export { demoSteps };


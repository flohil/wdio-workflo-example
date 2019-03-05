import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';

const demoSteps = defineSteps({
  "open the demo website":
  // use IOptStepParams if all of the step's arguments are optional
  // the first template parameter of IOptStepParams is the type of the step's arguments object
  // the second template parameter defines the return type of the step
  (params?: IOptStepParams<{path?: string}, string>) =>
    new Step(params, ({ path }): string => {
      const _path = path || '';

      // the baseUrl defined in workflo.conf.ts is prepended automatically
      browser.url(`${_path}`);

      // the return value is passed to the step's callback function as a single parameter
      return _path;
    }),

  "open the '%{page}' page":
  // use IStepParams if at least one of the step's arguments is mandatory
  (params: IStepParams<{page: pages.BasePage<any>}, void>) =>
    new Step(params, ({ page }): void => {
      pages.common.header.linkMap.$[page.pageName].click();
      page.wait.isOpen();
    }),

  "fill in the registration form":
  (params: IStepParams<
    {formData: Workflo.PageNode.ExtractValue<pages.Registration['form']['$']> }, void
  >) =>
    new Step(params, ({ formData }): void => {
      pages.registration.form.setValue(formData);
    }),

  "submit registration form":
  (params?: IOptStepParams<{}, void>) =>
    new Step(params, (): void => {
      pages.registration.submitButton.click();
    }),

  // "search for the package %{packageName}":
  // (params: IStepParams<{packageName: string}, void>) =>
  //   new Step(params, ({ packageName }): void => {
  //     pages.common.header.searchInputField.setValue(packageName);
  //     pages.common.header.searchButton.click();
  //   }),

  // "fill in the signup form":
  // (params: IStepParams<
  //   {formData: Workflo.PageNode.ExtractValue<pages.SignUpPage['signupForm']['$']> }, void >
  // ) =>
  //   new Step(params, ({ formData }): void => {
  //     pages.signup.signupForm.setValue(formData);
  //   }),

  // "fill in the contact form on the support page":
  // (params: IStepParams<
  //   {formData: Workflo.PageNode.ExtractValue<pages.SupportPage['contactForm']['$']> }, void >
  // ) =>
  //   new Step(params, ({ formData }): void => {
  //     pages.support.contactForm.setValue(formData);
  //   }),
});

export { demoSteps };


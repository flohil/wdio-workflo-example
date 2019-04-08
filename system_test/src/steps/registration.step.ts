import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, IStepParams, Step } from 'wdio-workflo';

const registrationSteps = defineSteps({
  "fill in registration form":
  (params: IStepParams<{formData: pages.RegistrationFormData }, void>) =>
    new Step(params, ({ formData }): void => {
      pages.registration.form.setValue(formData);
    }),

  "submit registration form":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, (): void => {
      pages.registration.submitButton.click();
    }),
});

export { registrationSteps };


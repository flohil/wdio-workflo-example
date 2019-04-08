import { pages } from '?/page_objects';
import { defineSteps, IOptStepParams, Step } from 'wdio-workflo';

const footerSteps = defineSteps({
  "open framework link in footer":
  (params?: IOptStepParams<Workflo.EmptyObject, void>) =>
    new Step(params, (): void => {
      pages.common.footer.frameworkLink.click();
    })
});

export { footerSteps };


import { pages } from '?/page_objects';
import { defineSteps, IStepParams, Step } from 'wdio-workflo';

const feedSteps = defineSteps({
  "filter feed items by term %{term}":
  (params: IStepParams<{term: string}, void>) =>
    new Step(params, ({ term }): void => {
      pages.feed.filterBox.setValue(term);
    }),
});

export { feedSteps };


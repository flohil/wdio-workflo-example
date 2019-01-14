import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite('npmjs', {}, () => {
  testcase('search for the npm package wdio-workflo', {}, () => {
    given(steps['open npmJs page']())
    .when(steps['search for the npm package %{packageName}']({
      arg: { packageName: 'wdio-workflo' },
      cb: () => {
        validate({ '1.1': [1] }, () => {
          expectList(pages.npmJs.packageNamesList).not.toEventuallyBeEmpty();
        });

        validate({ '1.1': [2] }, () => {
          expectElement(pages.npmJs.packageNamesList.first).toEventuallyHaveText('wdio-workflo');
        });
      },
    }));
  });
});

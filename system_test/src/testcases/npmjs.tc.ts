import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite("npmjs", {}, () => {
  // If there is a bug in the tested application which breaks our testcase, we can link to it in the `bugs` array.
  // We can also define how severe it would be if the testcase failed by setting the `severity` property.
  testcase("search for the npm package wdio-workflo", { bugs: ['NPMJS-387'], severity: 'blocker' }, () => {
    given(steps["open npmjs page"]({
      // the result value of the step is passed as single parameter to the step's callback function
      cb: (path) => {
        console.log(`opened the npmjs website at ${path}`);
      }
    }))
    // wdio-workflo uses %{} to perform string interpolation of step arguments in a step's description
    // in the test reports, %{packageName} will be replaced with "wdio-workflo"
    .when(steps["search for the npm package %{packageName}"]({
      args: { packageName: 'wdio-workflo' },
      cb: () => {
        validate({ '1.1': [1] }, () => {
          // This function provides custom expectation matchers for PageElementLists.
          // Each expectation matcher also has a negated counterpart which can be accessed via `.not`.
          expectList(pages.npmjs.packageNamesList).not.toEventuallyBeEmpty();
        });

        validate({ '1.1': [2] }, () => {
          // the PageElements managed by PageElementList can be retrieved via `.first`, `.at`, `.all` or `.where`
          expectElement(pages.npmjs.packageNamesList.first).toEventuallyHaveText('wdio-workflo');
        });
      },
    }));
  });
});

import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite("demo", {}, () => {

  testcase("open framework link", {}, () => {
    const frameworkUrl = 'https://flohil.github.io/wdio-workflo/';

    given(steps["open demo website"]())
    .when(steps["open framework link in footer"]({
      cb: () => {
        validate({ "1.1": [1] }, () => {
          const url = browser.getUrl();

          expect(url).toEqual(frameworkUrl);
        });
      }
    }));
  });

  testcase("filter feed items", {}, () => {
    const filterTerm = 'cat';
    const filteredTitles = ['Cat', 'Cattle'];

    given(steps["open demo website"]())
    .and(steps["open page '%{page}'"]({
      args: { page: pages.feed }
    }))
    .when(steps["filter feet items by term %{term}"]({
      args: { term: filterTerm },
      cb: () => {
        validate({ "2.1": [1] }, () => {
          pages.feed.feedList.wait.hasLength(2);

          const titles = pages.feed.feedList.all.map(feedItem => feedItem.title.getText());

          expect(titles).toEqual(filteredTitles);
        });
      }
    }));
  });

  testcase("submit complete registration", {}, () => {
    const formData: Workflo.PageNode.ExtractValue<pages.Registration['form']['$']> = {
      username: 'johnDoe',
      email: 'john.doe@example.com',
      password: '1234',
      country: 'Germany',
      acceptTerms: true
    };
    const expectedFeedback = 'Thanks for your registration!';

    given(steps["open demo website"]())
    .and(steps["open page '%{page}'"]({
      args: { page: pages.registration }
    }))
    .when(steps["fill in registration form"]({
      args: { formData }
    }))
    .and(steps["submit registration form"]({
      cb: () => {
        validate({ "3.1": [1] }, () => {
          // client side validation: immediate feedback
          expectElement(pages.registration.feedbackField).toHaveText(expectedFeedback);
        });
      }
    }));
  });

  testcase("submit incomplete registration", {}, () => {
    const formData: Workflo.PageNode.ExtractValue<pages.Registration['form']['$']> = {
      username: 'johnDoe',
      email: 'john.doe@example.com',
      password: '1234',
    };
    const expectedFeedback = 'Please fill in all fields!';

    given(steps["open demo website"]())
    .and(steps["open page '%{page}'"]({
      args: { page: pages.registration }
    }))
    .when(steps["fill in registration form"]({
      args: { formData }
    }))
    .and(steps["submit registration form"]({
      cb: () => {
        validate({ "3.1": [2] }, () => {
          // server side validation - need to wait for feedback
          expectElement(pages.registration.feedbackField).toEventuallyHaveText(expectedFeedback);
        });
      }
    }));
  });

  // // If there is a bug in the tested application which breaks our testcase, we can link to it in the
  // // `bugs` array. We can also define how severe it would be if the testcase failed by setting the
  // // `severity` property.
  // testcase("search for wdio-workflo", { bugs: ['NPMJS-387'], severity: 'blocker' }, () => {
  //   given(steps["open the npmjs website"]({
  //     // the result value of the step is passed as single parameter to the step's callback function
  //     cb: (path) => {
  //       console.log(`opened the npmjs website at ${path}`);
  //     }
  //   }))
  //   // Wdio-workflo uses %{} to perform string interpolation of step arguments in a description.
  //   // In this case, %{packageName} will be replaced with "wdio-workflo" in the test report/logs.
  //   .when(steps["search for the package %{packageName}"]({
  //     args: { packageName: 'wdio-workflo' },
  //     cb: () => {
  //       validate({ '1.1': [1] }, () => {
  //         // Use `.not` expectation matchers instead of `!` operator
  //         expectList(pages.searchResults.packageNamesList).not.toEventuallyBeEmpty();
  //       });

  //       validate({ '1.1': [2] }, () => {
  //         expectElement(
  //           pages.searchResults.packageNamesList.first
  //         ).toEventuallyHaveText('wdio-workflo');
  //       });
  //     },
  //   }));
  // });

  // testcase("fill in signup form", {}, () => {
  //   // extract the values type from a ValueGroup's content
  //   // (a composite of the return types of each node's `getValue` function)
  //   const formData: Workflo.PageNode.ExtractValue<pages.SignUpPage['signupForm']['$']> = {
  //     fullname: 'John Doe',
  //     email: 'john.doe@example.com',
  //     username: 'johnDoe',
  //     password: '1234',
  //     checkWeekly: true,
  //     checkLicense: true
  //   };

  //   given(steps["open the npmjs website"]())
  //   .when(steps["open the page %{page}"]({
  //     args: { page: pages.signup }
  //   }))
  //   .and(steps["fill in the signup form"]({
  //     args: { formData },
  //     cb: () => {
  //       validate({ "1.2": [1] }, () => {
  //         expectGroup(pages.signup.signupForm).toHaveValue(formData);
  //       });
  //     }
  //   }));
  // });
});

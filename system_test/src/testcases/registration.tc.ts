import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite("demo", {}, () => {
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
          // server side validation: wait for feedback
          expectElement(pages.registration.feedbackField).toEventuallyHaveText(expectedFeedback);
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
});

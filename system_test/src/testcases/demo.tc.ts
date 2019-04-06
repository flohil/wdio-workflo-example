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
});

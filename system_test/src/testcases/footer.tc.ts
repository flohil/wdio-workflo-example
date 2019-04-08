import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite("footer", {}, () => {
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
});

import { pages } from '?/page_objects';
import { steps } from '?/steps';

suite("feed", {}, () => {
  testcase("filter feed items", {}, () => {
    const filterTerm = 'ca';
    const filteredTitles = ['Cat', 'Cattle'];

    given(steps["open demo website"]())
    .and(steps["open page '%{page}'"]({
      args: { page: pages.feed }
    }))
    .when(steps["filter feed items by term %{term}"]({
      args: { term: filterTerm },
      cb: () => {
        validate({ "2.1": [1] }, () => {
          pages.feed.feedList.wait.hasLength(2);

          const titles = pages.feed.feedList.all.map(feedItem => feedItem.title.getText());

          expect(titles).toEqual(filteredTitles);
        });

        validate({ "2.1": [2] }, () => {
          const catItem = pages.feed.searchableFeedList.getByTitle('Cat');

          expectElement(catItem).toEventuallyBeVisible();
        });
      }
    }));
  });
});

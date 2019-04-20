import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class FeedsPage extends BasePage<stores.FeedStore> {

  constructor() {
    super({
      store: stores.feeds,
      pageName: 'feed'
    });
  }

  get filterBox() {
    return this.container.$.Textfield(
      xpath('//div').classContains('ms-TextField').hasChild(
        '//label', xpath => xpath.text('Filter by name')
      )
    );
  }

  get feedList() {
    return this.container.$.FeedItemList(
      xpath('//div').attribute('role', 'listitem').hasChild(
        '//div', xpath => xpath.classContains('Feed-itemCell')
      ),
    );
  }

  // usually we would not need `feedList` above and just use `searchableFeedList`
  // using both is only for demonstration purposes of wdio-workflo's customizing guides
  get searchableFeedList() {
    return this.container.$.SearchableFeedItemList(
      xpath('//div').attribute('role', 'listitem').hasChild(
        '//div', xpath => xpath.classContains('Feed-itemCell')
      ),
    );
  }
}

export const feed = new FeedsPage();

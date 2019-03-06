import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class Feed extends BasePage<stores.PageNodeStore> {

  constructor() {
    super({
      store: stores.pageNode,
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
}

export const feed = new Feed();

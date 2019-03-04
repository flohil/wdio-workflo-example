import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class Feed extends BasePage<stores.PageNodeStore> {

  constructor() {
    super({
      store: stores.pageNode,
      pageName: 'feed'
    });
  }

  get packageListContainer() {
    return this.container.$.Element(
      xpath('//div').classContains('packageList'),
    );
  }

  // the packages names returned by the search are represented as level-3 HTML headings
  get packageNamesList() {
    return this.packageListContainer.$.ElementList(
      xpath('//h3'),
    );
  }
}

export const feed = new Feed();
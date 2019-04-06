import { pageObjects as core } from 'wdio-workflo';

import { PageNodeStore } from '../stores';
import { FeedItem, IFeedItemOpts } from './';

export interface ISearchableFeedItemListOpts<
 Store extends PageNodeStore
> extends core.elements.IPageElementListOpts<Store, FeedItem<Store>, IFeedItemOpts<Store>> {}

export class SearchableFeedItemList<
  Store extends PageNodeStore
> extends core.elements.PageElementList<Store, FeedItem<Store>, IFeedItemOpts<Store> > {

  constructor(selector: string, opts: ISearchableFeedItemListOpts<Store>) {
    super(selector, opts);
  }

  getByTitle(title: string) {
    return this.where.hasChild(
      '//div', xpath => xpath.classContains('Feed-itemName').text(title)
    ).getFirst();
  }
}

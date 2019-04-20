import { pageObjects as core } from 'wdio-workflo';

import { PageNodeStore } from "./PageNodeStore";
import {
  FeedItem,
  IFeedItemOpts,
  SearchableFeedItemList,
  ISearchableFeedItemListOpts,
} from '../page_elements';

export class FeedStore extends PageNodeStore {

  FeedItem(
    selector: Workflo.XPath,
    opts?: Pick<IFeedItemOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<FeedItem<this>, IFeedItemOpts<this>>(
      selector,
      FeedItem,
      {
        store: this,
        ...opts,
      },
    );
  }

  FeedItemList(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementListOpts<
        this, FeedItem<this>, Pick<IFeedItemOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.ListPublicKeys,
      Workflo.Store.ListPublicPartialKeys
    > = {},
  ) {
    return this.List(
      selector,
      {
        elementOpts: { ...opts.elementOpts },
        elementStoreFunc: this.FeedItem,
        ...opts,
      },
    );
  }

  SearchableFeedItemList(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      ISearchableFeedItemListOpts<this>,
      Workflo.Store.ListPublicKeys,
      Workflo.Store.ListPublicPartialKeys
    > = {},
  ) {
    return this._getList<
      SearchableFeedItemList<this>,
      ISearchableFeedItemListOpts<this>
    >(
      selector,
      SearchableFeedItemList,
      {
        elementOpts: {
          store: this,
          ...opts.elementOpts
        },
        elementStoreFunc: this.FeedItem,
        store: this,
        ...opts,
      },
    );
  }
}

export const feeds = new FeedStore();

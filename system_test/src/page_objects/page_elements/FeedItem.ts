import { PageNodeStore } from '../stores';
import { IPageElementOpts, PageElement } from './PageElement';

export interface IFeedItemOpts<
 Store extends PageNodeStore
> extends IPageElementOpts<Store> {}

export class FeedItem<
  Store extends PageNodeStore
> extends PageElement<Store> {

  constructor(selector: string, opts: IFeedItemOpts<Store>) {
    super(selector, opts);
  }

  get title() {
    return this.$.Element(
      xpath('//div').classContains('Feed-itemName')
    );
  }

  get description() {
    return this.$.Element(
      xpath('//div').classContains('Feed-itemDesc')
    );
  }
}

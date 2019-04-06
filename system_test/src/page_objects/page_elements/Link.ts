import { PageNodeStore } from '../stores';
import { IPageElementOpts, PageElement } from './PageElement';

export interface ILinkOpts<
 Store extends PageNodeStore
> extends IPageElementOpts<Store> {}

export class Link<
  Store extends PageNodeStore
> extends PageElement<Store> {

  constructor(selector: string, opts: ILinkOpts<Store>) {
    super(selector, opts);
  }

  open() {
    return this.click();
  }
}

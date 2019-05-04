import { stores } from '?/page_objects';
import { Page } from '../Page';

export class Footer extends Page<stores.PageNodeStore> {

  constructor() {
    super({ store: stores.pageNode });
  }

  get container() {
    return this._store.Element(
      xpath('//footer'),
    );
  }

  get frameworkLink() {
    return this.container.$.Element(
      xpath('//a').text('wdio-workflo')
    );
  }

  isOpen(): boolean {
    return this.container.currently.isVisible();
  }

  isClosed(): boolean {
    return this.container.currently.not.isVisible();
  }
}

export const footer = new Footer();

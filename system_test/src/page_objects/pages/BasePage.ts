import { stores } from '?/page_objects';
import { Page, IPageOpts } from './Page';

import { workfloConfig } from '~/workflo.conf';

interface IBasePageOpts<
  Store extends stores.PageNodeStore
> extends IPageOpts<Store> {
  pageName: string;
}

export abstract class BasePage<
  Store extends stores.PageNodeStore
> extends Page<Store> {

  pageName: string;

  constructor(opts: IBasePageOpts<Store>) {
    const { pageName, ...superOpts } = opts;
    super(superOpts);

    this.pageName = pageName;
  }

  get container() {
    return this._store.Element(
      xpath('//main'),
    );
  }

  // check if pathname section of current browser url starts with our page's name
  private _doesUrlMatchPageName() {
    const pathName = browser.getUrl().replace(workfloConfig.baseUrl, '');

    // we need to double escape backslashes because they are interpreted as a string first
    const pageNameRegex = new RegExp(`^\\/${this.pageName}(\\?|\\/)*`);

    return pageNameRegex.test(pathName);
  }

  isOpen(): boolean {
    return this._doesUrlMatchPageName() && this.container.currently.isVisible();
  }

  isClosed(): boolean {
    return !this._doesUrlMatchPageName() || this.container.currently.not.isVisible();
  }

  // needed to interpolate the page name in the step "open the page {page}"
  toString() {
    return this.pageName;
  }
}

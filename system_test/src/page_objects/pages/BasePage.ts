import { stores } from '?/page_objects';
import { Page, IPageOpts } from './Page';

import { workfloConfig } from '~/workflo.conf';

interface IPagePath {
  subPath?: string;
}

export interface IBasePageOpts<
  Store extends stores.PageNodeStore
> extends IPageOpts<Store> {
  pageName: DemoApp.PageName;
}

export abstract class BasePage<
  Store extends stores.PageNodeStore,
  IsOpenOpts extends IPagePath = IPagePath,
  IsClosedOpts extends IPagePath = IsOpenOpts
> extends Page<Store, IsOpenOpts | IPagePath, IsClosedOpts | IPagePath> {

  pageName: DemoApp.PageName;

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

  get heading() {
    return this.container.$.Element(
      xpath('//h1')
    );
  }

  // check if path section of current browser url starts with our page's name
  private _doesUrlMatchPageName(subPath?: string) {
    const path = browser.getUrl().replace(workfloConfig.baseUrl, '');

    // we need to double escape backslashes because they are interpreted as a string first
    const pageNameRegex = new RegExp(`^\\/${this.pageName}(\\?|\\/)*`);

    const matchesPath = (typeof subPath !== 'undefined') ? path.startsWith(subPath) : true;

    return pageNameRegex.test(path) && matchesPath;
  }

  /**
   * Open the page.
   *
   * Optionally, you can pass a subpath for the page's url.
   */
  open(subPath?: string) {

    let pathAppendix = '';

    if (subPath) {
      if (subPath.charAt(0) === '/') {
        pathAppendix = subPath;
      } else {
        pathAppendix = `/${subPath}`;
      }
    }

    browser.url(`${this.pageName}${pathAppendix}`);

    this.wait.isOpen({ subPath, timeout: 10000 });
  }

  isOpen(opts: IsOpenOpts | IPagePath = {}): boolean {
    return this._doesUrlMatchPageName(opts.subPath) &&
      this.heading.currently.isVisible() &&
      this.heading.currently.getText().toLowerCase() === this.pageName;
  }

  isClosed(opts: IsClosedOpts | IPagePath = {}): boolean {
    return !this._doesUrlMatchPageName(opts.subPath) ||
      this.heading.currently.not.isVisible() ||
      this.heading.currently.getText().toLowerCase() !== this.pageName;
  }

  // used to interpolate the page name in the step "open the '%{page}' page"
  toString() {
    return this.pageName;
  }
}

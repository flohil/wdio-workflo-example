import { stores } from '?/page_objects';
import { IPageOpts, Page } from './Page';

export interface IBasePageOpts<
  Store extends stores.PageNodeStore
> extends IPageOpts<Store> {}

export class NpmJsPage extends Page<stores.PageNodeStore> {

  constructor() {
    super({ store: stores.pageNode });
  }

  // an outer container which encapsulates all other elements of the page
  get container() {
    // we can access the `PageNodeStore` associated with `Page` via `this._store` to create/retrieve PageNode instances
    return this._store.Element(
      // XPath builder provides functions to create an XPath expression which identifies PageNodes on the HTML page
      xpath('//div').id('app'),
    );
  }

  // the button which triggers a search request
  get searchButton() {
    // The `$` accessor of the `PageElement` class returns the `PageNodeStore` associated with a `PageElement`.
    // It prepends the XPath selector of the `PageElement` to the selector of the PageNode retrieved from PageNodeStore.
    // In this case, the resulting XPath of `searchButton` will be "//div[@id='app']//button[contains(.,'Search')]".
    return this.container.$.Element(
      xpath('//button').textContains('Search'),
    );
  }

  // the input field into which we input the package name "wdio-workflo"
  get searchInputField() {
    return this.container.$.Input(
      xpath('//input').typeContains('search'),
    );
  }

  // an HTML element which acts as a container for the list of npm packages returned by the search request
  get packageListContainer() {
    return this.container.$.Element(
      xpath('//div').classContains('packageList'),
    );
  }

  // a list of level-3 HTML headings that represent the names of the npm packages returned by the search request
  get packageNamesList() {
    return this.packageListContainer.$.ElementList(
      xpath('//h3'),
    );
  }

  isOpen(): boolean {
    return this.container.currently.isVisible();
  }

  isClosed(): boolean {
    return this.container.currently.not.isVisible();
  }
}

export const npmjs = new NpmJsPage();

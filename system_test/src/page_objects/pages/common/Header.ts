import { stores } from '?/page_objects';
import { Page } from '../Page';

export class Header extends Page<stores.PageNodeStore> {

  constructor() {
    super({ store: stores.pageNode });
  }

  get container() {
    return this._store.Element(
      xpath('//header')
    );
  }

  get linkMap() {
    return this.container.$.ElementMap(
      xpath('//nav').child('//a').classContains('Header-link'), {
        identifier: {
          mappingObject: {
            feed: 'Feed',
            registration: 'Registration',
          },
          mappingFunc: (baseSelector, mappingValue) => xpath(baseSelector).text(mappingValue)
        }
      }
    );
  }

  isOpen(): boolean {
    return this.container.currently.isVisible();
  }

  isClosed(): boolean {
    return this.container.currently.not.isVisible();
  }

  // // encapsulates all other elements of this page/page fragment
  // get container() {
  //   // the `PageNodeStore` associated with `Page` to create/retrieve  PageNode instances
  //   return this._store.Element(
  //     // XPath builder creates an XPath expressions which identify PageNodes on the HTML page
  //     xpath('//header'),
  //   );
  // }

  // get searchButton() {
  //   // A `PageElement`'s `$` accessor returns its associated `PageNodeStore`.
  //   // It prepends the XPath of the `PageElement` to the selector of the PageNode retrieved from
  //   // the store. Here, the resulting XPath is "//header//button[contains(.,'Search')]".
  //   return this.container.$.Element(
  //     xpath('//button').textContains('Search'),
  //   );
  // }
}

export const header = new Header();

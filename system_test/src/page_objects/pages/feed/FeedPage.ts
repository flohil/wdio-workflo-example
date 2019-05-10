import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class FeedPage extends BasePage<stores.FeedStore> {

  constructor() {
    super({
      store: stores.feeds,
      pageName: 'feed'
    });
  }

  get filterBox() {
    return this.container.$.Textfield(
      xpath('//div').classContains('ms-TextField').hasChild(
        '//label', xpath => xpath.text('Filter by name')
      )
    );
  }

  get feedList() {
    return this.container.$.FeedItemList(
      xpath('//div').attribute('role', 'listitem').hasChild(
        '//div', xpath => xpath.classContains('Feed-itemCell')
      ),
    );
  }

  // usually we would not need `feedList` above and just use `searchableFeedList`
  // using both is only for demonstration purposes of wdio-workflo's customizing guides
  get searchableFeedList() {
    return this.container.$.SearchableFeedItemList(
      xpath('//div').attribute('role', 'listitem').hasChild(
        '//div', xpath => xpath.classContains('Feed-itemCell')
      ),
    );
  }

  get inputMap() {
    return this.container.$.InputMap(
      xpath('//input'), {
        identifier: {
          mappingObject: {
            input1: 'Input1',
            input2: 'Input2'
          },
          mappingFunc: (baseSelector, value) => xpath(baseSelector).text(value)
        }
      }
    );
  }

  get inputList() {
    return this.container.$.InputList(
      xpath('//input')
    );
  }
}

export const feed = new FeedPage();

const listAreEnabled = feed.inputList.currently.isEnabled([false, true]);

expectList(feed.inputList).toBeEnabled(true);

const mapAreEnabled = feed.inputMap.currently.isEnabled({
  input1: true,
});

expectMap(feed.inputMap).toBeEnabled({
  input1: true,


});

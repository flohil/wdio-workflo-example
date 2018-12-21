import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface IDynamicControlsPageArgs extends IHerukoAppPageArgs {

}

export class DynamicControlsPage extends HerukoAppPage {

  constructor(args: IDynamicControlsPageArgs = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  get checkbox() {
    return this.container.$.Checkbox(
      xpath('//input').attribute('label', 'blah')
    )
  }

  get paragraph() {
    return this.container.$.Element(
      '//p'
    )
  }

  get paragraphList() {
    return this.container.$.ElementList(
      '//p'
    )
  }

  get removeButton() {
    return this.container.$.Element(
      xpath('//button').text('Remove')
    )
  }

  get message() {
    return this.container.$.Element(
      xpath('//p').id('message')
    )
  }

  get enableButton() {
    return this.container.$.Element(
      xpath('//button').text('Enable')
    )
  }

  get buttonList() {
    return this.container.$.ElementList(
      xpath('//button')
    )
  }

  get buttonMap() {
    return this.container.$.ElementMap(
      xpath('//button'),
      {
        identifier: {
          mappingObject: {
            remove: 'Remove',
            enable: 'Enable'
          },
          func: (mapSelector, mappingValue) => xpath(mapSelector).text(mappingValue)
        }
      }
    )
  }

  get buttonGroup() {
    const page = this

    return this._store.ElementGroup({
      get removeButton() {
        return page.removeButton
      },
      get enableButton() {
        return page.enableButton
      },
      get buttonList() {
        return page.buttonList
      },
      get buttonMap() {
        return page.buttonMap
      }
    }, {timeout: 5000})
  }

  get superGroup() {
    const page = this

    return this._store.ElementGroup({
      get checkbox() {
        return page.checkbox
      },
      get buttons() {
        return page.buttonGroup
      }
    })
  }

  get nonExistingButtonList() {
    return this.container.$.ElementList(
      xpath('//button').id('asdf')
    )
  }

  get checkboxInput() {
    return this.container.$.Input(
      xpath('//form').id('checkbox-example').append('//input')
    )
  }

  get searchInput() {
    return this.container.$.Input(
      xpath('//form').id('input-example').append('//input')
    )
  }

  get inputList() {
    return this.container.$.InputList(
      xpath('//input')
    )
  }

  get inputMap() {
    return this.container.$.InputMap('//input', {
      identifier: {
        mappingObject: {
          checkbox: 'checkbox-example',
          search: 'input-example'
        },
        func: (mapSelector, mappingValue) => xpath('//form').id(mappingValue).append('//input')
      }
    })
  }

  get inputGroup() {
    const page = this

    return this._store.ValueGroup({
      get checkbox() {
        return page.checkboxInput
      },
      get search() {
        return page.searchInput
      },
      get paragraph() {
        return page.paragraph
      },
      get inputList() {
        return page.inputList
      },
      get inputMap() {
        return page.inputMap
      }
    })
  }

  get outerInputGroup() {
    const page = this

    return this._store.ValueGroup({
      search: page.searchInput,
      innerGroup: page.inputGroup
    })
  }

  get footer() {
    return this.container.$.Element(
      xpath('//div').id('page-footer')
    )
  }

  get poweredBy() {
    return this.container.$.Element(
      xpath('//div').attribute('style', 'text-align: center;')
    )
  }

  get nonExistingDiv() {
    return this.container.$.Element(xpath('//div').id('asdfasdfasdfasdf'))
  }

  get nonExistingDivList() {
    return this.container.$.ExistElementList(xpath('//div').id('asdfasdfasdfasdf'))
  }
}
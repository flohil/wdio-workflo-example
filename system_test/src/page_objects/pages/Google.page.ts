import { BasePage, IBasePageArgs } from './BasePage.page'
import { stores, core } from '?/page_objects'

export interface IGooglePageArgs {

}

export class GooglePage extends BasePage<stores.GoogleStore> {

  constructor(args: IGooglePageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: stores.google}))
  }

  get nonExistingDiv() {
    return this.container.$.Element(
      xpath('//div').id('asdf')
    )
  }

  selectNonExisting() {
    this.selectNonExisting1()
  }

  selectNonExisting1() {
    this.selectNonExisting2()
  }

  selectNonExisting2() {
    this.selectNonExisting3()
  }

  selectNonExisting3() {
    this.selectNonExisting4()
  }

  selectNonExisting4() {
    this.selectNonExisting5()
  }

  selectNonExisting5() {
    this.nonExistingDiv.click()
  }

  get logoContainer() {
    return this.container.$.Element(
      xpath('//div').id('hplogo')
    )
  }

  get logo() {
    return this.logoContainer.$.Element(
      xpath('//div').containedClass('logo-subtext').level(1)
    )
  }

  get list() {
    return this.container.$.ExistElementList(
      xpath('//li').class('gb_Z')
    )
  }

  get divList() {
    return this.container.$.ElementList(
      xpath('//div')
    )
  }

  get anoLogoList() {
    return this.container.$.ElementList(
      xpath('//div').containedClass('logo-subtext')
    )
  }

  get logoList() {
    return this.container.$.ElementList(
      xpath('//div').containedClass('logo-sub'),
      {
        identifier: {
          mappingObject: {
            "austria": "Österreich"
          },
          func: (element) => element.getText()
        }
      }
    )
  }

  get divMap() {
    return this.container.$.ElementMap(
      '//div', {
        identifier: {
          mappingObject: {
            logo: 'logo-subtext',
            logo2: 'logo-subtext'
          },
          func: (mapSelector, mappingValue) => xpath(mapSelector).containedClass(mappingValue)
        }
      }
    )
  }

  get logoGroup() {
    const page = this

    return this.elementStore.TextGroup({
      get logo() {
        return page.logoContainer.$.Element(
          xpath('//div').containedClass('logo-subtext')
        )
      },
      get logoList() {
        return page.logoList
      },
      get anoLogoList() {
        return page.anoLogoList
      },
      get logoMap() {
        return page.divMap
      },
    })
  }

  get input() {
    return this.container.$.Input(xpath('//input').attr('title', 'Suche'))
  }

  get inputList() {
    return this.container.$.InputList(xpath('//input').attr('type', 'text'), {
      identifier: {
        mappingObject: {
          search: 'Suche',
        },
        func: (element) => element.getAttribute('title')
      },
      elementOptions: {
        timeout: 13000
      }
    })
  }

  get anoInputList() {
    return this.container.$.InputList(xpath('//input').attr('type', 'text').attr('title', 'Suche'))
  }

  get inputMap() {
    return this.container.$.InputMap(
      '//input',
      {
        identifier: {
          mappingObject: {
            search: 'Suche'
          },
          func: (parentSelector, mappingValue) => xpath(parentSelector).attr('title', mappingValue)
        }
      }
    )
  }

  get inputGroup() {
    const page = this

    return this.elementStore.ValueGroup({
      get input() {
        return page.input
      },
      get inputMap() {
        return page.inputMap
      },
      get inputList() {
        return page.inputList
      },
      get anoInputList() {
        return page.anoInputList
      }
    })
  }
}
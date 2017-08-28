import { BasePage, IBasePageArgs } from './BasePage.page'
import { stores, core } from '?/page_objects'

export interface IGooglePageArgs {

}

export class GooglePage extends BasePage<core.stores.PageElementStore> {

  constructor(args: IGooglePageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: core.stores.pageElement}))
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

  get logoGroup() {
    const page = this

    return this.elementStore.ElementGroup({
      get logo() {
        return page.logoContainer.$.Element(
          xpath('//div').containedClass('logo-subtext')
        )
      }
    })
  }
}
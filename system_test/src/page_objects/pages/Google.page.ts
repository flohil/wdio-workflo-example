import { stores, core } from '?/page_objects'

export interface IGooglePageArgs {

}

export class GooglePage extends core.pages.BasePage<core.stores.PageElementStore> {

  constructor(args: IGooglePageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: core.stores.pageElement}))
  }

  get logoContainer() {
    return this.container.$.Element(
      core.builders.xpath('//div').id('hplogo')
    )
  }

  get logo() {
    return this.logoContainer.$.Element(
      core.builders.xpath('//div').containedClass('logo-subtext')
    )
  }

  get list() {
    return this.container.$.ExistElementList(
      core.builders.xpath('//li').class('gb_Z')
    )
  }

  get divList() {
    return this.container.$.ElementList(
      core.builders.xpath('//div')
    )
  }

  get logoGroup() {
    const page = this

    return this.elementStore.ElementGroup({
      get logo() {
        return page.logoContainer.$.Element(
          core.builders.xpath('//div').containedClass('logo-subtext')
        )
      }
    })
  }
}
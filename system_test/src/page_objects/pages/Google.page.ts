import { stores, core } from '?/page_objects'

export interface IGooglePageArgs {

}

export class GooglePage extends core.pages.BasePage<core.stores.PageElementStore> {

  constructor(args: IGooglePageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: core.stores.pageElement}))
  }

  get logoContainer() {
    return this.container.$.Element('//div').id('hplogo')
  }

  get logo() {
    return this.logoContainer.$.Element('//div').containedClass('logo-subtext')
  }
}
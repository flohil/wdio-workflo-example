import { BasePage, IBasePageArgs } from '../BasePage.page'
import { stores, core } from '?/page_objects'

export interface IHerukoAppPageArgs {

}

export class HerukoAppPage extends BasePage<stores.DemoStore> {

  constructor(args: IHerukoAppPageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: stores.demo}))
  }

  // opens a page at the given url path and waits for it to load
  open(path?: string) {
    if (typeof path !== 'undefined') {
      path = `${path}`
    } else {
      path = ''
    }
    const fullPath = `https://the-internet.herokuapp.com/${this.basePath}${path}`

    browser.url(fullPath)

    this.waitForOpened(path)
  }
}
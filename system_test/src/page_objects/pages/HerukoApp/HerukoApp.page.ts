import { BasePage, IBasePageArgs } from '../BasePage.page'
import { stores, core } from '?/page_objects'

export interface IHerukoAppPageArgs {

}

export class HerukoAppPage extends BasePage<stores.DemoStore> {

  constructor(args: IHerukoAppPageArgs = {}) {
    super({...args, basePath: '', store: stores.demo})
  }

  // opens a page at the given url path and waits for it to load
  open(opts: {path?: string} = {}) {
    if (typeof opts.path !== 'undefined') {
      opts.path = `${opts.path}`
    } else {
      opts.path = ''
    }
    const fullPath = `https://the-internet.herokuapp.com/${this.basePath}${opts.path}`

    browser.url(fullPath)

    this.wait.isOpen({path: opts.path})
  }
}
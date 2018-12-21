import { BasePage, IBasePageArgs } from './BasePage.page'
import { stores, core } from '?/page_objects'

export interface IToolsQAPageArgs {

}

export class ToolsQAPage extends BasePage<stores.DemoStore> {

  constructor(args: IToolsQAPageArgs = {}) {
    super({...args, basePath: '', store: stores.demo})
  }

  // opens a page at the given url path and waits for it to load
  open(opts: {path?: string} = {}) {
    if (typeof opts.path !== 'undefined') {
      opts.path = `${opts.path}`
    } else {
      opts.path = ''
    }
    const fullPath = `http://toolsqa.com/automation-practice-form/${opts.path}`

    browser.url(fullPath)

    this.wait.isOpen(opts)
  }
}
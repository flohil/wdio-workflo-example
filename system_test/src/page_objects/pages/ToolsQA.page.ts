import { BasePage, IBasePageArgs } from './BasePage.page'
import { stores, core } from '?/page_objects'

export interface IToolsQAPageArgs {

}

export class ToolsQAPage extends BasePage<stores.DemoStore> {

  constructor(args: IToolsQAPageArgs = {}) {
    super(Object.assign(args, {basePath: '', elementStore: stores.demo}))
  }

  // opens a page at the given url path and waits for it to load
  open(path?: string) {
    if (typeof path !== 'undefined') {
      path = `${path}`
    } else {
      path = ''
    }
    const fullPath = `http://toolsqa.com/automation-practice-form/${path}`

    browser.url(fullPath)

    this.waitForOpened(path)
  }
}
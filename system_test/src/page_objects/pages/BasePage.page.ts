import { stores, core } from '?/page_objects'
import * as config from '~/config/testConfig'

export interface IBasePageArgs<Store extends Workflo.IPageElementStore> extends core.pages.IPageArgs<Store> {
  basePath: string
}

export class BasePage<Store extends Workflo.IPageElementStore> extends core.pages.Page<Store> {
  protected basePath: string

  constructor(args: IBasePageArgs<Store>) {
    super(args)
    
    this.basePath = args.basePath || ''
  }

  get container() {
    return this.elementStore
      .Element(`//body`)
  }

  // opens a page at the given url path and waits for it to load
  open(path?) {
    if (typeof path !== 'undefined') {
      path = `/${path}`
    } else {
      path = ''
    }
    path = `/${this.basePath}${path}`

    browser.url(path)

    this.waitForOpened()
  }

  // used to wait for page load to finished
  waitForOpened() {

    browser.waitUntil(() => {
      const pageBasePath = browser.getUrl().split('/')[3]
      return pageBasePath === this.basePath && this.container.isVisible()

    }, config.timeouts.pageOpen, `Expected url to match /${this.basePath}`)
 
    return this
  }

/**
 * Returns true if page is opened at the moment.
 */
  isOpened() {
    return this.container.isVisible()
  }

  eventuallyIsOpened(timeout?: number) {
    return this.container.eventuallyIsVisible({timeout: timeout})
  }
}
import { PageElementStore } from '../stores'
import { Page, IPageArgs } from './Page'

export interface IBasePageArgs<Store extends PageElementStore> extends IPageArgs<Store> {
  basePath: string
}

export class BasePage<
  Store extends PageElementStore
> extends Page<
  Store,
  {path?: string}
> {

  protected basePath: string

  constructor(args: IBasePageArgs<Store>) {
    super(args)

    this.basePath = args.basePath || ''
  }

  get container() {
    return this._store.Element(`//body`)
  }

  isOpen(opts: {path?: string}): boolean {
    const matchPath = (opts.path) ? opts.path : this.basePath
    const pageBasePath = browser.getUrl().split('/')[3]

    return pageBasePath === matchPath && this.container.currently.isVisible()
  }

  isClosed(opts: {path?: string}): boolean {
    return !this.isOpen(opts)
  }

  // opens a page at the given url path and waits for it to load
  open(opts: {path?: string} = {}) {
    let path = opts.path

    if (typeof path !== 'undefined') {
      path = `/${path}`
    } else {
      path = ''
    }
    path = `/${this.basePath}${path}`

    browser.url(path)

    this.wait.isOpen()
  }
}
import { stores, core } from '?/page_objects'
import * as config from '~/config/testConfig'

export interface IBaseFragmentPageArgs<Store extends core.stores.PageElementStore> extends core.pages.IPageArgs<Store> {
  containerSelector: string
}

export class BaseFragment<Store extends core.stores.PageElementStore> extends core.pages.Page<Store> {

  protected _containerSelector: string

  constructor(args: IBaseFragmentPageArgs<Store>) {
    super(args)

    this._containerSelector = args.containerSelector
  }

  get container() {
    return this._store
      .Element(this._containerSelector)
  }

  isOpen(): boolean {
    return this.container.currently.isVisible()
  }

  isClosed(): boolean {
    return !this.isOpen()
  }
}
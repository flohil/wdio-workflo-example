import { PageElementStore } from '../stores'
import { Page, IPageArgs } from './Page'

export interface IBaseFragmentPageArgs<Store extends PageElementStore> extends IPageArgs<Store> {
  containerSelector: string
}

export class BaseFragment<Store extends PageElementStore> extends Page<Store> {

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
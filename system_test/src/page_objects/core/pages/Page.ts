import * as config from '~/config/test_config'

export interface IPageArgs<Store extends Workflo.IPageElementStore> {
  elementStore: Store
}

export class Page<Store extends Workflo.IPageElementStore> {
  protected config: typeof config
  protected elementStore: Store

  // if page needs to be initialized with specific values,
  // pass them in initObj
  constructor(args: IPageArgs<Store>) {
    this.config = config
    this.elementStore = args.elementStore
  }
}
import * as testConfig from '~/config/test_config'

export interface IPageArgs<Store extends Workflo.IPageElementStore> {
  elementStore: Store
}

export class Page<Store extends Workflo.IPageElementStore> {
  protected config: typeof testConfig
  protected elementStore: Store

  // if page needs to be initialized with specific values,
  // pass them in initObj
  constructor(args: IPageArgs<Store>) {
    this.config = testConfig
    this.elementStore = args.elementStore
  }
}
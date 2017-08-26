import * as config from '~/config/test_config'

export interface IPageNodeOpts<Store extends Workflo.IPageElementStore> {
  wait?: Workflo.WaitType, 
  timeout?: number
  store: Store
}

export class PageNode<Store extends Workflo.IPageElementStore> {
  protected selector: string
  protected wait: Workflo.WaitType
  protected timeout: number
  protected store: Store

  // available options:
  // - wait -> initial wait operation: exist, visible, text, value
  constructor(
    selector: string,
    { 
      wait = Workflo.WaitType.visible, 
      timeout = config.defaultTimeout,
      store
    } : IPageNodeOpts<Store>
  ) {
    this.wait = wait
    this.timeout = timeout
    this.store = store
  }

  __getNodeId() {
    return this.selector
  }

  getSelector() {
    return this.selector
  }
}
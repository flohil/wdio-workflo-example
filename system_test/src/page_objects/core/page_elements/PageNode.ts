import * as config from '~/config/test_config'

export interface IPageNodeOpts<Store extends Workflo.IPageElementStore> {
  wait?: Workflo.WaitType, 
  timeout?: number
  store: Store
}

export class PageNode<Store extends Workflo.IPageElementStore> {
  protected wait: Workflo.WaitType
  protected timeout: number
  protected store: Store

  // available options:
  // - wait -> initial wait operation: exist, visible, text, value
  constructor(
    protected selector: string,
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

  // Modifies element selector, so use only once for
  // the same element.
  text(text: string) {
    this.selector = `${this.selector}[. = '${text}']`
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  containedText(text: string) {
    this.selector = `${this.selector}[contains(.,'${text}')]`
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  attr(key: string, value: string) {
    this.selector = `${this.selector}[@${key}='${value}']`
    return this
  }

  containedAttr( key, value ) {
    this.selector = `${this.selector}[contains(@${key},'${value}')]`
    return this
  }

  id(value: string) {
    return this.attr('id', value)
  }

  class(value: string) {
    return this.attr('class', value)
  }

  containedClass(value: string) {
    return this.containedAttr('class', value)
  }
}
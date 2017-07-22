import * as config from '~/config/test_config'

export interface IPageNodeOpts {
  wait?: Workflo.WaitType, 
  timeout?: number
}

export class PageNode {
  protected wait: Workflo.WaitType
  protected timeout: number

  // available options:
  // - wait -> initial wait operation: exist, visible, text, value
  constructor(
    protected selector: string,
    { 
      wait = Workflo.WaitType.visible, 
      timeout = config.defaultTimeout 
    } : IPageNodeOpts = {}
  ) {
    this.wait = wait
    this.timeout = timeout
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
    this.selector = `(${this.selector})[@${key}='${value}']`
    return this
  }

  containedAttr( key, value ) {
    this.selector = `(${this.selector})[contains(@${key},'${value}')]`
    return this
  }

  id(value: string) {
    return this.attr('id', value)
  }
}

// INTERNAL UTILITY FUNCTIONS

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase() })
}
interface IFirstByBuilderOpts<
  Store extends Workflo.IPageElementStore,   
  PageElementType extends Workflo.IPageElement<Store>,
  PageElementOptions
> {
  store: Store
  elementStoreFunc: (selector: string, options: PageElementOptions) => PageElementType
  elementOptions: PageElementOptions
}

export class FirstByBuilder<
  Store extends Workflo.IPageElementStore,   
  PageElementType extends Workflo.IPageElement<Store>,
  PageElementOptions
> {
  private selector: string

  private store: Store
  private elementStoreFunc: (selector: string, options: PageElementOptions) => PageElementType
  private elementOptions: PageElementOptions

  constructor(selector: string, options: IFirstByBuilderOpts<Store, PageElementType, PageElementOptions>) {
    this.selector = selector
    this.store = options.store
    this.elementStoreFunc = options.elementStoreFunc
    this.elementOptions = options.elementOptions
  }

  reset() {
    SelectorBuilder.reset(this.selector)
    return this
  }

  constraint(constraint: string) {
    SelectorBuilder.constraint(constraint)
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  text(text: string) {
    SelectorBuilder.text(text)
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  containedText(text: string) {
    SelectorBuilder.containedText(text)
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  attr(key: string, value: string) {
    SelectorBuilder.attr(key, value)
    return this
  }

  containedAttr(key: string, value: string) {
    SelectorBuilder.containedAttr(key, value)
    return this
  }

  /**
   * Starts with 1
   * @param idx 
   */
  index(idx: number) {
    SelectorBuilder.index(idx)
    return this
  }

  level(level: number) {
    SelectorBuilder.level(level)
    return this
  }

  id(selector: string, value: string) {
    return this.attr('id', value)
  }

  class(selector: string, value: string) {
    return this.attr('class', value)
  }

  containedClass(selector: string, value: string) {
    return this.containedAttr('class', value)
  }

  get(): PageElementType {
    return this.elementStoreFunc.apply(
      this.store, [ SelectorBuilder.build(), this.elementOptions ]
    )
  }
}
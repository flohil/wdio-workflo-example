class SelectorBuilder {
  private static _selector: string

  static reset(selector: string) {
    this._selector = selector
    return this
  }

  static append(selector: string) {
    this._selector = `${this._selector}${selector}`
    return this
  }

  static constraint(constraint: string) {
    this._selector = `${this._selector}[${constraint}]`
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  static text(text: string) {
    this._selector = `${this._selector}[. = '${text}']`
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  static containedText(text: string) {
    this._selector = `${this._selector}[contains(.,'${text}')]`
    return this
  }

  // Modifies element selector, so use only once for
  // the same element.
  static attr(key: string, value: string) {
    this._selector = `${this._selector}[@${key}='${value}']`
    return this
  }

  static containedAttr(key: string, value: string) {
    this._selector = `${this._selector}[contains(@${key},'${value}')]`
    return this
  }

  /**
   * Starts with 1
   * @param idx 
   */
  static index(idx: number) {
    this._selector = `(${this._selector})[${idx}]`
    return this
  }

  static level(level: number) {
    this._selector = `${this._selector}[${level}]`
    return this
  }

  static id(value: string) {
    return this.attr('id', value)
  }

  static class(value: string) {
    return this.attr('class', value)
  }

  static containedClass(value: string) {
    return this.containedAttr('class', value)
  }

  static build() {
    const selector = this._selector
    this._selector = undefined
    return selector
  }
}

function xpath(selector: string) {
  return SelectorBuilder.reset(selector)
}
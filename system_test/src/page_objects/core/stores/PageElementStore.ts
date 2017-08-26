import * as config from '~/config/test_config'
import * as _ from 'lodash'

import {
  PageElementGroup, IPageElementGroupOpts,
  PageElement, IPageElementOpts,
  PageElementList, IPageElementListOpts,
} from '../page_elements'

import {
  PageElementGroupWalker, IPageElementGroupWalkerOpts
} from '../walkers'

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
    return this._selector
  }
}

function xpath(selector: string) {
  return SelectorBuilder.reset(selector)
}

// Stores singleton instances of page elements to avoid creating new
// elements on each invocation of a page element.
export class PageElementStore {
  protected instanceCache: {[id: string] : any}

  constructor() {
    this.instanceCache = Object.create(null)
  }

  // DEFINE YOUR ELEMENT GROUPS HERE

  // Encapsulates arbitrary page element types.
  // Returns all nodes passed in content as its own members,
  // so that they can be accessed via dot notation.
  //
  // content is a collection of node getters, where each node
  // can be any form of page element defined in PageElementStore.
  //
  // walkerClass is optional and allows for passing a
  // custom group walker class.
  // Per default, ElementGroupWalker will be used as a walker.
  //
  // functions is an optional array of group function names that
  // defines the functions this group is supposed to support.
  //
  // id is a string to uniquely identify a group.
  // If id is not defined, the group instance will be identified
  // by a concatenated string of its node key names and types.
  ElementGroup<Content extends {[key: string] : Workflo.PageNode.INode}>(
    content: Content
  ) {
    return this.getGroup<
      this,
      Content,
      PageElementGroupWalker<this>,
      IPageElementGroupWalkerOpts,
      PageElementGroup<this, Content, PageElementGroupWalker<this>, IPageElementGroupWalkerOpts>,
      Pick<IPageElementGroupOpts<
        this,
        Content, 
        PageElementGroupWalker<this>, 
        IPageElementGroupWalkerOpts
      >, "content" | "walkerType" | "walkerOptions">
    > (
      PageElementGroup,
      {
        walkerType: PageElementGroupWalker,
        walkerOptions: {},
        content: content
      }
    )
  }

  // DEFINE YOUR SINGLE ELEMENT TYPE ACCESSOR FUNCTIONS HERE

  /**
   * 
   * @param selector 
   * @param options 
   */
  Element(
    selector: Workflo.Selector,
    options?: Pick<IPageElementOpts<this>, "timeout" | "wait">
  ) {
    const res = SelectorBuilder.build()
    if (typeof SelectorBuilder.build() !== 'undefined') {
      console.log("builder: ", res)
    } else {
      console.log("string: ", selector)
    }

    return this.get<IPageElementOpts<this>, PageElement<this>>(
      selector,
      PageElement,
      {
        store: this,
        ...options
      }
    )
  } 

  ExistElement(
    selector: Workflo.Selector,
    options?: Pick<IPageElementOpts<this>, "timeout">
  ) {
    return this.Element(
      selector,
      {
        wait: Workflo.WaitType.exist,
        ...options 
      }
    )
  }

  // DEFINE YOUR ELEMENT LIST TYPE ACCESSOR FUNCTIONS HERE

  ElementList(
    selector: Workflo.Selector, 
    options?: Pick<
      IPageElementListOpts<this, PageElement<this>, IPageElementOpts<this>>, 
      "wait" | "timeout" | "elementOptions" | "disableCache" | "identifier"
    >
  ) {
    return this.get<
      IPageElementListOpts<this, PageElement<this>, IPageElementOpts<this>>, 
      PageElementList<this, PageElement<this>, IPageElementOpts<this>>
    > (
      selector,
      PageElementList,
      {
        store: this,
        elementStoreFunc: this.Element,
        ...options
      }
    )
  }

  ExistElementList(
    selector: Workflo.Selector, 
    options?: Pick<
      IPageElementListOpts<this, PageElement<this>, IPageElementOpts<this>>,
      "timeout" | "elementOptions" | "disableCache" | "identifier"
    >
  ) {
    return this.get<
      IPageElementListOpts<this, PageElement<this>, IPageElementOpts<this>>, 
      PageElementList<this, PageElement<this>, IPageElementOpts<this>>
    > (
      selector,
      PageElementList,
      {
        store: this,
        elementStoreFunc: this.ExistElement,
        wait: Workflo.WaitType.exist,
        ...options
      }
    )
  }

  // Functions to retrieve element instances

  /**
   * Returns a page element with the given selector, type and options.
   * 
   * If a page element with identical parameters already exists in this store,
   * a cached instance of this page element will be returned.
   * 
   * @param selector 
   * @param type 
   * @param options 
   */
  protected get<O, T>(
    selector: Workflo.Selector, 
    type: { new(selector: string, options: O): T }, 
    options: O = Object.create(Object.prototype)
  ) : T {
    const _selector = (typeof selector === 'string') ? selector : SelectorBuilder.build()

    // catch: selector must not contain |
    if (_selector.indexOf('|||') > -1) {
      throw new Error(`Selector must not contain character sequence '|||': ${_selector}`)
    }

    const id = `${_selector}|||${type}|||${options.toString()}`

    if(!(id in this.instanceCache)) {
      const result = new type(_selector, options)
      this.instanceCache[id] = result
    }

    return this.instanceCache[id]
  }

  protected getGroup<
    Store extends Workflo.IPageElementStore,
    Content extends {[key: string] : Workflo.PageNode.INode},
    WalkerType extends Workflo.IPageElementGroupWalker<Store>,
    WalkerOptions extends IPageElementGroupWalkerOpts,
    GroupType extends Workflo.IPageElementGroup<
      Store,
      Content, 
      WalkerType,
      WalkerOptions
    >,
    GroupOptions extends Pick<IPageElementGroupOpts<
      Store,
      Content,
      WalkerType,
      WalkerOptions
    >, "content" | "walkerType" | "walkerOptions" >
  > (
    groupType: { new(options: IPageElementGroupOpts<Store, Content, WalkerType, WalkerOptions>): GroupType },
    groupOptions: GroupOptions
  ) : Content & GroupType {

    // Build id from group's elements' ids.
    // If two groups have the same content,
    // they are the same.
    let idStr = ''

    for (const key in groupOptions.content) {
      if (groupOptions.content.hasOwnProperty(key)) {
        idStr += `${groupOptions.content[key].__getNodeId()};`
      }
    }

    const key = `${groupType.name}:${groupOptions.walkerType.name}:${idStr}`

    if (!(key in this.instanceCache)) {

      const fullGroupOptions = _.merge({
        id: idStr,
      }, groupOptions)

      this.instanceCache[key] = new groupType(fullGroupOptions)
    }

    return this.instanceCache[key]
  }
}
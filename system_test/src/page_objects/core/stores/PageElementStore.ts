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
      Content,
      PageElementGroupWalker,
      IPageElementGroupWalkerOpts,
      PageElementGroup<Content, PageElementGroupWalker, IPageElementGroupWalkerOpts>,
      Pick<IPageElementGroupOpts<
        Content, 
        PageElementGroupWalker, 
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
    selector: string,
    options?: IPageElementOpts
  ) {
    return this.get<IPageElementOpts, PageElement>(
      selector,
      PageElement,
      options
    )
  } 

  ExistElement(
    selector: string,
    options?: Pick<IPageElementOpts, "timeout">
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
    selector: string, 
    options?: Pick<
      IPageElementListOpts<this, PageElement, IPageElementOpts>, 
      "wait" | "timeout" | "elementOptions" | "disableCache" | "identifier"
    >
  ) {
    return this.get<
      IPageElementListOpts<this, PageElement, IPageElementOpts>, 
      PageElementList<this, PageElement, IPageElementOpts>
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
    selector: string, 
    options?: Pick<
      IPageElementListOpts<this, PageElement, IPageElementOpts>,
      "timeout" | "elementOptions" | "disableCache" | "identifier"
    >
  ) {
    return this.get<
      IPageElementListOpts<this, PageElement, IPageElementOpts>, 
      PageElementList<this, PageElement, IPageElementOpts>
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
    selector: string, 
    type: { new(selector: string, options: O): T }, 
    options: O = Object.create(Object.prototype)
  ) : T & this {
    // catch: selector must not contain |
    if (selector.indexOf('|||') > -1) {
      throw new Error(`Selector must not contain character sequence '|||': ${selector}`)
    }

    const id = `${selector}|||${type}|||${options.toString()}`

    if(!(id in this.instanceCache)) {
      const result = new type(selector, options)

      for ( const method of Workflo.Class.getAllMethods(this) ) {
        if ( method.indexOf('_') !== 0 && /^[A-Z]/.test( method ) ) {
          result[ method ] = ( _selector, _options ) => {
            _selector = `${selector}${_selector}`

            return this[ method ].apply( this, [ _selector, _options ] ) 
          }
        }
      }

      this.instanceCache[id] = result
    }

    return this.instanceCache[id]
  }

  protected getGroup<
    Content extends {[key: string] : Workflo.PageNode.INode},
    WalkerType extends Workflo.IPageElementGroupWalker,
    WalkerOptions extends IPageElementGroupWalkerOpts,
    GroupType extends Workflo.IPageElementGroup<
      Content, 
      WalkerType,
      WalkerOptions
    >,
    GroupOptions extends Pick<IPageElementGroupOpts<
      Content,
      WalkerType,
      WalkerOptions
    >, "content" | "walkerType" | "walkerOptions" >
  > (
    groupType: { new(options: IPageElementGroupOpts<Content, WalkerType, WalkerOptions>): GroupType },
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
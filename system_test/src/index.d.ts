// THIS FILE IS FOR GLOBALLY AVAILABLE TYPE DECLARATIONS


import { PageElementStore } from 'test.page_objects/core/stores'
import { PageElement, IPageElementOpts as _IPageElementOpts, PageElementList, PageElementGroup } from '?/page_objects/core/page_elements'
import { PageElementGroupWalker, IPageElementGroupWalkerOpts as _IPageElementGroupWalkerOpts } from '?/page_objects/core/walkers'
import { data } from '../data'

declare global {
  namespace PeterPan {
    const enum Languages {
      de = 'de',
      en = 'en'
    }

    const enum PageKeys {
      google = 'google',
    }

    interface IDictionary<T> {
      [key: string] : T
    }
  }

  // should be merged into workflo once elementstore is merged into workflo
  namespace Workflo {
    // define mehtods here that must be implemented by child class but are not part of ElementStore itself
    interface IPageElementStore extends PageElementStore {

    } 

    interface IPageElement<Store extends Workflo.IPageElementStore> extends PageElement<Store> {

    }

    interface IPageElementOpts<Store extends Workflo.IPageElementStore> extends _IPageElementOpts<Store> {

    }

    interface IPageElementList<Store extends Workflo.IPageElementStore, PageElementType extends Workflo.IPageElement<Store>, PageElementOptions> extends PageElementList<Store, PageElementType, PageElementOptions> {

    }

    interface IPageElementGroup<Store extends Workflo.IPageElementStore, Content extends {[key: string] : Workflo.PageNode.INode}, WalkerType extends Workflo.IPageElementGroupWalker<Store>, WalkerOptions extends Workflo.IPageElementGroupWalkerOpts> extends PageElementGroup<Store, Content, WalkerType, WalkerOptions> {

    }

    interface IPageElementGroupWalker<Store extends Workflo.IPageElementStore> extends PageElementGroupWalker<Store> {

    }

    interface IPageElementGroupWalkerOpts extends _IPageElementGroupWalkerOpts {}

    interface WDIOParams {
      timeout?: number,
      reverse?: boolean
    }

    namespace PageNode {
      interface INode {
        __getNodeId(): string
      }

      interface IGetText extends INode {
        getText(): string
      }

      interface IGetValue extends INode {
        getValue(): string
      }

      interface ISetValue<T> extends INode {
        setValue(value: T): this
      }
    }

    interface IProblem<ValueType, ResultType> {
      values: IRecObj<ValueType>,
      solve: <NodeType extends Workflo.PageNode.INode>( 
        node: NodeType,
        value?: ValueType
      ) => ISolveResult<ResultType>
    }

    interface ISolveResult<ResultType>{
      nodeSupported: boolean,
      result?: ResultType
    }

    interface IWalkerOptions {
      throwUnmatchedKey?: boolean, 
      throwSolveError?: boolean 
    }

    const enum WaitType {
      exist = 'exist',
      visible = 'visible',
      value = 'value',
      text = 'text'
    }

    const enum IdentifyBy {
      text = 'text',
      value = 'value'
    }

    type Selector = SelectorBuilder | string
  }
}

export{}
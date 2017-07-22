// THIS FILE IS FOR GLOBALLY AVAILABLE TYPE DECLARATIONS


import { PageElementStore } from 'test.page_objects/core/stores'
import { PageElement, IPageElementOpts as _IPageElementOpts, PageElementList, PageElementGroup } from '?/page_objects/core/page_elements'
import { PageElementGroupWalker, IPageElementGroupWalkerOpts as _IPageElementGroupWalkerOpts } from '?/page_objects/core/walkers'
import { data } from '../data'

declare global {
  namespace PeterPan {

    const enum MessageTypes {
      info = 'info',
      error = 'error',
      undo = 'undo',
      warning = 'warnings'
    }

    const enum Languages {
      de = 'de',
      en = 'en'
    }

    const enum PageKeys {
      dashboard = 'dashboard',
      infoboard = 'infoboard',
      profile = 'profile',
      proposals = 'proposals',
      containers = 'containers',
      pricelists = 'pricelists'
    }

    const enum MetadataEditable {
      NOT_EDITABLE = 0,
      EDITABLE_USER = 1,
      EDITABLE_ADMIN = 2,
      EDITABLE_EMPTY = 3
    }

    interface ICredentials {
      username: string;
      password: string;
    }    

    interface IDictionary<T> {
      [key: string] : T
    }

    interface IDefaultMetaKeys extends IDictionary<typeof data.metaData[0]> {
      'PROPOSAL_NAME': typeof data.metaData[0],
      'OPPORTUNITY_NUMBER': typeof data.metaData[0],
      'CUSTOMER_NAME': typeof data.metaData[0],
      'CUSTOMER_SALES_AREA_ID': typeof data.metaData[0],
      'SALES_USER': typeof data.metaData[0],
      'INTERESTED_CUSTOMER_NUMBER': typeof data.metaData[0],
      'DEBITOR_CUSTOMER_NUMBER': typeof data.metaData[0],
      'CUSTOMER_ASSET_NUMBER': typeof data.metaData[0],
      'CUSTOMER_CONTRACT_NUMBER': typeof data.metaData[0],
      'PROPOSAL_CREATED_BY': typeof data.metaData[0],
      'PROPOSAL_CREATOR': typeof data.metaData[0],
      'PROPOSAL_CREATED_AT': typeof data.metaData[0],
    }

    interface IAllMetaKeys extends IDefaultMetaKeys {
      'ORIGINAL_ID': typeof data.metaData[0],
      'VERSION': typeof data.metaData[0]
    }
  }

  // should be merged into workflo once elementstore is merged into workflo
  namespace Workflo {
    // define mehtods here that must be implemented by child class but are not part of ElementStore itself
    interface IPageElementStore extends PageElementStore {

    } 

    interface IPageElement extends PageElement {

    }

    interface IPageElementOpts extends _IPageElementOpts {

    }

    interface IPageElementList<Store extends Workflo.IPageElementStore, PageElementType extends Workflo.IPageElement, PageElementOptions> extends PageElementList<Store, PageElementType, PageElementOptions> {

    }

    interface IPageElementGroup<Content extends {[key: string] : Workflo.PageNode.INode}, WalkerType extends Workflo.IPageElementGroupWalker, WalkerOptions extends Workflo.IPageElementGroupWalkerOpts> extends PageElementGroup<Content, WalkerType, WalkerOptions> {

    }

    interface IPageElementGroupWalker extends PageElementGroupWalker {

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
  }
}

export{}
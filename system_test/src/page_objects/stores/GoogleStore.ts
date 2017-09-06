import { pageObjects as core } from 'wdio-workflo'
import { Input, IInputOpts } from '../page_elements'

export class GoogleStore extends core.stores.PageElementStore {
  Input(
    selector: Workflo.XPath,
    options?: Pick<IInputOpts<this>, 'timeout' | 'wait'>
  ) {
    return this.get<IInputOpts<this>, Input<this>>(
      selector,
      Input,
      {
        store: this,
        ...options
      }
    )
  }

  InputList(
    selector: Workflo.XPath, 
    options?: Pick<
      core.elements.IPageElementListOpts<this, Input<this>, IInputOpts<this>>, 
      "wait" | "timeout" | "elementOptions" | "disableCache" | "identifier"
    >
  ) {
    return this.get<
      core.elements.IPageElementListOpts<this, Input<this>, IInputOpts<this>>,
      core.elements.PageElementList<this, Input<this>, IInputOpts<this>>
    > (
      selector,
      core.elements.PageElementList,
      {
        store: this,
        elementStoreFunc: this.Input,
        ...options
      }
    )
  }

  InputMap<K extends string>(
    selector: Workflo.XPath,
    options: Pick<
      core.elements.IPageElementMapOpts<this, K, Input<this>, IInputOpts<this>>, 
      "elementOptions" | "identifier"
    >
  ) {
    return this.get<
      core.elements.IPageElementMapOpts<this, K, Input<this>, IInputOpts<this>>, 
      core.elements.PageElementMap<this, K, Input<this>, IInputOpts<this>>
    > (
      selector,
      core.elements.PageElementMap,
      {
        store: this,
        elementStoreFunc: this.Input,
        ...options
      }
    )
  }

}
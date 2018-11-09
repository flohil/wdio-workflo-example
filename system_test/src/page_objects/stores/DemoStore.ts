import { pageObjects as core } from 'wdio-workflo'
import { Input, IInputOpts } from '../page_elements'

export class DemoStore extends core.stores.PageElementStore {
  Input(
    selector: Workflo.XPath,
    options?: Pick<IInputOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._get<Input<this>, IInputOpts<this>>(
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
    options?: PickPartial<
      core.elements.IPageElementListOpts<this, Input<this>, Pick<IInputOpts<this>, 'timeout' | 'waitType'>>,
      "waitType" | "timeout" | "disableCache" | "identifier",
      "elementOptions"
    >
  ) {
    return this.List(
      selector,
      {
        elementStoreFunc: this.Input,
        elementOptions: {},
        ...options
      }
    )
  }

  InputMap<K extends string>(
    selector: Workflo.XPath,
    options: PickPartial<
      core.elements.IPageElementMapOpts<this, K, Input<this>, Pick<IInputOpts<this>, 'timeout' | 'waitType'>>,
      "identifier",
      "elementOptions"
    >
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.Input,
        elementOptions: {},
        ...options
      }
    )
  }
}
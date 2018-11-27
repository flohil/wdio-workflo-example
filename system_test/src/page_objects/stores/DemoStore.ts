import { pageObjects as core, pageObjects } from 'wdio-workflo'
import { Input, IInputOpts, Dropdown, IDropdownOpts, Checkbox, ICheckboxOpts } from '../page_elements'

type CheckboxOpts<Store extends DemoStore> = Pick<ICheckboxOpts<Store>, Workflo.PageElementOptions>

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

  Dropdown(
    selector: Workflo.XPath,
    options?: Pick<IDropdownOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._get<Dropdown<this>, IDropdownOpts<this>>(
      selector,
      Dropdown,
      {
        store: this,
        ...options
      }
    )
  }

  Checkbox(
    selector: Workflo.XPath,
    options?: Pick<ICheckboxOpts<this>, 'timeout' | 'waitType'>
  ) {
    return this._get<Checkbox<this>, ICheckboxOpts<this>>(
      selector,
      Checkbox,
      {
        store: this,
        ...options
      }
    )
  }

  CheckboxList(
    selector: Workflo.XPath,
    options?: PickPartial<
      pageObjects.elements.IPageElementListOpts<this, Checkbox<this>, CheckboxOpts<this>>,
      "waitType" | "timeout" | "disableCache" | "identifier",
      "elementOptions"
    >
  ) {
    return this.List(
      selector,
      {
        elementStoreFunc: this.Checkbox,
        elementOptions: {},
        ...options
      }
    )
  }
}
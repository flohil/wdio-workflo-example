import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface IInputOpts<Store extends DemoStore> extends core.elements.IValuePageElementOpts<Store> {}

export class Input<Store extends DemoStore> extends core.elements.ValuePageElement<Store, string> {

  readonly currently: InputCurrently<Store, this>

  constructor(selector: string, opts: IInputOpts<Store>) {
    super(selector, opts)

    this.currently = new InputCurrently(this)
  }
}

export class InputCurrently<
  Store extends DemoStore,
  PageElementType extends Input<Store>
> extends core.elements.ValuePageElementCurrently<Store, PageElementType, string> {
  getValue(): string {
    return this.element.getValue()
  }

  setValue(value: string = '') {
    this.element.setValue(value)

    return this._node
  }
}
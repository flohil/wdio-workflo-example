import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface IInputOpts<Store extends DemoStore> extends core.elements.IValuePageElementOpts<Store> {}

export class Input<Store extends DemoStore> extends core.elements.ValuePageElement<Store, string> {

  readonly currently = new InputCurrently(this)

  setValue(value: string): this {
    this.element.setValue(value)

    return this
  }
}

export class InputCurrently<
  Store extends DemoStore,
  PageElementType extends Input<Store>
> extends core.elements.ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this.element.getValue()
  }
}
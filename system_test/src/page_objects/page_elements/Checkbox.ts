import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface ICheckboxOpts<Store extends DemoStore> extends core.elements.IPageElementOpts<Store> {}

export class Checkbox<
  Store extends DemoStore
> extends core.elements.ValuePageElement<Store, boolean> {

  readonly currently = new CheckboxCurrently(this)

  setValue(value: boolean) {
    this.initialWait()
    return this
  }
}

export class CheckboxCurrently<
  Store extends DemoStore,
  PageElementType extends Checkbox<Store>
> extends core.elements.ValuePageElementCurrently<Store, PageElementType, boolean> {

  getValue(): boolean {
    return this.element.getValue() === 'on'
  }
}
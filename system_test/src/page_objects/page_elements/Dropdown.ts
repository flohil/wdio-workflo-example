import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface IDropdownOpts<Store extends DemoStore> extends core.elements.IPageElementOpts<Store> {}

export class Dropdown<
  Store extends DemoStore
> extends core.elements.ValuePageElement<Store, string> {

  currently: core.elements.ValuePageElementCurrently<Store, this, string>;

  get selectField() {
    return this.$.Element(
      '//select'
    )
  }

  get optionsList() {
    return this.$.ExistElementList(
      '//option'
    )
  }

  setValue(value: string): this {
    this.selectField.click()
    this.optionsList.where.text(value).getFirst().click()

    return this
  }
}

export class DropdownCurrently<
  Store extends DemoStore,
  PageElementType extends Dropdown<Store>
> extends core.elements.ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this._node.optionsList.where.selected().getFirst().currently.getText()
  }
}
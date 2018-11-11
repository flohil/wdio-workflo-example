import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface IDropdownOpts<Store extends DemoStore> extends core.elements.IPageElementOpts<Store> {}

export class Dropdown<Store extends DemoStore> extends core.elements.PageElement<Store> implements Workflo.PageNode.ISetValue<string> {

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

  setValue( value: string ) {
    this.selectField.click()
    this.optionsList.where.text(value).getFirst().click()

    return this
  }

  getValue(): string {
    return this.optionsList.where.checked().getFirst().getText()
  }
}
import { pageObjects as core } from 'wdio-workflo'
import { DemoStore } from '../stores'

export interface ICheckboxOpts<Store extends DemoStore> extends core.elements.IPageElementOpts<Store> {}

export class Checkbox<Store extends DemoStore> extends core.elements.PageElement<Store> implements Workflo.PageNode.ISetValue<string> {

  setValue(value: 'true' | 'false') {
    if (value === 'true') {
      this.check()
    } else {
      this.uncheck()
    }

    return this
  }

  check() {

  }

  uncheck() {

  }

  isChecked() {
    // return this.element.isCh
    return true
  }
}
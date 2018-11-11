import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface ICheckboxesPageArgs extends IHerukoAppPageArgs {

}

export class CheckboxesPage extends HerukoAppPage {

  constructor(args: ICheckboxesPageArgs = {}) {
    super(Object.assign(args, {basePath: 'checkboxes', elementStore: stores.demo}))
  }

  get checkboxes() {
    return this.container.$.ElementList(xpath('//input').attribute('type', 'checkbox'))
  }
}
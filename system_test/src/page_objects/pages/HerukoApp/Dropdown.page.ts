import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface IDropdownPageArgs extends IHerukoAppPageArgs {

}

export class DropdownPage extends HerukoAppPage {

  constructor(args: IDropdownPageArgs = {}) {
    super(Object.assign(args, {basePath: 'dropdown', elementStore: stores.demo}))
  }

  get dropdown() {
    return this.container.$.Dropdown('//select')
  }

  get defaultOption() {
    return this.dropdown.$.ExistElement(xpath('//option').text('Please select an option'))
  }
}
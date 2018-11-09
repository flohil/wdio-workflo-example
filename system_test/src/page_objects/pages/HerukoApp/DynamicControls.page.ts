import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface IDynamicControlsArgs extends IHerukoAppPageArgs {

}

export class DynamicControlsPage extends HerukoAppPage {

  constructor(args: IDynamicControlsArgs = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  get enableButton() {
    return this.container.$.Element(
      xpath('//button').text('Enable')
    )
  }

  get input() {
    return this.container.$.Input(
      xpath('//form').id('input-example').append('//input')
    )
  }
}
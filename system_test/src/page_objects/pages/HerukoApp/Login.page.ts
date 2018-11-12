import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface ILoginPageArgs extends IHerukoAppPageArgs {

}

export class LoginPage extends HerukoAppPage {

  constructor(args: ILoginPageArgs = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  get usernameByName() {
    return this.container.$.Input(
      xpath('//input').name('username')
    )
  }

  get usernameById() {
    return this.container.$.Input(
      xpath('//input').id('username')
    )
  }
}
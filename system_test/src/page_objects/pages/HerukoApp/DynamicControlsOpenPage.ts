import { IHerukoAppPageArgs } from './HerukoAppPage'
import { stores } from '?/page_objects'
import { DynamicControlsPage } from './DynamicControlsPage';

export interface IDynamicControlsOpenPageArgs extends IHerukoAppPageArgs {

}

export class DynamicControlsOpenPage extends DynamicControlsPage {

  constructor(args: IDynamicControlsOpenPageArgs = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  isOpen() {
    return this.message.currently.isVisible() && this.message.currently.hasText("It's enabled!")
  }

  isClosed() {
    return this.message.currently.not.isVisible() || this.message.currently.not.hasText("It's enabled!")
  }
}
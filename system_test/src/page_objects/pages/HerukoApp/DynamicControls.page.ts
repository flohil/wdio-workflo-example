import { HerukoAppPage, IHerukoAppPageArgs } from './HerukoApp.page'
import { stores, core } from '?/page_objects'

export interface IDynamicControlsPageArgs extends IHerukoAppPageArgs {

}

export class DynamicControlsPage extends HerukoAppPage {

  constructor(args: IDynamicControlsPageArgs = {}) {
    super(Object.assign(args, {basePath: 'dynamic_controls', elementStore: stores.demo}))
  }

  get checkbox() {
    return this.container.$.Checkbox(
      xpath('//input').attribute('label', 'blah')
    )
  }

  get paragraph() {
    return this.container.$.Element(
      '//p'
    )
  }

  get paragraphList() {
    return this.container.$.ElementList(
      '//p'
    )
  }

  get removeButton() {
    return this.container.$.Element(
      xpath('//button').text('Remove')
    )
  }

  get message() {
    return this.container.$.Element(
      xpath('//p').id('message')
    )
  }

  get enableButton() {
    return this.container.$.Element(
      xpath('//button').text('Enable')
    )
  }

  get buttonList() {
    return this.container.$.ElementList(
      xpath('//button')
    )
  }

  get nonExistingButtonList() {
    return this.container.$.ElementList(
      xpath('//button').id('asdf')
    )
  }

  get input() {
    return this.container.$.Input(
      xpath('//form').id('input-example').append('//input')
    )
  }

  get inputs() {
    return this.container.$.InputList(
      xpath('//form').id('input-example').append('//input')
    )
  }

  get footer() {
    return this.container.$.Element(
      xpath('//div').id('page-footer')
    )
  }

  get poweredBy() {
    return this.container.$.Element(
      xpath('//div').attribute('style', 'text-align: center;')
    )
  }

  get nonExistingDiv() {
    return this.container.$.Element(xpath('//div').id('asdfasdfasdfasdf'))
  }

  get nonExistingDivList() {
    return this.container.$.ExistElementList(xpath('//div').id('asdfasdfasdfasdf'))
  }
}
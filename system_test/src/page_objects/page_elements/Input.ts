import { pageObjects as core } from 'wdio-workflo'
import { GoogleStore } from '../stores'

export interface IInputOpts<Store extends GoogleStore> extends core.elements.IPageElementOpts<Store> {}

export class Input<Store extends GoogleStore> extends core.elements.PageElement<Store> implements Workflo.PageNode.ISetValue<string> {

  setValue( value: string ) {
    const valueStr = '' + value
    const maxTries = 10
    let tries = 0

    this.element.setValue(value)

    while ( this.currently.getValue() !== valueStr && tries < maxTries ) {
      this.currently.element.setValue(value)
    }

    // on IE, this does not work reliably - recheck until values has been set!

    // on IE, sometimes capital and lower case letters
    // are not inserted correctly - try again

    // SHOULD NOT BE NEEDED ANY LONGER

    /*const maxTries = 10
    let tries = 0

    const _global: any = global

    if ( !_global.typeDelay ) {
      this.element.setValue( value )
    }

    while ( this.element.getValue() !== valueStr && tries < maxTries ) {
      if ( _global.typeDelay ) {
        if ( _global.typeSingleKey ) {
          let tempStr = valueStr

          // delete previous content
          this.element.setValue('')

          while ( tempStr.length > 0 ) {
            const firstChar = tempStr.substring( 0, 1 )
            tempStr = tempStr.substring(1, tempStr.length)

            browser.keys([firstChar])

            // increase delay by 100 milliseconds for next try
            browser.pause( _global.typeDelay + tries * 100 )
          }
        } else {
          const lastChar = browser.selectorExecute(this.selector, (inputs, value) => {
            inputs[0].value = value
            return inputs[0].value.slice(-1)
          }, value)
          browser.pause( _global.typeDelay + tries * 100 )
          this.element.click()
          browser.keys(['Backspace', lastChar])
        }
      } else {
        this.element.setValue( value )
      }
      tries++
    }*/

    return this
  }
}
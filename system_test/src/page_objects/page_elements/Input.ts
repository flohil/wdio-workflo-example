import { DemoStore } from '../stores'
import { ValuePageElement, ValuePageElementCurrently, IValuePageElementOpts } from './ValuePageElement'

export interface IInputOpts<Store extends DemoStore> extends IValuePageElementOpts<Store> {}

export class Input<Store extends DemoStore> extends ValuePageElement<Store, string> {

  readonly currently = new InputCurrently(this)

  setValue(value: string): this {
    this.element.setValue(value)

    return this
  }

  printTestValue = () => {
    return super.printTestValue() + 'testValue in Input'
  }

  printValueTestValue() {
    return super.printValueTestValue() + 'valueTestValue in Input'
  }
}

export class InputCurrently<
  Store extends DemoStore,
  PageElementType extends Input<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this.element.getValue()
  }

  printBooleanStr = () => {
    return super.printBooleanStr() + 'asdf'
  }

  get not() {
    return {...super.not,
      printBooleanStr: () => {
        return 'not' + super.printBooleanStr()
      }
    }
  }
}
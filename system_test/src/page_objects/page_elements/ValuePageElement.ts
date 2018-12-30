import { pageObjects as core, helpers } from 'wdio-workflo'

import { PageElementStore } from '../stores'
import {
  PageElement,
  PageElementCurrently,
  PageElementEventually,
  PageElementWait,
  IPageElementOpts
} from '../page_elements'

/**
 * This interface can be used to extend wdio-workflo's IValuePageElementOpts interface.
 * It is supposed to serve as the base IValuePageElementOpts interface throughout your project.
 */
export interface IValuePageElementOpts<
  Store extends PageElementStore
> extends core.elements.IValuePageElementOpts<Store>, IPageElementOpts<Store> {}

// /**
//  * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElement class.
//  * It is supposed to serve as the base ValuePageElement class throughout your project.
//  */
// export abstract class ValuePageElement<
//   Store extends PageElementStore,
//   ValueType
// > extends core.elements.ValuePageElement<Store, ValueType>
// implements PageElement<Store> {
//   printTestValue: () => string

//   readonly abstract currently: ValuePageElementCurrently<Store, this, ValueType>
//   readonly wait: ValuePageElementWait<Store, this, ValueType>
//   readonly eventually: ValuePageElementEventually<Store, this, ValueType>

//   testProp: string;
//   testValueProp: string

//   constructor(selector: string, opts?: IValuePageElementOpts<Store>) {
//     super(selector, opts)

//     this.testProp = 'testProp in ValuePageElement'
//     this.testValueProp = 'testValueProp in ValuePageElement'

//     this.wait = new ValuePageElementWait(this)
//     this.eventually = new ValuePageElementEventually(this)

//     this.printTestValue()
//   }

//   printValueTestValue() {
//     return 'testValue in ValuePageElement'
//   }
// }

// export abstract class ValuePageElementCurrently<
//   Store extends PageElementStore,
//   PageElementType extends ValuePageElement<Store, ValueType>,
//   ValueType
// > extends core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType>
// implements PageElementCurrently<Store, PageElementType> {
//   printBooleanStr: () => string

//   readonly not: core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType> &
//     PageElementCurrently<Store, PageElementType>['not']
// }

// export class ValuePageElementWait<
//   Store extends PageElementStore,
//   PageElementType extends ValuePageElement<Store, ValueType>,
//   ValueType
// > extends core.elements.ValuePageElementWait<Store, PageElementType, ValueType>
// implements PageElementWait<Store, PageElementType> {}

// export class ValuePageElementEventually<
//   Store extends PageElementStore,
//   PageElementType extends ValuePageElement<Store, ValueType>,
//   ValueType
// > extends core.elements.ValuePageElementEventually<Store, PageElementType, ValueType>
// implements PageElementEventually<Store, PageElementType> {}

// // mixin functionalities of extended PageElement base class -> https://www.typescriptlang.org/docs/handbook/mixins.html

// helpers.applyMixins(ValuePageElement, [PageElement]);
// helpers.applyMixins(ValuePageElementCurrently, [PageElementCurrently]);
// helpers.applyMixins(ValuePageElementWait, [PageElementWait]);
// helpers.applyMixins(ValuePageElementEventually, [PageElementEventually]);


/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's ValuePageElement class.
 * It is supposed to serve as the base ValuePageElement class throughout your project.
 */
export abstract class ValuePageElement<
  Store extends PageElementStore,
  ValueType
> extends PageElement<Store>
implements core.elements.ValuePageElement<Store, ValueType> {

  readonly abstract currently: ValuePageElementCurrently<Store, this, ValueType>
  readonly wait: ValuePageElementWait<Store, this, ValueType>
  readonly eventually: ValuePageElementEventually<Store, this, ValueType>

  testProp: string;
  testValueProp: string

  constructor(selector: string, opts?: IValuePageElementOpts<Store>) {
    super(selector, opts)

    this.testProp = 'testProp in ValuePageElement'
    this.testValueProp = 'testValueProp in ValuePageElement'

    this.wait = new ValuePageElementWait(this)
    this.eventually = new ValuePageElementEventually(this)

    this.printTestValue()
  }

  printTestValue: () => string

  printValueTestValue() {
    return 'testValue in ValuePageElement'
  }

  abstract setValue(value: ValueType): this;

  getValue: () => ValueType;
  getHasValue: (value: ValueType) => boolean;
  getHasAnyValue: () => boolean;
  getContainsValue: (value: ValueType) => boolean;
}

export abstract class ValuePageElementCurrently<
  Store extends PageElementStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementCurrently<Store, PageElementType>
implements core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType> {
  getValue: () => ValueType
  getHasValue: (value: ValueType) => boolean
  getHasAnyValue: () => boolean
  getContainsValue: (value: ValueType) => boolean
  hasValue: (value: ValueType) => boolean
  hasAnyValue: () => boolean
  containsValue: (value: ValueType) => boolean

  printBooleanStr: () => string

  readonly not: core.elements.ValuePageElementCurrently<Store, PageElementType, ValueType>['not'] &
    PageElementCurrently<Store, PageElementType>['not']
}

export class ValuePageElementWait<
  Store extends PageElementStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementWait<Store, PageElementType>
implements core.elements.ValuePageElementWait<Store, PageElementType, ValueType> {
  hasValue: (value: ValueType, opts?: Workflo.IWDIOParamsReverseInterval) => PageElementType
  hasAnyValue: (opts?: Workflo.IWDIOParamsReverseInterval) => PageElementType
  containsValue: (value: ValueType, opts?: Workflo.IWDIOParamsReverseInterval) => PageElementType

  readonly not: core.elements.ValuePageElementWait<Store, PageElementType, ValueType>['not'] &
    PageElementWait<Store, PageElementType>['not']
}

export class ValuePageElementEventually<
  Store extends PageElementStore,
  PageElementType extends ValuePageElement<Store, ValueType>,
  ValueType
> extends PageElementEventually<Store, PageElementType>
implements core.elements.ValuePageElementEventually<Store, PageElementType, ValueType> {
  hasValue: (value: ValueType, opts?: Workflo.IWDIOParamsInterval) => boolean
  hasAnyValue: (opts?: Workflo.IWDIOParamsInterval) => boolean
  containsValue: (value: ValueType, opts?: Workflo.IWDIOParamsInterval) => boolean

  readonly not: core.elements.ValuePageElementEventually<Store, PageElementType, ValueType>['not'] &
    PageElementEventually<Store, PageElementType>['not']
}

// mixin functionalities of extended PageElement base class -> https://www.typescriptlang.org/docs/handbook/mixins.html

helpers.applyMixins(ValuePageElement, [PageElement]);
helpers.applyMixins(ValuePageElementCurrently, [PageElementCurrently]);
helpers.applyMixins(ValuePageElementWait, [PageElementWait]);
helpers.applyMixins(ValuePageElementEventually, [PageElementEventually]);
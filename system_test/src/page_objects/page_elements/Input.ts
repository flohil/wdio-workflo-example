import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

// If you need to pass opts properties to Input's constructor, add them here
export interface IInputOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Input<
  Store extends PageNodeStore
> extends ValuePageElement<Store, string> {

  // The parameters of a PageNode constructor are always the same:
  // 1st param is XPath selector, 2nd param is opts parameter
  constructor(selector: string, opts: IInputOpts<Store>) {
    super(selector, opts);
  }

  // We need to implement InputCurrently because its .getValue() method serves as the
  // base implementation for all state retrieval and state check functions in Input and its
  // .currently, .wait and .eventually apis.
  readonly currently = new InputCurrently(this);

  // Action functions (functions which change the state of the tested application) are supposed to
  // always perform the PageElement's initial waiting condition before interacting with the
  // application.
  setValue(value: string): this {

    // PageElementBase.element implicitly invokes the PageElement's initial waiting condition
    this.element.setValue(value);

    return this;
  }
}

export class InputCurrently<
  Store extends PageNodeStore,
  PageElementType extends Input<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  // This method serves as the "base implementation" for the functions hasValue(), hasAnyValue() and
  // containsValue() in the .currently, .wait and .eventually apis and for Input.hasValue().
  getValue(): string {

    // PageElementBaseCurrently.element does not invoke the PageElement's initial waiting condition
    return this.element.getValue();
  }
}

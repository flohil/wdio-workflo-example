import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

export interface IInputOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Input<
  Store extends PageNodeStore
> extends ValuePageElement<Store, string> {

  readonly currently: InputCurrently<Store, this> = new InputCurrently(this);

  constructor(selector: string, opts: IInputOpts<Store>) {
    super(selector, opts);
  }

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

  getValue(): string {
    // PageElementBaseCurrently.element does not invoke the PageElement's initial waiting condition
    return this.element.getValue();
  }
}

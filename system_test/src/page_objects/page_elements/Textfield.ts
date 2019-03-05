import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

export interface ITextfieldOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Textfield<
  Store extends PageNodeStore
> extends ValuePageElement<Store, string> {

  readonly currently = new TextfieldCurrently(this);

  constructor(selector: string, opts: ITextfieldOpts<Store>) {
    super(selector, opts);
  }

  get label() {
    return this.$.Element(
      xpath('//label').classContains('ms-Label')
    );
  }

  get input() {
    return this.$.Input(
      xpath('//input')
    );
  }

  setValue(value: string): this {
    this.input.setValue(value);

    return this;
  }
}

export class TextfieldCurrently<
  Store extends PageNodeStore,
  PageElementType extends Textfield<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue(): string {
    return this._node.input.currently.getValue();
  }
}

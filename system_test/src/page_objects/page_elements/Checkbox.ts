import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

export interface ICheckboxOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Checkbox<
  Store extends PageNodeStore
> extends ValuePageElement<Store, boolean> {

  readonly currently = new CheckboxCurrently(this);

  constructor(selector: string, opts: ICheckboxOpts<Store>) {
    super(selector, opts);
  }

  get label() {
    return this.$.Element(
      xpath('//span').classContains('ms-Checkbox-text')
    );
  }

  setValue(value: boolean): this {
    if (this.currently.getValue() !== value) {
      this.label.click();
    }

    return this;
  }
}

export class CheckboxCurrently<
  Store extends PageNodeStore,
  PageElementType extends Checkbox<Store>
> extends ValuePageElementCurrently<Store, PageElementType, boolean> {

  getValue() {
    return this.not.isChecked();
  }

  isChecked() {
    return this.containsClass('is-checked');
  }

  get not() {
    return {
      ...super.not,
      isChecked: () => {
        // we use an arrow function so that `this` is CheckboxCurrently instead of the `not` object
        return this.not.containsClass('is-checked');
      }
    };
  }
}

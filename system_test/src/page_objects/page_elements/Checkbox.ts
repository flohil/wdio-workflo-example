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

  setValue(value: boolean): this {
    const currentValue = this.currently.getValue();

    if (value !== currentValue) {
      this.click({
        // We can define a postCondition for a successful click - if the click did not work
        // on the first try, it will be repeated until postCondition is met or a timeout is reached.
        postCondition: () => this.currently.isChecked() === !currentValue
      });
    }

    return this;
  }
}

export class CheckboxCurrently<
  Store extends PageNodeStore,
  PageElementType extends Checkbox<Store>,
> extends ValuePageElementCurrently<Store, PageElementType, boolean> {

  getValue() {
    // Unfortunately the npmjs site doesn't show the "checked" HTML attribute for inputs in the DOM.
    // So we need to read the "checked" property of the corresponding HTMLInputElement.
    // !!! If possible, such a solution should be avoided because it is brittle and slow.
    // Instead, try to detect a "checked" HTML attribute via xpath if possible.
    return browser.selectorExecute(
      this._node.getSelector(), function (inputs: HTMLInputElement[]) {
        if (inputs.length > 0) {
          return inputs[0].checked;
        }
      }
    ) as boolean;
  }}

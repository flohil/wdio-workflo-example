import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

export interface IRadioButtonOpts<
 Store extends PageNodeStore,
 OptionKeys extends string
> extends IValuePageElementOpts<Store> {
  /**
   * An object whose values are the texts for the possible options of RadioButton.
   * The object's keys correspond to the "value" attribute of the RadioButton's inputs.
   */
  texts: Record<OptionKeys, string>;
}

export class RadioButton<
  Store extends PageNodeStore,
  OptionKeys extends string
> extends ValuePageElement<Store, OptionKeys> {

  readonly currently = new RadioButtonCurrently<Store, this, OptionKeys>(this);

  protected readonly _texts: IRadioButtonOpts<Store, OptionKeys>['texts'];

  // The parameters of a PageNode constructor are always the same:
  // 1st param is XPath selector, 2nd param is opts parameter
  constructor(selector: string, opts: IRadioButtonOpts<Store, OptionKeys>) {
    super(selector, opts);

    this._texts = opts.texts;
  }

  get optionsMap() {
    return this.$.ElementMap(
      xpath('//label').classContains('__checkboxLabel__'), {
        identifier: {
          mappingObject: this._texts,
          mappingFunc: (baseSelector, mappingValue) => xpath(baseSelector).text(mappingValue)
        }
      }
    );
  }

  setValue(value: OptionKeys): this {
    this.optionsMap.$[value].click();

    return this;
  }
}

export class RadioButtonCurrently<
  Store extends PageNodeStore,
  PageElementType extends RadioButton<Store, OptionKeys>,
  OptionKeys extends string
> extends ValuePageElementCurrently<Store, PageElementType, OptionKeys> {

  getValue() {
    let selectedKey: OptionKeys = null;

    Object.keys(this._node.optionsMap).forEach(key => {
      const optionKey = key as OptionKeys; // Object.keys returns a string[] so we need to cast

      const inputSelector = this._node.optionsMap.$[optionKey].getSelector();

      // Unfortunately the npmjs site provides no way to detect the selected radio input via xpath.
      // So we need to read the "checked" attribute of the corresponding HTMLInputElement.
      // !!! If possible, such a solution should be avoided because it is brittle and slow.
      // Instead, try to detect a "checked" input via xpath if possible.
      const isChecked = browser.selectorExecute(
        inputSelector, function (inputs: HTMLInputElement[]) {
          if (inputs.length > 0) {
            return inputs[0].checked;
          }
        }
      );

      if (isChecked) {
        selectedKey = optionKey;
      }
    });

    return selectedKey;
  }}

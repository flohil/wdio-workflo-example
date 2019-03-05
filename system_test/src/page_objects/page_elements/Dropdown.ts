import { PageNodeStore } from '../stores';
import {
  IValuePageElementOpts,
  ValuePageElement,
  ValuePageElementCurrently
} from './ValuePageElement';

export interface IDropdownOpts<
 Store extends PageNodeStore
> extends IValuePageElementOpts<Store> {}

export class Dropdown<
  Store extends PageNodeStore
> extends ValuePageElement<Store, string> {

  readonly currently = new DropdownCurrently(this);

  constructor(selector: string, opts: IDropdownOpts<Store>) {
    super(selector, opts);
  }

  private _cachedDropdownId: string;

  private get _dropdownId() {
    return this._cachedDropdownId || this.listbox.currently.getId();
  }

  get label() {
    return this.$.Element(
      xpath('//label').classContains('ms-Dropdown-label')
    );
  }

  get listbox() {
    return this.$.Element(
      xpath('//div').attribute('role', 'listbox')
    );
  }

  get valueSpan() {
    return this.$.Element(
      xpath('//span').attribute('role', 'option')
    );
  }

  get optionsContainer() {
    // In Office UI Fabric, the options of a Dropdown reside in a different layer
    // than the "original" dropdown field.
    // Therefore, we must use this._store instead of .$ to retrieve the
    // PageElement for the options container since .$ would prepend the XPath
    // selector of the "original" dropdown (which resides in another layer).
    return this._store.Element(
      xpath('//div').attribute('role', 'listbox').id(`${this._dropdownId}-list`)
    );
  }

  get optionsList() {
    return this.optionsContainer.$.ElementList(
      xpath('//button')
    );
  }

  isOptionsListOpen() {
    const expandedAttribute = {
      name: 'aria-expanded',
      value: 'true'
    };

    return this.listbox.currently.hasAttribute(expandedAttribute);
  }

  openOptionsList() {
    if (!this.isOptionsListOpen()) {
      this.listbox.click();
    }
  }

  closeOptionsList() {
    if (this.isOptionsListOpen()) {
      this.listbox.click();
    }
  }

  setValue(value: string): this {
    if (this.currently.getValue() !== value) {
      this.openOptionsList();

      this.optionsList.where.attribute('title', value).getFirst().click();
    }

    return this;
  }
}

export class DropdownCurrently<
  Store extends PageNodeStore,
  PageElementType extends Dropdown<Store>
> extends ValuePageElementCurrently<Store, PageElementType, string> {

  getValue() {
    return this._node.valueSpan.currently.getAttribute('aria-label');
  }
}

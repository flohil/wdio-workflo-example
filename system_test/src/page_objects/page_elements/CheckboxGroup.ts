import { pageObjects as workflo } from 'wdio-workflo'
import { Checkbox, ICheckboxOpts } from './'
import { DemoStore } from '../stores'

export interface ICheckboxListGroupOpts<
  Store extends DemoStore
> extends workflo.elements.IPageElementOpts<Store> {
  listOptions?: Pick<
    workflo.elements.IPageElementListOpts<Store, Checkbox<Store>, Pick<ICheckboxOpts<Store>, "timeout" | "waitType">>,
    "timeout" | "disableCache"
  >
  elementOptions?: Pick<ICheckboxOpts<Store>, "timeout" | "waitType">
}

export class CheckboxListGroup<
  Store extends DemoStore
> extends workflo.elements.PageElement<Store> {
  protected _checkboxList: workflo.elements.PageElementList<Store, Checkbox<Store>, Pick<ICheckboxOpts<Store>, "timeout" | "waitType">>

  // identifyBy can be used to determine the criteria
  // that identifies a checkbox.
  // In getValue(), it will determine what will be used
  // as the key of the return object and in setValue()
  // it will be used to identiy the checkboxes by a criteria
  // corresponding to the value object's keys.
  //
  // If throwOnMissingSetValue is true, setValue() will throw
  // an error if not all checkboxes in the checkboxlist were
  // matched by a key/value property in the passed values
  // object.
  constructor(
    selector: string,
    {
      listOptions,
      elementOptions,
      ...superOpts
    } : ICheckboxListGroupOpts<Store>
  ) {
    super(
      selector,
      superOpts
    )

    const checkboxListSelector =
    `${this._selector}//label[@data-react-toolbox="checkbox"]`

    this._checkboxList = this._store.CheckboxList(
      checkboxListSelector,
      {
        ...listOptions,
        elementOptions
      }
    )
  }

  get checkboxList() {
    return this._checkboxList
  }

  // returns Checkboxes as object where the keys
  // correspond to the label's identifiedBy target (eg. text) and
  // the values are true for selected and false for unselected checkboxes
  getValue() {
    const value: Record<string, boolean> = {}

    this.checkboxList.all.forEach(
      ( checkbox ) => {
        value[ this.getKeyName(checkbox) ] = checkbox.getValue()
      }
    )

    return value
  }

  // values are an object where the keys corrspond to a
  // checkbox property defined by identifiyBy in constructor
  // and the values can be either true or false
  setValue( values: Record<string, boolean> ) {
    for (const key in values) {
      if (values.hasOwnProperty(key) && values[key] === true) {
        let checkbox: Checkbox<Store> = this.checkboxList.where.constraint(`.//span[@data-react-toolbox="label" and .="${key}"]`).getFirst()

        if (!checkbox.eventually.exists()) {
          throw new Error(`Checkbox ${key} in CheckboxListGroup does not exist: ${checkbox.getSelector()}`)
        }

        checkbox.check()
      }
    }

    return this
  }

  protected getKeyName(checkbox: Checkbox<Store>) {
    return checkbox.getText()
  }
}
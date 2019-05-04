import { pageObjects as core } from 'wdio-workflo';

import {
  IInputOpts,
  Input,
  IPageElementOpts,
  PageElement,
  Textfield,
  ITextfieldOpts,
  ICheckboxOpts,
  Checkbox,
  Dropdown,
  IDropdownOpts,
  ILinkOpts,
  Link
} from '../page_elements';

/**
 * This class can be used to extend or customize the functionality provided by wdio-workflo's
 * PageNodeStore class. It is supposed to serve as the base PageNodeStore class throughout your
 * project.
 */
export class PageNodeStore extends core.stores.PageNodeStore {

// ELEMENTS

  Element(
    selector: Workflo.XPath,
    opts?: Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>,
  ) {
    return this._getElement<PageElement<this>, IPageElementOpts<this>>(
      selector,
      PageElement,
      {
        store: this,
        ...opts,
      },
    );
  }

  ExistElement(
    selector: Workflo.XPath,
    opts?: Pick<IPageElementOpts<this>, Exclude<Workflo.Store.ElementPublicKeys, 'waitType'>>,
  ) {
    return this.Element(
      selector,
      {
        waitType: Workflo.WaitType.exist,
        ...opts,
      },
    );
  }

  Input(
    selector: Workflo.XPath,
    opts?: Pick<IInputOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<Input<this>, IInputOpts<this>>(
      selector,
      Input,
      {
        store: this,
        ...opts,
      },
    );
  }

  Textfield(
    selector: Workflo.XPath,
    opts?: Pick<ITextfieldOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<Textfield<this>, ITextfieldOpts<this>>(
      selector,
      Textfield,
      {
        store: this,
        ...opts,
      },
    );
  }

  Checkbox(
    selector: Workflo.XPath,
    opts?: Pick<ICheckboxOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<Checkbox<this>, ICheckboxOpts<this>>(
      selector,
      Checkbox,
      {
        store: this,
        ...opts,
      },
    );
  }

  Dropdown(
    selector: Workflo.XPath,
    opts?: Pick<IDropdownOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<Dropdown<this>, IDropdownOpts<this>>(
      selector,
      Dropdown,
      {
        store: this,
        ...opts,
      },
    );
  }

  Link(
    selector: Workflo.XPath,
    opts?: Pick<ILinkOpts<this>, Workflo.Store.BaseKeys>,
  ) {
    return this._getElement<Link<this>, ILinkOpts<this>>(
      selector,
      Link,
      {
        store: this,
        ...opts,
      },
    );
  }

// LISTS

  ElementList(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementListOpts<
        this, PageElement<this>, Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.ListPublicKeys,
      Workflo.Store.ListPublicPartialKeys
    > = {},
  ) {
    return this.List(
      selector,
      {
        elementOpts: { ...opts.elementOpts },
        elementStoreFunc: this.Element,
        ...opts,
      },
    );
  }

  ExistElementList(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementListOpts<
        this, PageElement<this>, Pick<IPageElementOpts<this>, 'timeout'>
      >,
      Exclude<Workflo.Store.ListPublicKeys, 'waitType'>,
      Workflo.Store.ListPublicPartialKeys
    > = {},
  ) {
    return this.List(
      selector,
      {
        elementOpts: { ...opts.elementOpts },
        elementStoreFunc: this.ExistElement,
        waitType: Workflo.WaitType.exist,
        ...opts,
      },
    );
  }

  InputList(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IValuePageElementListOpts<
        this, Input<this>, Pick<IInputOpts<this>, Workflo.Store.ElementPublicKeys>, string
      >,
      Workflo.Store.ListPublicKeys,
      Workflo.Store.ListPublicPartialKeys
    > = {},
  ) {
    return this.ValueList(
      selector,
      {
        elementOpts: { ...opts.elementOpts },
        elementStoreFunc: this.Input,
        ...opts,
      },
    );
  }

// MAPS

  ElementMap<K extends string>(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementMapOpts<
        this, K, PageElement<this>, Pick<IPageElementOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.MapPublicKeys,
      Workflo.Store.MapPublicPartialKeys
    >,
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.Element,
        elementOpts: { ...opts.elementOpts },
        ...opts,
      },
    );
  }

  ExistElementMap<K extends string>(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementMapOpts<
        this, K, PageElement<this>, Pick<
          IPageElementOpts<this>, Exclude<Workflo.Store.ElementPublicKeys, 'waitType'>
        >
      >,
      Workflo.Store.MapPublicKeys,
      Workflo.Store.MapPublicPartialKeys
    >,
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.ExistElement,
        elementOpts: { ...opts.elementOpts },
        ...opts,
      },
    );
  }

  LinkMap<K extends string>(
    selector: Workflo.XPath,
    opts: Workflo.PickPartial<
      core.elements.IPageElementMapOpts<
        this, K, Link<this>, Pick<ILinkOpts<this>, Workflo.Store.ElementPublicKeys>
      >,
      Workflo.Store.MapPublicKeys,
      Workflo.Store.MapPublicPartialKeys
    >,
  ) {
    return this.Map(
      selector,
      {
        elementStoreFunc: this.Link,
        elementOpts: { ...opts.elementOpts },
        ...opts,
      },
    );
  }
}

export const pageNode = new PageNodeStore();

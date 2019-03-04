import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class Registration extends BasePage<stores.PageNodeStore> {

  constructor() {
    super({
      store: stores.pageNode,
      pageName: 'registration'
    });
  }

  get form() {
    const $ = this.container.$;

    return this._store.ValueGroup({
      get username() {
        return $.Input(
          xpath('//input').id('signup_fullname')
        );
      },
      get email() {
        return $.Input(
          xpath('//input').id('signup_email')
        );
      },
      get password() {
        return $.Input(
          xpath('//input').id('signup_name')
        );
      },
      get country() {
        return $.Input(
          xpath('//input').id('signup_password')
        );
      },
      get acceptTerms() {
        return $.Checkbox(
          xpath('//input').id('signup_npmweekly')
        );
      },
    });
  }

  get submitButton() {
    return this.container.$.Element(
      xpath('//button').text('Submit')
    );
  }
}

export const registration = new Registration();

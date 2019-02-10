import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class SignUpPage extends BasePage<stores.PageNodeStore> {

  constructor() {
    super({
      store: stores.pageNode,
      pageName: 'signup'
    });
  }

  get signupForm() {
    const $ = this.container.$;

    return this._store.ValueGroup({
      get fullname() {
        return $.Input(
          xpath('//input').id('signup_fullname')
        );
      },
      get email() {
        return $.Input(
          xpath('//input').id('signup_email')
        );
      },
      get username() {
        return $.Input(
          xpath('//input').id('signup_name')
        );
      },
      get password() {
        return $.Input(
          xpath('//input').id('signup_password')
        );
      },
      get checkWeekly() {
        return $.Checkbox(
          xpath('//input').id('signup_npmweekly')
        );
      },
      get checkLicense() {
        return $.Checkbox(
          xpath('//input').id('signup_eula-agreement')
        );
      }
    });
  }
}

export const signup = new SignUpPage();

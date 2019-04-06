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
        return $.Textfield(
          xpath('//div').classContains('ms-TextField').hasChild(
            '//label', xpath => xpath.text('Username')
          )
        );
      },
      get email() {
        return $.Textfield(
          xpath('//div').classContains('ms-TextField').hasChild(
            '//label', xpath => xpath.text('Email')
          )
        );
      },
      get password() {
        return $.Textfield(
          xpath('//div').classContains('ms-TextField').hasChild(
            '//label', xpath => xpath.text('Password')
          )
        );
      },
      get country() {
        return $.Dropdown(
          xpath('//div').classContains('ms-Dropdown-container').hasChild(
            '//label', xpath => xpath.text('Country')
          )
        );
      },
      get acceptTerms() {
        return $.Checkbox(
          xpath('//div').classContains('ms-Checkbox').hasChild(
            '//span', xpath => xpath.classContains('ms-Checkbox-text').text('Accept terms')
          )
        );
      },
    });
  }

  get submitButton() {
    return this.container.$.Element(
      xpath('//button').text('Submitttt')
    );
  }

  get feedbackField() {
    return this.container.$.Element(
      xpath('//div').classContains('Registration-thanks')
    );
  }
}

export const registration = new Registration();

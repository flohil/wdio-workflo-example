import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export class SupportPage extends BasePage<stores.PageNodeStore> {

  constructor() {
    super({
      store: stores.pageNode,
      pageName: 'support'
    });
  }

  get contactForm() {
    const $ = this.container.$;

    return this.container.$.ValueGroup({
      get username() {
        return $.Input(
          xpath('//input').id('contact_username')
        );
      },
      get email() {
        return $.Input(
          xpath('//input').id('contact_email')
        );
      },
      get yourName() {
        return $.Input(
          xpath('//input').id('contact_name')
        );
      },
      get subject() {
        return $.Input(
          xpath('//input').id('contact_subject')
        );
      },
      get message() {
        return $.Input(
          xpath('//textarea').id('message')
        );
      },
      get contactInquire() {
        return $.RadioButton(
          xpath('fieldset'), {
            texts: {
              general: "This is a general inquiry",
              support: "I need help with something",
              security: "I'm reporting a security issue"
            }
          }
        );
      }
    });
  }
}

export const support = new SupportPage();

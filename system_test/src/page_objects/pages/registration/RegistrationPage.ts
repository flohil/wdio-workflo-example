import { stores } from '?/page_objects';
import { BasePage } from '../BasePage';

export type RegistrationFormData = Workflo.PageNode.ExtractValue<RegistrationPage['form']['$']>;

export class RegistrationPage extends BasePage<stores.PageNodeStore> {

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

  get form2() {
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
      get inputList() {
        return $.InputList(
          xpath('//input')
        );
      },
      get inputMap() {
        return $.InputMap(
          xpath('//input'), {
            identifier: {
              mappingObject: {
                input1: 'Input1',
                input2: 'Input2'
              },
              mappingFunc: (baseSelector, value) => xpath(baseSelector).text(value)
            }
          }
        );
      }
    });
  }

  get form3() {
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
      get inputList() {
        return $.InputList(
          xpath('//input')
        );
      },
      get inputMap() {
        return $.InputMap(
          xpath('//input'), {
            identifier: {
              mappingObject: {
                input1: 'Input1',
                input2: 'Input2'
              },
              mappingFunc: (baseSelector, value) => xpath(baseSelector).text(value)
            }
          }
        );
      },
      get innerGroup() {
        return $.ValueGroup({
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
          get inputList() {
            return $.InputList(
              xpath('//input')
            );
          },
          get inputMap() {
            return $.InputMap(
              xpath('//input'), {
                identifier: {
                  mappingObject: {
                    input1: 'Input1',
                    input2: 'Input2'
                  },
                  mappingFunc: (baseSelector, value) => xpath(baseSelector).text(value)
                }
              }
            );
          }
        });
      }
    });
  }

  get formText() {
    const $ = this.container.$;

    return this._store.ElementGroup({
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
      xpath('//button').text('Submit')
    );
  }

  get feedbackField() {
    return this.container.$.Element(
      xpath('//div').classContains('Registration-thanks')
    );
  }

  get inputMap() {
    return this.container.$.InputMap(
      xpath('//input'), {
        identifier: {
          mappingObject: {
            input1: 'Input1',
            input2: 'Input2'
          },
          mappingFunc: (baseSelector, value) => xpath(baseSelector).text(value)
        }
      }
    );
  }
}

export const registration = new RegistrationPage();

const hasMapValues = registration.form2.$.inputMap.currently.hasValue({
  input1: 'asdf',
  input2: 'jodel'
});

const mapAreEnabled = registration.inputMap.currently.isEnabled({
  input1: true
});

expectMap(registration.inputMap).toBeEnabled({
  input1: true,

});

expectMap(registration.inputMap).toHaveValue({
  input1: 'asdf'
});

const hasValues = registration.form.currently.hasValue({
  username: 'asdf',
  password: 'asdf',
  country: 'Germany',
  email: 'a@b.com',
  acceptTerms: true
});

const values = registration.form.currently.getValue();

const valuesWithMask = registration.form.currently.getValue({
  acceptTerms: true,
  country: false,
  email: false,
  password: true,
  username: true
});

values.acceptTerms = false;

const isEnabled = registration.form.currently.getIsEnabled({
  acceptTerms: true,
});



const a = expectGroup(registration.formText).toBeEnabled({
  acceptTerms: true
});

expectGroup(registration.form2).toBeEnabled({
  acceptTerms: true,
  inputMap: {
    input1: true
  }
});


const hasValues2 = registration.form2.currently.hasValue({
  username: 'asdf',
  password: 'asdf',
  country: 'Germany',
  email: 'a@b.com',
  acceptTerms: true,
  inputList: ['jodel', 'dodel'],
  inputMap: {
    input1: 'asdf',
    input2: 'jodel'
  }
});

const values2 = registration.form2.currently.getValue();

const values2WithMask = registration.form2.currently.getValue({
  acceptTerms: true,
  country: false,
  email: false,
  password: true,
  username: true,
  inputList: [true, false],
  inputMap: {
    input1: true,
    input2: false,
  }
});

const values2WithMask_b = registration.form2.currently.getValue({
  acceptTerms: true,
  country: false,
  email: false,
  password: true,
  username: true,
  inputList: true,
  inputMap: {
    input1: true,
    input2: false,
  }
});

const hasValues3 = registration.form3.currently.hasValue({
  username: 'asdf',
  password: 'asdf',
  country: 'Germany',
  email: 'a@b.com',
  acceptTerms: true,
  inputList: ['jodel', 'dodel'],
  inputMap: {
    input1: 'asdf',
    input2: 'jodel'
  },
  innerGroup: {
    acceptTerms: false,
    country: 'China',
    password: 'adsf',
    inputList: 'bla',
    inputMap: {
      input1: 'input1',
      input2: 'input2'
    }
  }
});

const values3 = registration.form3.currently.getValue();

const values3WithMask = registration.form3.currently.getValue({
  acceptTerms: true,
  country: false,
  email: false,
  password: true,
  username: true,
  inputList: true,
  inputMap: {
    input1: true,
    input2: true
  },
  innerGroup: {
    acceptTerms: true,
    country: false,
    password: true,
    inputList: false,
    inputMap: {
      input1: true,
      input2: false
    }
  }
});

expectGroup(registration.form3).toHaveValue({

});


import steps from '?/steps'
import { pages, stores, elements } from '?/page_objects'

suite("New Matchers", {}, () => {
  // testcase("check after click", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         // message element becomes visible 3 seconds after click

  //         // fails because not has any text after timeout
  //         // pages.demo.dynamicControls.removeButton.click()
  //         // pages.demo.dynamicControls.message.wait.hasAnyText()

  //         // fails because element could not be located
  //         // pages.demo.dynamicControls.message.wait.hasAnyText()

  //         // pages.demo.dynamicControls.message.wait.hasAnyClass()
  //         // pages.demo.dynamicControls.checkbox.wait.isChecked()

  //         expect(true).toBe(true)
  //       })
  //     }
  //   }))
  // })

  // testcase("isEmpty", {}, () => {
  //   given(steps["open homepage"]({
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         console.log(pages.google.divList.currently.isEmpty(), pages.google.divList.currently.not.isEmpty())
  //         console.log(pages.google.divList.eventually.isEmpty(), pages.google.divList.eventually.not.isEmpty())

  //         pages.google.divList.wait.not.isEmpty()
  //         pages.google.divList.wait.isEmpty()



  //         // console.log(pages.google.divList.currently.not.isVisible())

  //         expect(true).toBe(true)

  //         // expectList(pages.google.divList).toBeVisible() pending???
  //       })
  //     }
  //   }))
  // })

  // testcase("getLength and isEmpty", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.getLength())
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isEmpty(),
  //           pages.demo.dynamicControls.nonExistingButtonList.currently.not.isEmpty())

  //         // both return true because list is empty
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isVisible())
  //         console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.not.isVisible())

  //         // expect(true).toBe(true)

  //         // check with non existing elements
  //         // expectList(pages.demo.dynamicControls.nonExistingButtonList).toBeVisible()

  //         expectList(pages.demo.dynamicControls.buttonList).toBeVisible()
  //       })
  //     }
  //   }))
  // })

  testcase("toExist", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          // expectElement(pages.demo.dynamicControls.removeButton).not.toExist()
          // expectList(pages.demo.dynamicControls.buttonList).not.toExist()
          // expectMap(pages.demo.dynamicControls.buttonMap).not.toExist()
          // expectGroup(pages.demo.dynamicControls.buttonGroup).not.toExist()
          // expectGroup(pages.demo.dynamicControls.superGroup).not.toExist()

           // expectList(pages.demo.dynamicControls.buttonList).toExist()
          // expectList(pages.demo.dynamicControls.buttonList).toExist(true)
          // expectList(pages.demo.dynamicControls.buttonList).toExist(false)

          // expectList(pages.demo.dynamicControls.buttonList).not.toExist()
          // expectList(pages.demo.dynamicControls.buttonList).not.toExist(true)
          // expectList(pages.demo.dynamicControls.buttonList).not.toExist(false)

          // pages.demo.dynamicControls.buttonList.wait.exists()
          // pages.demo.dynamicControls.buttonList.wait.exists({filterMask: true})
          // pages.demo.dynamicControls.buttonList.wait.exists({filterMask: false})

          // pages.demo.dynamicControls.buttonList.wait.not.exists()
          // pages.demo.dynamicControls.buttonList.wait.not.exists({filterMask: true})
          // pages.demo.dynamicControls.buttonList.wait.not.exists({filterMask: false})

          // expectGroup(pages.demo.dynamicControls.buttonGroup).not.toExist({
          //   filterMask: {
          //     // enableButton: true,
          //     // removeButton: true,
          //     buttonList: false,
          //     // buttonMap: {
          //     //   enable: true,
          //     //   remove: true
          //     // }
          //   }
          // })

          expectGroup(pages.demo.dynamicControls.superGroup).not.toExist({
            checkbox: true
          })
        })
      }
    }))
  })

  testcase("toEventuallyExist", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          // expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyExist({timeout: 500})
          // expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({timeout: 500})

          // expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist()
          // expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist({filterMask: true})
          // expectList(pages.demo.dynamicControls.buttonList).toEventuallyExist({filterMask: false})

          // pages.demo.dynamicControls.buttonList.wait.exists()

          // expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist()
          // expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({filterMask: true})
          // expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyExist({filterMask: false})

          // expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyExist({timeout: 500})
          // expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyExist({timeout: 500, filterMask: {
          //   enable: true,
          //   remove: true
          // }})
          // expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyExist({timeout: 500})
          // expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyExist({timeout: 500})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyExist({timeout: 500, filterMask: {
            checkbox: true,
            buttons: {
              removeButton: true,
              buttonList: [true],
              buttonMap: {
                enable: true
              }
            }
          }})

          // expectElement(pages.demo.dynamicControls.nonExistingDiv).toEventuallyExist({timeout: 500})
        })
      }
    }))
  })

  testcase("toBeVisible", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          expectElement(pages.demo.dynamicControls.removeButton).not.toBeVisible()
          expectList(pages.demo.dynamicControls.buttonList).not.toBeVisible()
          expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toBeVisible()
          expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible()

          expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible({
            enable: true
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible({
            checkbox: true
          })
        })
      }
    }))
  })

  testcase("toHaveText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          expectList(pages.demo.dynamicControls.buttonList).toHaveText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toHaveText(['Remove', 'Enable'])

          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveText('Remove')
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove'
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveText(['asdf', 'asdf'])
          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveText(['Remove', 'Enable'])

          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveText('Remove')
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveText('Remove')
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveText({
            remove: 'Remove',
            enable: 'Enable'
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).toEventuallyHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveText({
            removeButton: 'Remove',
            enableButton: 'Enable',
            buttonList: ['Remove', 'Enable'],
            buttonMap: {
              remove: 'Remove',
              enable: 'Enable'
            }
          }, {timeout: 1111})
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove',
            }
          })
          expectGroup(pages.demo.dynamicControls.superGroup).toEventuallyHaveText({
            checkbox: '',
            buttons: {
              removeButton: 'Remove',
            }
          })
        })
      }
    }))
  })

  testcase("toHaveAnyText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).toHaveAnyText()
          expectElement(pages.demo.dynamicControls.removeButton).not.toHaveAnyText()

          expectList(pages.demo.dynamicControls.buttonList).toHaveAnyText()
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText()

          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText(true))
          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText(false))
          console.log(pages.demo.dynamicControls.buttonList.currently.not.hasAnyText([true, false]))

          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText(true)
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText(false)
          expectList(pages.demo.dynamicControls.buttonList).not.toHaveAnyText([true, false])

          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({
            remove: true,
            enable: false
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({
            remove: false,
            enable: false
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText({})
          expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveAnyText()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            enableButton: true,
            buttonList: [true, true],
            buttonMap: {
              remove: true,
              enable: true
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            enableButton: false,
            buttonList: true,
            buttonMap: {
              remove: true,
              enable: false
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText({
            removeButton: true,
            buttonList: false,
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText(null)
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveAnyText()
          expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveAnyText({
            checkbox: true,
            removeButton: true,
            buttons: {
              removeButton: true
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveAnyText", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.removeButton).toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.removeButton).not.toEventuallyHaveAnyText({
            timeout: 1111
          })

          expectList(pages.demo.dynamicControls.buttonList).toEventuallyHaveAnyText()
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText()

          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: true
          })
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: false
          })
          expectList(pages.demo.dynamicControls.buttonList).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: [true, false]
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              remove: true,
              enable: false
            }
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              remove: false,
              enable: false
            }
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectMap(pages.demo.dynamicControls.buttonMap).not.toEventuallyHaveAnyText()
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              enableButton: true,
              buttonList: [true, true],
              buttonMap: {
                remove: true,
                enable: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              enableButton: false,
              buttonList: true,
              buttonMap: {
                remove: true,
                enable: false
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              removeButton: true,
              buttonList: false,
            }
          })
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText(null)
          expectGroup(pages.demo.dynamicControls.buttonGroup).not.toEventuallyHaveAnyText({
            timeout: 1111
          })
          expectGroup(pages.demo.dynamicControls.superGroup).not.toEventuallyHaveAnyText({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              removeButton: true,
              buttons: {
                removeButton: true
              }
            }
          })
        })
      }
    }))
  })

  testcase("toHaveValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          // expectElement(pages.demo.dynamicControls.searchInput).toHaveValue('asdf')
          // expectList(pages.demo.dynamicControls.inputList).toHaveValue('asdf')
          // expectList(pages.demo.dynamicControls.inputList).toHaveValue(['on', ''])
          // expectMap(pages.demo.dynamicControls.inputMap).toHaveValue({
          //   checkbox: 'on',
          //   search: 'asdf'
          // })
          // expectMap(pages.demo.dynamicControls.inputMap).not.toHaveValue({
          //   checkbox: 'on',
          //   search: 'asdf'
          // })
          // expectGroup(pages.demo.dynamicControls.inputGroup).toHaveValue({
          //   checkbox: 'on',
          //   search: '',
          //   inputList: ['on', ''],
          //   inputMap: {
          //     checkbox: 'on',
          //     search: ''
          //   }
          // })
          // expectGroup(pages.demo.dynamicControls.inputGroup).not.toHaveValue({
          //   checkbox: 'on',
          //   search: '',
          //   inputList: ['on', ''],
          //   inputMap: {
          //     checkbox: 'on',
          //     search: ''
          //   }
          // })

          pages.demo.dynamicControls.inputList.wait.not.isEmpty()

          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          })

          // expectGroup(pages.demo.dynamicControls.inputGroup).toHaveValue({
          //   inputList: 'on'
          // })

          // expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveValue({
          //   search: '',
          //   innerGroup: {
          //     inputList: ['on', '']
          //   }
          // })
        })
      }
    }))
  })

  testcase("toEventuallyHaveValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyHaveValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveValue('asdf', {
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveValue(['on', ''])
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveValue({
            checkbox: 'on',
            search: 'asdf'
          }, {timeout: 1111})
          expectMap(pages.demo.dynamicControls.inputMap).not.toEventuallyHaveValue({
            checkbox: 'on',
            search: 'asdf'
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toEventuallyHaveValue({
            checkbox: 'on',
            search: '',
            inputList: ['on', ''],
            inputMap: {
              checkbox: 'on',
              search: ''
            }
          }, {timeout: 3000})
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveValue({
            search: 'bla',
            innerGroup: {
              checkbox: 'bla',
              search: 'bla',
              inputList: ['bla', 'bli'],
              inputMap: {
                checkbox: 'bla',
                search: 'bla'
              }
            }
          }, {timeout: 1111})
        })
      }
    }))
  })

  testcase("toHaveAnyValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toHaveAnyValue()
          expectElement(pages.demo.dynamicControls.searchInput).not.toHaveAnyValue()

          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue()
          expectList(pages.demo.dynamicControls.inputList).not.toHaveAnyValue()
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue(true)
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue(false)
          expectList(pages.demo.dynamicControls.inputList).toHaveAnyValue([true, false])

          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue({
            checkbox: true,
            search: true
          })
          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue({
            checkbox: false,
            search: false
          })
          expectMap(pages.demo.dynamicControls.inputMap).toHaveAnyValue()

          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveAnyValue({
            checkbox: true,
            search: true,
            inputList: [true, true],
            inputMap: {
              checkbox: true,
              search: true
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toHaveAnyValue({
            checkbox: true,
            search: true,
            inputList: [true, true],
            inputMap: {
              checkbox: true,
              search: true
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveAnyValue({
            search: true,
            innerGroup: {
              checkbox: true,
              search: true,
              inputList: true,
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveAnyValue({
            inputList: false
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toHaveAnyValue({
            search: true,
            innerGroup: {
              inputList: false
            }
          })
        })
      }
    }))
  })

  testcase("toEventuallyHaveAnyValue", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {
          expectElement(pages.demo.dynamicControls.searchInput).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.searchInput).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxInput).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectElement(pages.demo.dynamicControls.checkboxInput).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })

          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).not.toEventuallyHaveAnyValue({
            timeout: 1111
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: true
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: false
          })
          expectList(pages.demo.dynamicControls.inputList).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: [true, false]
          })

          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true
            }
          })
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: false,
              search: false
            }
          })
          expectMap(pages.demo.dynamicControls.inputMap).toEventuallyHaveAnyValue({
            timeout: 1111
          })

          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true,
              inputList: [true, true],
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).not.toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              checkbox: true,
              search: true,
              inputList: [true, true],
              inputMap: {
                checkbox: true,
                search: true
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              search: true,
              innerGroup: {
                checkbox: true,
                search: true,
                inputList: true,
                inputMap: {
                  checkbox: true,
                  search: true
                }
              }
            }
          })
          expectGroup(pages.demo.dynamicControls.inputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              inputList: false
            }
          })
          expectGroup(pages.demo.dynamicControls.outerInputGroup).toEventuallyHaveAnyValue({
            timeout: 1111,
            filterMask: {
              search: true,
              innerGroup: {
                inputList: false
              }
            }
          })
        })
      }
    }))
  })
})
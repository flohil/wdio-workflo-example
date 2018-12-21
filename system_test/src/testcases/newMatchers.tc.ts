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

  // testcase("toExist", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {
  //         expectElement(pages.demo.dynamicControls.removeButton).not.toExist()
  //         expectList(pages.demo.dynamicControls.buttonList).not.toExist()
  //         expectMap(pages.demo.dynamicControls.buttonMap).not.toExist()
  //         expectGroup(pages.demo.dynamicControls.buttonGroup).not.toExist()
  //         expectGroup(pages.demo.dynamicControls.superGroup).not.toExist()
  //       })
  //     }
  //   }))
  // })

  // testcase("toBeVisible", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         expectElement(pages.demo.dynamicControls.removeButton).not.toBeVisible()
  //         expectList(pages.demo.dynamicControls.buttonList).not.toBeVisible()
  //         expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible()
  //         expectGroup(pages.demo.dynamicControls.buttonGroup).not.toBeVisible()
  //         expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible()

  //         expectMap(pages.demo.dynamicControls.buttonMap).not.toBeVisible({filterMask: {
  //           enable: true
  //         }})
  //         expectGroup(pages.demo.dynamicControls.superGroup).not.toBeVisible({
  //           filterMask: {
  //             checkbox: true
  //           }
  //         })
  //       })
  //     }
  //   }))
  // })

  // testcase("toHaveText", {}, () => {
  //   given(steps["open demopage %{path}"]({
  //     arg: {path: 'dynamic_controls'},
  //     cb: () => {
  //       validate({"1.2": [1]}, () => {

  //         expectList(pages.demo.dynamicControls.buttonList).toHaveText(['asdf', 'asdf'])
  //         expectList(pages.demo.dynamicControls.buttonList).toHaveText(['Remove', 'Enable'])

  //         expectElement(pages.demo.dynamicControls.removeButton).not.toHaveText('Remove')
  //         expectList(pages.demo.dynamicControls.buttonList).not.toHaveText('Remove')
  //         expectMap(pages.demo.dynamicControls.buttonMap).not.toHaveText({
  //           remove: 'Remove',
  //           enable: 'Enable'
  //         })
  //         expectGroup(pages.demo.dynamicControls.buttonGroup).not.toHaveText({
  //           removeButton: 'Remove',
  //           enableButton: 'Enable',
  //           buttonList: ['Remove', 'Enable'],
  //           buttonMap: {
  //             remove: 'Remove',
  //             enable: 'Enable'
  //           }
  //         })
  //         expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveText({
  //           checkbox: '',
  //           buttons: {
  //             removeButton: 'Remove'
  //           }
  //         })
  //       })
  //     }
  //   }))
  // })

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
          expectGroup(pages.demo.dynamicControls.inputGroup).toHaveValue({
            checkbox: 'on'
            // search: '',
            // inputList: ['on', ''],
            // inputMap: {
            //   checkbox: 'on',
            //   search: ''
            // }
          })
          // expectGroup(pages.demo.dynamicControls.superGroup).not.toHaveText({
          //   checkbox: '',
          //   buttons: {
          //     removeButton: 'Remove'
          //   }
          // })
        })
      }
    }))
  })
})
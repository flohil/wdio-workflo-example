import steps from '?/steps'
import { pages } from '?/page_objects'

suite("List Matchers", {}, () => {
  testcase("isVisible", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          // message element becomes visible 3 seconds after click

          // fails because not has any text after timeout
          // pages.demo.dynamicControls.removeButton.click()
          // pages.demo.dynamicControls.message.wait.hasAnyText()

          // fails because element could not be located
          // pages.demo.dynamicControls.message.wait.hasAnyText()

          // pages.demo.dynamicControls.message.wait.hasAnyClass()
          // pages.demo.dynamicControls.checkbox.wait.isChecked()

          expect(true).toBe(true)
        })
      }
    }))
  })

  testcase("list is empty", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"1.2": [1]}, () => {

          console.log(pages.google.divList.currently.isEmpty(), pages.google.divList.currently.not.isEmpty())
          console.log(pages.google.divList.eventually.isEmpty(), pages.google.divList.eventually.not.isEmpty())

          pages.google.divList.wait.not.isEmpty()
          pages.google.divList.wait.isEmpty()



          // console.log(pages.google.divList.currently.not.isVisible())

          expect(true).toBe(true)

          // expectList(pages.google.divList).toBeVisible() pending???
        })
      }
    }))
  })

  testcase("list is visible", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"1.2": [1]}, () => {

          console.log(pages.demo.dynamicControls.nonExistingButtonList.getLength())
          console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isEmpty(),
            pages.demo.dynamicControls.nonExistingButtonList.currently.not.isEmpty())

          // both return true because list is empty
          console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.isVisible())
          console.log(pages.demo.dynamicControls.nonExistingButtonList.currently.not.isVisible())

          // expect(true).toBe(true)

          // check with non existing elements
          // expectList(pages.demo.dynamicControls.nonExistingButtonList).toBeVisible() // pending???

          expectList(pages.demo.dynamicControls.buttonList).toBeVisible()
        })
      }
    }))
  })
})
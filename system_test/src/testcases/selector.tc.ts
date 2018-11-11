import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

const textStr = "This example demonstrates when elements (e.g., checkbox, input field, etc.) are changed asynchronously."
const textContainsStr = "This example"
const textNotStr = "asdfasdfasdfasdfasdfasdfasdf"

suite("Selector", {}, () => {
  testcase("test constraint", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          const allDivsCount = pages.google.divList.getLength()
          const sDivsCount = pages.google.divListConstrained.getLength()

          console.log("allDivs selector", pages.google.divList.getSelector(), allDivsCount)
          console.log("sDivs selector", pages.google.divListConstrained.getSelector(), sDivsCount)

          expect(allDivsCount).toBeGreaterThan(sDivsCount)

          const allSDivs = pages.google.divList.where.classContains('s').getAll()
          const allSDivsList = pages.google.divList.where.classContains('s').getList()

          console.log("allSDivsList", allSDivsList.getSelector(), allSDivsList.getLength())

          expect(allSDivs.length).toBe(allSDivsList.getLength())

          const allSDivsConstraint = pages.google.divList.where.hasChild('//div', xpath => xpath.classContains('s')).getList()
          const allSDivsContraintLength = allSDivsConstraint.getLength()

          console.log("allSDivsConstraint selector", allSDivsConstraint.getSelector(), allSDivsContraintLength)

          expect(allSDivsContraintLength).toBe(sDivsCount)
        })
      }
    }))
  })
  testcase("test (not) checked", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'checkboxes'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const firstCheckbox = pages.demo.checkboxes.checkboxes.where.notChecked().getFirst()
          const secondCheckbox = pages.demo.checkboxes.checkboxes.where.checked().getFirst()

          // should die here
          // firstCheckbox.wait.isChecked()
          // secondCheckbox.wait.not.isChecked()

          firstCheckbox.wait.not.isChecked()
          secondCheckbox.wait.isChecked()

          expect(firstCheckbox.currently.isChecked()).toBe(false)
          expect(secondCheckbox.currently.isChecked()).toBe(true)

          expect(firstCheckbox.currently.not.isChecked()).toBe(true)
          expect(secondCheckbox.currently.not.isChecked()).toBe(false)

          expect(firstCheckbox.eventually.not.isChecked()).toBe(true)
          expect(secondCheckbox.eventually.isChecked()).toBe(true)

          expect(firstCheckbox.eventually.isChecked()).toBe(false)
          expect(secondCheckbox.eventually.not.isChecked()).toBe(false)
        })
      }
    }))
  })

  testcase("test (not) disabled", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const disabledInput = pages.demo.dynamicControls.inputs.where.disabled().getFirst()
          const enabledInput = pages.demo.dynamicControls.inputs.where.notDisabled().getFirst()

          expect(disabledInput.eventually.not.isEnabled()).toBe(true)

          pages.demo.dynamicControls.enableButton.click()

          expect(enabledInput.eventually.isEnabled()).toBe(true)
        })
      }
    }))
  })

  testcase("test (not) selected", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dropdown'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const selectedOption = pages.demo.dropdown.dropdown.optionsList.where.selected().getFirst()
          const unselectedOption = pages.demo.dropdown.dropdown.optionsList.where.notSelected().getFirst()

          unselectedOption.wait.isSelected()

          expect(selectedOption.eventually.isSelected()).toBe(true)
          expect(unselectedOption.eventually.not.isSelected()).toBe(true)
        })
      }
    }))
  })

  testcase("test not text", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const text = pages.demo.dynamicControls.paragraphList.where.text(textStr).getFirst()
          const notText = pages.demo.dynamicControls.paragraphList.where.notText(textNotStr).getFirst()
          const textContains = pages.demo.dynamicControls.paragraphList.where.textContains(textContainsStr).getFirst()
          const notTextContains = pages.demo.dynamicControls.paragraphList.where.notTextContains(textNotStr).getFirst()

          console.log(text.getSelector())
          console.log(notText.getSelector())
          console.log(textContains.getSelector())
          console.log(notTextContains.getSelector())

          expect(text.eventually.isVisible()).toBe(true)
          expect(notText.eventually.isVisible()).toBe(true)

          expect(textContains.eventually.isVisible()).toBe(true)
          expect(notTextContains.eventually.isVisible()).toBe(true)
        })
      }
    }))
  })

  testcase("test not attribute", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          const inputList = pages.demo.dynamicControls.inputs

          const nonExistingDiv = pages.demo.dynamicControls.nonExistingDiv

          console.log("exists", nonExistingDiv.currently.exists())
          console.log("isVisible", nonExistingDiv.currently.isVisible())
          console.log("isEnabled", nonExistingDiv.currently.isEnabled())
          console.log("isSelected", nonExistingDiv.currently.isSelected())

          console.log("getClass", nonExistingDiv.currently.getClass())

          const attribute = inputList.where.attribute('style', 'width: 30%;').getFirst()
          const notAttribute = inputList.where.notAttribute('style', 'asdfasdfasdf').getFirst()
          const containsAttribute = inputList.where.attributeContains('style', 'width: 3').getFirst()
          const notContainsAttribute = inputList.where.notAttributeContains('style', 'asdfasdfasdfasdf').getFirst()

          expect(attribute.eventually.isVisible()).toBe(true)
          expect(notAttribute.eventually.isVisible()).toBe(true)

          expect(containsAttribute.eventually.isVisible()).toBe(true)
          expect(notContainsAttribute.eventually.isVisible()).toBe(true)
        })
      }
    }))
  })
})
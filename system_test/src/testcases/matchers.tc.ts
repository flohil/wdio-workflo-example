import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Matchers", {}, () => {
  testcase("test existence", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          expectElement(pages.google.input).toExist()
          expectElement(pages.google.nonExistingDiv).not.toExist()
          expectElement(pages.google.input).toBeVisible()
          expectElement(pages.google.nonExistingDiv).not.toBeVisible()
          expectElement(pages.google.input).toHaveClass('gsfi lst-d-f')
          expectElement(pages.google.input).not.toHaveClass('aasdf')
        })
      }
    }))
  })
})
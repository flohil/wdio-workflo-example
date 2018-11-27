import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Group", {}, () => {
  testcase("get and set value", {testId: '6'}, () => {
    given(steps["open toolsqa page %{path}"]({
      cb: () => {
        pages.toolsQa.form.

        validate({"1.1": [1]}, () => {
          expect(1).toBe(1)
        })
      }
    }))
  })
})
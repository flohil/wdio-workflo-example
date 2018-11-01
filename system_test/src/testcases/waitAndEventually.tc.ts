import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Wait and Eventually", {}, () => {
  testcase("page element wait and eventually", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.google.input.wait.exists()

          expect(1).toBe(1)

          pages.google.nonExistingDiv.wait.not.exists()

          expect(2).toBe(2)

          expect(
            pages.google.input.eventually.exists()
          ).toBe(true)

          expect(
            pages.google.nonExistingDiv.eventually.not.exists()
          ).toBe(true)
        })
      }
    }))
  })

  testcase("page element list wait and eventually test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          // pages.google.divList.wait.none.exists() double error message line
          pages.google.divList.wait.any.exists()

          expect(1).toBe(1)

          pages.google.nonExistingDivList.wait.none.exists()

          expect(2).toBe(2)

          expect(
            pages.google.divList.eventually.any.exists()
          ).toBe(true)

          expect(
            pages.google.nonExistingDivList.eventually.none.exists()
          ).toBe(true)
        })
      }
    }))
  })

  testcase("wait untilElement and eventually meetsCondition test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.google.input.wait.untilElement(
            "has autocomplete off",
            (element) => element.getAttribute("autocomplete") === 'off'
          )

          expect(
            pages.google.input.eventually.meetsCondition(
              (element) => element.getAttribute("autocomplete") === 'off'
            )
          ).toBe(true)
        })
      }
    }))
  })
})
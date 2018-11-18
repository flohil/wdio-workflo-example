import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

let ctr = 0

suite("Bail2", {}, () => {
  testcase("test", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.2": [1]}, () => {
          // browser.pause(500)
          console.log("i am testing")
          // expect(1).toBe(3)

          // pages.google.nonExistingDiv.wait.hasAnyText()

          // pages.google.nonExistingDiv.getText()

          if (ctr === 0) {
            // ctr++
            // pages.google.nonExistingDiv.currently.getText()
            // expect(1).toBe(3)

            expectElement(pages.google.input).toHaveValue('jodel')

          } else if (ctr === 1) {
            ctr++

            expect(3).toBe(1)
            pages.google.nonExistingDiv.currently.getText()
          } else {
            expect(2).toBe(1)
            expect(3).toBe(1)
          }


          // expect(pages.google.nonExistingDiv.getText()).toEqual('jodel')
        })
      }
    }))
  })
})
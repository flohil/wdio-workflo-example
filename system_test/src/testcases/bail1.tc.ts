import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Bail1", {}, () => {
  testcase("test", {}, () => {
    validate({"1.2": [1]}, () => {
      // browser.element('//div[@id="asdf"]').click()
      expect(1).toBe(2)
    })
  })
  testcase("test2", {}, () => {
    validate({"1.2": [1]}, () => {
      // browser.element('//div[@id="asdf"]').click()
      expect(1).toBe(2)
    })
  })
  testcase("test3", {}, () => {
    validate({"1.2": [1]}, () => {
      // browser.element('//div[@id="asdf"]').click()
      expect(1).toBe(2)
    })
  })
})
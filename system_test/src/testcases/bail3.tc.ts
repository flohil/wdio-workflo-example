import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Bail3", {}, () => {
  testcase("test", {}, () => {
    validate({"1.2": [1]}, () => {
      expect(1).toBe(4)
    })
  })
})
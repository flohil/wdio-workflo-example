import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

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

          console.log("after 1")

          const allSDivsList = pages.google.divList.where.classContains('s').getList()

          console.log("after 2")


          console.log("allSDivsList", allSDivsList.getSelector(), allSDivsList.getLength())

          expect(allSDivs.length).toBe(allSDivsList.getLength())

          const allSDivsConstraint = pages.google.divList.where.child('//div', xpath => xpath.classContains('s')).getList()
          const allSDivsContraintLength = allSDivsConstraint.getLength()

          console.log("allSDivsConstraint selector", allSDivsConstraint.getSelector(), allSDivsContraintLength)

          expect(allSDivsContraintLength).toBe(sDivsCount)
        })
      }
    }))
  })
})
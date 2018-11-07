import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Matchers", {}, () => {
  testcase("test existence", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          // expectElement(pages.google.input).toExist()
          // expectElement(pages.google.nonExistingDiv).not.toExist()
          // expectElement(pages.google.input).toBeVisible()
          // expectElement(pages.google.nonExistingDiv).not.toBeVisible()
          // expectElement(pages.google.input).toHaveClass('gsfi lst-d-f')
          // expectElement(pages.google.input).not.toHaveClass('aasdf')

          // why does this take so long???

          // expectElement(pages.google.input).toEventuallyExist({timeout: 6000})
          // expectElement(pages.google.nonExistingDiv).not.toEventuallyExist({timeout: 6000})
          // expectElement(pages.google.input).toEventuallyBeVisible({timeout: 6000})
          // expectElement(pages.google.nonExistingDiv).not.toEventuallyBeVisible({timeout: 6000})
          // expectElement(pages.google.input).toEventuallyHaveClass('gsfi lst-d-f', {timeout: 6000})
          // expectElement(pages.google.input).not.toEventuallyHaveClass('aasdf', {timeout: 6000})

          // expectElement(pages.google.input).toEventuallyHaveClass('aasdf', {timeout: 2000})

          //expectElement(pages.google.input).toHaveLocation({x: 500, y: 300}, {tolerances: {x: 100, y: 50}})
          //expectElement(pages.google.input).toEventuallyHaveLocation({x: 500, y: 300}, {tolerances: {x: 100, y: 50}, timeout: 2000})

                    // {x: 404.5, y: 323}

          // expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          // expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          // expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).not.toEventuallyHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).not.toEventuallyHaveX(10)

          // expectElement(pages.google.input).not.toEventuallyHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).not.toEventuallyHaveY(10)

          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 1}})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).toEventuallyHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveX(10)

          // expectElement(pages.google.input).toEventuallyHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveY(10)

          // TODO: broken

          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 400, height: 300}, {tolerances: {width: 40, height: 30}, timeout: 2000})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 400, height: 300}, {tolerances: {width: 40}})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 400, height: 300})

          expectElement(pages.google.input).not.toEventuallyHaveWidth(400, {tolerance: 40})
          expectElement(pages.google.input).not.toEventuallyHaveWidth(400)

          expectElement(pages.google.input).not.toEventuallyHaveHeight(300, {tolerance: 30})
          expectElement(pages.google.input).not.toEventuallyHaveHeight(300)

          // expectElement(pages.google.input).toEventuallyHaveSize({width: 400, height: 300}, {tolerances: {width: 40, height: 30}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 400, height: 300}, {tolerances: {width: 40}})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 400, height: 300})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 400})

          // expectElement(pages.google.input).toEventuallyHaveWidth(400, {tolerance: 40})
          // expectElement(pages.google.input).toEventuallyHaveWidth(400)

          // expectElement(pages.google.input).toEventuallyHaveHeight(300, {tolerance: 30})
          // expectElement(pages.google.input).toEventuallyHaveHeight(300)

          // expectList(pages.google.nonExistingDivList).toBeEmpty()
          // expectList(pages.google.divList).toHaveLength(3, {comparator: Workflo.Comparator.greaterThan})
          // expectList(pages.google.nonExistingDivList).toEventuallyBeEmpty({interval: 600})
          // expectList(pages.google.divList).toEventuallyHaveLength(3, {timeout: 6000, interval: 600, comparator: Workflo.Comparator.gt})
        })
      }
    }))
  })
})
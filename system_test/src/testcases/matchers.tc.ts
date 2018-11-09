import steps from '?/steps'
import { pages, stores } from '?/page_objects'
import {pageObjects} from 'wdio-workflo'

suite("Matchers", {}, () => {

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

  testcase("existence", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          pages.google.input.wait.exists()

          expectElement(pages.google.input).toExist()
          expectElement(pages.google.input).toEventuallyExist()

          pages.google.nonExistingDiv.wait.not.exists()

          expectElement(pages.google.nonExistingDiv).not.toExist()
          expectElement(pages.google.nonExistingDiv).not.toEventuallyExist()

          expectElement(pages.google.nonExistingDiv).toExist()
          expectElement(pages.google.nonExistingDiv).toEventuallyExist()

          pages.google.nonExistingDiv.wait.exists()
        })
      }
    }))
  })

  testcase("visibility", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          pages.google.input.wait.isVisible()

          expectElement(pages.google.input).toBeVisible()
          expectElement(pages.google.input).toEventuallyBeVisible()

          pages.google.nonExistingDiv.wait.not.isVisible()

          expectElement(pages.google.nonExistingDiv).not.toBeVisible()
          expectElement(pages.google.nonExistingDiv).not.toEventuallyBeVisible()

          expectElement(pages.google.nonExistingDiv).toBeVisible()
          expectElement(pages.google.nonExistingDiv).toEventuallyBeVisible()

          pages.google.nonExistingDiv.wait.isVisible()
        })
      }
    }))
  })

  testcase("enabled", {}, () => {
    given(steps["open demopage %{path}"]({
      arg: {path: 'dynamic_controls'},
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.input.wait.not.isEnabled()

          expectElement(pages.demo.dynamicControls.input).not.toBeEnabled()
          expectElement(pages.demo.dynamicControls.input).not.toEventuallyBeEnabled()
        })
      }
    }))
    .when(steps["enable input in demopage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {
          pages.demo.dynamicControls.input.wait.isEnabled()

          expectElement(pages.demo.dynamicControls.input).toBeEnabled()
          expectElement(pages.demo.dynamicControls.input).toEventuallyBeEnabled()
        })
      }
    }))
  })

  testcase("location", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          expectElement(pages.google.input).not.toHaveLocation({x: 10, y: 10})

          expectElement(pages.google.input).not.toHaveX(10, {tolerance: 2})
          expectElement(pages.google.input).not.toHaveX(10)

          expectElement(pages.google.input).not.toHaveY(10, {tolerance: 2})
          expectElement(pages.google.input).not.toHaveY(10)

          expectElement(pages.google.input).toHaveLocation({x: 400, y: 325}, {tolerances: {x: 20, y: 20}})
          expectElement(pages.google.input).toHaveLocation({x: 404.5, y: 325}, {tolerances: {y: 20}})
          expectElement(pages.google.input).toHaveLocation({x: 404.5, y: 323})

          expectElement(pages.google.input).toHaveX(400, {tolerance: 20})
          expectElement(pages.google.input).toHaveX(404.5)

          expectElement(pages.google.input).toHaveY(325, {tolerance: 20})
          expectElement(pages.google.input).toHaveY(323)

          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          // expectElement(pages.google.input).toHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).toHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveX(10)

          // expectElement(pages.google.input).toHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveY(10)

          pages.google.input.wait.not.hasLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          pages.google.input.wait.not.hasLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          pages.google.input.wait.not.hasLocation({x: 10, y: 10})

          pages.google.input.wait.not.hasX(10, {tolerance: 2})
          pages.google.input.wait.not.hasX(10)

          pages.google.input.wait.not.hasY(10, {tolerance: 2})
          pages.google.input.wait.not.hasY(10)

          pages.google.input.wait.hasLocation({x: 400, y: 325}, {tolerances: {x: 20, y: 20}})
          pages.google.input.wait.hasLocation({x: 404.5, y: 325}, {tolerances: {y: 20}})
          pages.google.input.wait.hasLocation({x: 404.5, y: 323})

          pages.google.input.wait.hasX(400, {tolerance: 20})
          pages.google.input.wait.hasX(404.5)

          pages.google.input.wait.hasY(325, {tolerance: 20})
          pages.google.input.wait.hasY(323)

          // pages.google.input.wait.hasLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}})
          // pages.google.input.wait.hasLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          // pages.google.input.wait.hasLocation({x: 10, y: 10})

          // pages.google.input.wait.hasX(10, {tolerance: 2})
          // pages.google.input.wait.hasX(10)

          // pages.google.input.wait.hasY(10, {tolerance: 2})
          // pages.google.input.wait.hasY(10)

          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {y: 2}})
          expectElement(pages.google.input).not.toEventuallyHaveLocation({x: 10, y: 10})

          expectElement(pages.google.input).not.toEventuallyHaveX(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveX(10)

          expectElement(pages.google.input).not.toEventuallyHaveY(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveY(10)

          expectElement(pages.google.input).toEventuallyHaveLocation({x: 400, y: 325}, {tolerances: {x: 20, y: 20}})
          expectElement(pages.google.input).toEventuallyHaveLocation({x: 404.5, y: 325}, {tolerances: {y: 20}})
          expectElement(pages.google.input).toEventuallyHaveLocation({x: 404.5, y: 323})

          expectElement(pages.google.input).toEventuallyHaveX(400, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveX(404.5)

          expectElement(pages.google.input).toEventuallyHaveY(325, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveY(323)

          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 2, y: 2}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10}, {tolerances: {x: 1}})
          // expectElement(pages.google.input).toEventuallyHaveLocation({x: 10, y: 10})

          // expectElement(pages.google.input).toEventuallyHaveX(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveX(10)

          // expectElement(pages.google.input).toEventuallyHaveY(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveY(10)
        })
      }
    }))
  })

  testcase("size", {}, () => {
    given(steps["open homepage"]({
      cb: () => {
        validate({"2.1": [1]}, () => {

          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10}, {tolerances: {height: 2}})
          expectElement(pages.google.input).not.toHaveSize({width: 10, height: 10})

          expectElement(pages.google.input).not.toHaveWidth(10, {tolerance: 2})
          expectElement(pages.google.input).not.toHaveWidth(10)

          expectElement(pages.google.input).not.toHaveHeight(10, {tolerance: 2})
          expectElement(pages.google.input).not.toHaveHeight(10)

          expectElement(pages.google.input).toHaveSize({width: 400, height: 40}, {tolerances: {width: 20, height: 20}})
          expectElement(pages.google.input).toHaveSize({width: 403, height: 40}, {tolerances: {height: 20}})
          expectElement(pages.google.input).toHaveSize({width: 403, height: 34})

          expectElement(pages.google.input).toHaveWidth(400, {tolerance: 20})
          expectElement(pages.google.input).toHaveWidth(403)

          expectElement(pages.google.input).toHaveHeight(40, {tolerance: 20})
          expectElement(pages.google.input).toHaveHeight(34)

          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10}, {tolerances: {height: 2}})
          // expectElement(pages.google.input).toHaveSize({width: 10, height: 10})

          // expectElement(pages.google.input).toHaveWidth(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveWidth(10)

          // expectElement(pages.google.input).toHaveHeight(10, {tolerance: 2})
          // expectElement(pages.google.input).toHaveHeight(10)

          pages.google.input.wait.not.hasSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          pages.google.input.wait.not.hasSize({width: 10, height: 10}, {tolerances: {height: 2}})
          pages.google.input.wait.not.hasSize({width: 10, height: 10})

          pages.google.input.wait.not.hasWidth(10, {tolerance: 2})
          pages.google.input.wait.not.hasWidth(10)

          pages.google.input.wait.not.hasHeight(10, {tolerance: 2})
          pages.google.input.wait.not.hasHeight(10)

          pages.google.input.wait.hasSize({width: 400, height: 40}, {tolerances: {width: 20, height: 20}})
          pages.google.input.wait.hasSize({width: 403, height: 40}, {tolerances: {height: 20}})
          pages.google.input.wait.hasSize({width: 403, height: 34})

          pages.google.input.wait.hasWidth(400, {tolerance: 20})
          pages.google.input.wait.hasWidth(403)

          pages.google.input.wait.hasHeight(40, {tolerance: 20})
          pages.google.input.wait.hasHeight(34)

          // pages.google.input.wait.hasSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}})
          // pages.google.input.wait.hasSize({width: 10, height: 10}, {tolerances: {height: 2}})
          // pages.google.input.wait.hasSize({width: 10, height: 10})

          // pages.google.input.wait.hasWidth(10, {tolerance: 2})
          // pages.google.input.wait.hasWidth(10)

          // pages.google.input.wait.hasHeight(10, {tolerance: 2})
          // pages.google.input.wait.hasHeight(10)

          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {height: 2}})
          expectElement(pages.google.input).not.toEventuallyHaveSize({width: 10, height: 10})

          expectElement(pages.google.input).not.toEventuallyHaveWidth(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveWidth(10)

          expectElement(pages.google.input).not.toEventuallyHaveHeight(10, {tolerance: 2})
          expectElement(pages.google.input).not.toEventuallyHaveHeight(10)

          expectElement(pages.google.input).toEventuallyHaveSize({width: 400, height: 40}, {tolerances: {width: 20, height: 20}})
          expectElement(pages.google.input).toEventuallyHaveSize({width: 403, height: 40}, {tolerances: {height: 20}})
          expectElement(pages.google.input).toEventuallyHaveSize({width: 403, height: 34})

          expectElement(pages.google.input).toEventuallyHaveWidth(400, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveWidth(403)

          expectElement(pages.google.input).toEventuallyHaveHeight(40, {tolerance: 20})
          expectElement(pages.google.input).toEventuallyHaveHeight(34)

          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 2, height: 2}, timeout: 2000})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10}, {tolerances: {width: 1}})
          // expectElement(pages.google.input).toEventuallyHaveSize({width: 10, height: 10})

          // expectElement(pages.google.input).toEventuallyHaveWidth(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveWidth(10)

          // expectElement(pages.google.input).toEventuallyHaveHeight(10, {tolerance: 2})
          // expectElement(pages.google.input).toEventuallyHaveHeight(10)
        })
      }
    }))
  })
})
import steps from '?/steps'
import { pages } from '?/page_objects'

suite("Homepage Suite", {}, () => {
  testcase("visit homepage", {}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        verify({"1.1": [1]}, () => {
          expect(title).toEqual("Google")
          expect(true).toBe(false)
          expect(1).toBe(2)
        })
        verify({"1.2": [1]}, () => {
          expect(true).toBe(true)
          expect(3).toBe(2)
        })
      }
    }))
  })
})
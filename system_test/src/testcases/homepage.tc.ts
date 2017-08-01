import steps from '?/steps'
import { pages } from '?/page_objects'

suite("Homepage Suite", {}, () => {
  testcase("visit homepage", {}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        verify({"1.1": [1]}, () => {
          expect(title).toEqual("Google")
        })
        verify({"1.2": [1]}, () => {
          expect(3).toBe(2)
        })
      }
    }))
  })
})
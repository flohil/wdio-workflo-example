import steps from '?/steps'
import { pages, stores } from '?/page_objects'

suite("Homepage Suite 2", {}, () => {
  testcase("visit homepage 2", {}, () => {
    given(steps["open homepage"]())
    .when(steps["get title"]({
      cb: (title) => {
        verify({"1.2": [2]}, () => {
          expect(title).toEqual("Googasdfle")
        })
      }
    }))
  })
})
import steps from '?/steps'

suite("Chaining Suite", {}, () => {
  suite("sub suite", {}, () => {
    suite("sub sub suite", {}, () => {
      testcase("test subs", {}, () => {
        given(steps["open homepage"]())
        .when(steps["test chaining functionality"]({
          cb: () => {
            verify({'7.7': [1]}, () => {
              expect(true).toBe(true)
            })
          }
        }))
      })
    })
  })
  testcase("test chaining", {}, () => {
    given(steps["open homepage"]())
    .when(steps["test chaining functionality"]({
      cb: () => {
        verify({'7.7': [1]}, () => {
          expect(true).toBe(true)
        })
      }
    }))
  })
})
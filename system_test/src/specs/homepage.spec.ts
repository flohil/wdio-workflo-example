Feature("Homepage", {}, () => {
  Story("1.1", "Display correct title", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
})
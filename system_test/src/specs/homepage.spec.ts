Feature("Homepage", {}, () => {
  Story("1.1", "Display correct title", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
  Story("1.2", "Failing story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "This spec fails")
      })
    })
  })
  Story("4.4", "Another story", {}, () => {
    Given("a user opens the google homepage", () => {
      When("the user observes the page title", () => {
        Then(1, "the correct page title should be displayed")
      })
    })
  })
})
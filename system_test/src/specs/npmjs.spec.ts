Feature("Packages", {}, () => {
  Story("1.1", "Searching a package", {issues: ["NPMJS-1"]}, () => {
    Given("the user is located on the homepage", () => {
      When("the user enters the name of an existing npm package in the search field")
      .And("the user clicks on the 'Search' button", () => {
        Then(1, "at least one npm package is displayed in the list of search results")
        Then(2, "the npm package whose name exactly matches the searched term is displayed at the top")
      })
    })
  })
})
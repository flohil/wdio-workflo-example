Feature("Packages", {}, () => {
  Story("1.1", "Searching a package", { issues: ["NPMJS-1"] }, () => {
    Given("the user is located on the npmjs website", () => {
      When("the user enters the name of an existing npm package in the search field")
      .And("the user clicks on the 'Search' button", () => {
        Then(1, "at least one npm package is displayed in the list of search results");
        Then(2, "the package whose name exactly matches the searched term is displayed at the top");
      });
    });
  });

  Story("1.2", "Signing up", { issues: ["NPMJS-2"] }, () => {
    Given("the user is located on the npmjs website")
    .And("the user is not logged in", () => {
      When("the user opens the signup page")
      .And("the user fills in the signup form", () => {
        // only for demonstration purposes since we do not want to actually signup in our test
        Then(1, "the entered data is displayed in the signup form");
      });
    });
  });

  // this story will be skipped
  xStory("1.3", "Sending a support request", { issues: ["NPMJS-3"] }, () => {
    Given("the user is logged in on the npmjs website", () => {
      When("the user opens the support page")
      .And("the user fills in the contact form", () => {
        // only for demonstration purposes since we do not want to send an actual support request
        Then(1, "the entered data is displayed in the contact form");
      });
    });
  });
});

Feature("Feed", {}, () => {
  Story("1.1", "Filtering feed items", { issues: ["DEMO-1"] }, () => {
    Given("the user is located on the demo website's feed page", () => {
      When("the user enters a term into the filter mask", () => {
        Then(1, "only feed items whose title contains the entered term are displayed");
      });
    });
  });
});

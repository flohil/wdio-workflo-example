Feature("Footer", {}, () => {
  Story("1.1", "Opening framework website", { issues: ["DEMO-1"] }, () => {
    Given("the user is located on the demo website", () => {
      When("the user clicks on the framework link in the footer", () => {
        Then(1, "the framework website is opened");
      });
    });
  });
});

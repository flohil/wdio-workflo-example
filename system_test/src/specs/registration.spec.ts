Feature("Registration", {}, () => {
  Story("3.1", "Submitting the registration form", { issues: ["DEMO-3"] }, () => {
    Given("the user is located on the demo website's registration page", () => {
      When("the user fills in all fields of the registration form")
      .And("the user clicks on the 'Submit' button", () => {
        Then(1, "a success message is displayed thanking the user for her registration");
      });

      When("the user fills in only some of the fields of the registration form")
      .And("the user clicks on the 'Submit' button", () => {
        Then(2, "an error message is displayed stating that all fields need to be filled in");
      });
    });
  });
});

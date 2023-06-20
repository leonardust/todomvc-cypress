import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see the following todos:", (dataTable) => {
  dataTable.rawTable.slice(1).forEach((todo) => {
    const [title, completed] = todo;
    const li = completed === "true" ? "li.completed" : "li:not(.completed)";
    cy.get(`.todo-list ${li} .view label`).should("contain", title);
  });
  // cy.get(".todo-list").screenshot();
});

Then("I see that I have {string}", (itemsLeft) => {
  cy.get(".footer .todo-count").should("contain", itemsLeft);
  // cy.get(".todo-count").screenshot();
});

Then("I see that I have no existing todos", () => {
  cy.get(".todoapp section.main").should("not.exist");
  cy.get(".todoapp footer.footer").should("not.exist");
  // cy.screenshot("home-page");
});

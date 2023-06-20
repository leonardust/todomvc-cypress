import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I have no todos", () => {
  cy.visit("/");
  window.localStorage.setItem("react-todos", "[]");
});

Given("I navigate to the home page", () => {
  cy.visit("/");
  cy.get(".todoapp").should("be.visible");
  // cy.screenshot("home-page");
});

Given("I have the following todos:", (dataTable) => {
  let todos = [];
  dataTable.rawTable.slice(1).forEach((todo, index) => {
    const [title, completed] = todo;
    todos.push({
      id: `test-todo-${index}`,
      title,
      completed: completed === "true",
    });
  });
  cy.visit("/");
  window.localStorage.setItem("react-todos", JSON.stringify(todos));
});

When("I filter by {string}", (filterType) => {
  const text = filterType.charAt(0).toUpperCase() + filterType.slice(1);
  cy.get(".todoapp .footer .filters li a").contains(text).click();
});

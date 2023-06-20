import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I submit {string} for my new todo title", (title) => {
  cy.get(".new-todo").type(`${title}{ENTER}`);
});

When("I clear all completed todos", () => {
  cy.get(".clear-completed").click();
});

When("I choose to edit {string}", (title) => {
  cy.get(".todo-list li .view label").contains(title).dblclick();
});

When("I submit {string} for my edit todo title", (title) => {
  cy.get("li.editing input.edit").type(`{selectall}{backspace}${title}{ENTER}`);
});

When("I remove {string}", (title) => {
  cy.get(".todo-list li .view label")
    .contains(title)
    .parent()
    .find(".destroy")
    .click({ force: true });
});

When("I complete {string}", (title) => {
  cy.get(".todo-list li label")
    .contains(title)
    .parent()
    .find(".toggle")
    .check();
});

When("I un-complete {string}", (title) => {
  cy.get(".todo-list li label")
    .contains(title)
    .parent()
    .find(".toggle")
    .uncheck();
});

When("I toggle all todos", () => {
  cy.get(".toggle-all").click();
});

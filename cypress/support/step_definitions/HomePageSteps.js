import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(`I navigate to the todo home page`, () => {
  cy.visit("http://localhost:4200");
});

When(`I add new todo item`, () => {
  cy.get(".new-todo").type("Dupa{enter}");
});

When(`I mark todo item as complete`, () => {
  cy.get(".todo-list li .toggle").click();
});

Then(`I should see new todo item`, () => {
  cy.get(".todo-list li .toggle + label").contains("Dupa");
});

Then(`I should todo item marked as complete`, () => {
  cy.get(".todo-list li .toggle:checked + label").contains("pupa");
});

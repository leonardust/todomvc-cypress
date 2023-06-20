import { Then } from "@badeball/cypress-cucumber-preprocessor";

Then("I see the home page", () => {
  cy.get(".header").should("be.visible");
  cy.get(".info").should("be.visible");
  cy.screenshot("home-page");
});

import { After } from "@badeball/cypress-cucumber-preprocessor";

After(() => {
  cy.writeFile("browserDetails.json", Cypress.browser);
});

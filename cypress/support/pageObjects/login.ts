export function login(): void {
  cy.visit('https://lovevery.com');
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
  cy.get('.menu-sign-in').focus().click();

  cy.get('#email').type(Cypress.env('username'));
  cy.get('#password').type(Cypress.env('password'));
  cy.get('#form-submit-button')
    .click()
    .then(() => {
      cy.url().should('contain', '/subscriptions/');
    });
}

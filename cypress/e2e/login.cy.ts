describe('Login Test', () => {
  it('Visits Lovevery and successfully logs in', () => {
    cy.visit('https://lovevery.com');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('.menu-sign-in').focus().click();

    cy.get('#email').type('devtest+automation@lovevery.com');
    cy.get('#password').type('test@1234');
    cy.get('#form-submit-button').click();
    cy.url().should('contain', '/subscriptions/');
  });
});

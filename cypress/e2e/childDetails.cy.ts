describe('Edit Child Info Tests', () => {
    beforeEach(() => {
        cy.visit("https://lovevery.com");
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.get('.menu-sign-in').focus().click();

        cy.get('#email').type('devtest+automation@lovevery.com');
        cy.get('#password').type('test@1234');
        cy.get('#form-submit-button').click();
        cy.url().should('contain', '/subscriptions/')
    })
    it('Changes Child Name', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#child-0-edit').click();
        cy.get('#lovfield-name').clear();
        cy.get('#lovfield-name').type('Max Tracey Jr');
        cy.get('#child-details-submit').click();
        cy.get('#nav-back').click();
        cy.get('.css-1a2u417 > .css-14cfphp > .css-11jj6cr').contains('Max Tracey Jr').should('be.visible')
    })

    it('Cancels the child name change', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#child-0-edit').click();
        cy.get('#lovfield-name').clear();
        cy.get('#lovfield-name').type('James Bach Jr');
        cy.get('#child-details-cancel').click();
        cy.get('.css-1a2u417 > .css-14cfphp > .css-11jj6cr').contains('Max Tracey Jr').should('be.visible')
    })

    it('Revert Child Name', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#child-0-edit').click();
        cy.get('#lovfield-name').clear();
        cy.get('#lovfield-name').type('James Bach Jr');
        cy.get('#child-details-submit').click();
        cy.get('#nav-back').click();
        cy.get('.css-1a2u417 > .css-14cfphp > .css-11jj6cr').contains('James Bach Jr').should('be.visible')
    })
})
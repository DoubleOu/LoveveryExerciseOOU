import { appendFile } from "fs";

describe('Edit User\'s Profile Info Tests', () => {
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
    it('Changes Users First Name', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#edit-contact-details').click();
        cy.get('#lovfield-first_name').clear();
        cy.get('#lovfield-first_name').type("Max");
        cy.get('#user-details-submit').click();
        cy.get('#nav-back').click();
        cy.get('.css-4h4xb1').contains('Max Bach').should('be.visible')
        cy.get('.my-account-popover-name').contains('Max').should('be.visible')
    })

    it('Cancel a First Name change', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#edit-contact-details').click();
        cy.get('#lovfield-first_name').clear();
        cy.get('#lovfield-first_name').type("James");
        cy.get('#user-details-cancel').click();
        cy.get('.css-4h4xb1').contains('Max Bach').should('be.visible')
    })


    it('Changes Users Last Name', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#edit-contact-details').click();
        cy.get('#lovfield-last_name').clear();
        cy.get('#lovfield-last_name').type("Tracey");
        cy.get('#user-details-submit').click();
        cy.get('#nav-back').click();
        cy.get('.css-4h4xb1').contains('Max Tracey').should('be.visible')
    })

    it('Cancel a Last Name change', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#edit-contact-details').click();
        cy.get('#lovfield-last_name').clear();
        cy.get('#lovfield-last_name').type("Bach");
        cy.get('#user-details-cancel').click();
        cy.get('.css-4h4xb1').contains('Max Tracey').should('be.visible')
    })

    it('Reverts both the first and last Names, changing both at once', () => {
        cy.get('a').contains('Profile Info').click();
        cy.get('.active').contains('Profile Info').should('be.visible');
        cy.get('#edit-contact-details').click();
        cy.get('#lovfield-first_name').clear();
        cy.get('#lovfield-first_name').type("James");
        cy.get('#lovfield-last_name').clear();
        cy.get('#lovfield-last_name').type("Bach");
        cy.get('#user-details-submit').click();
        cy.get('#nav-back').click();
        cy.get('.css-4h4xb1').contains('James Bach').should('be.visible')
        cy.get('.my-account-popover-name').contains('James').should('be.visible')
    })
})
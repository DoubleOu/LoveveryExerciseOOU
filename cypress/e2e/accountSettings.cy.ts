describe('Edit Child Info Tests', () => {
    beforeEach(() => {
        cy.fixture("mockUser.json").then((mockData) => {
            this.mockData = mockData
        });
        cy.fixture("defaultUser.json").then((defaultData) => {
            this.defaultData = defaultData
        });
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

    it('Edits the Address', () => {
        
        cy.get('.css-ca7cv9').contains('Account Settings').click();
        cy.get('.active').contains('Account Settings').should('be.visible');
        cy.get('#edit-address-0').click();

        cy.get('#first_name').clear();
        cy.get('#first_name').type(this.mockData.FirstName);

        cy.get('#last_name').clear();
        cy.get('#last_name').type(this.mockData.LastName);

        cy.get('#company').clear();
        
        cy.get('#line1').clear();
        cy.get('#line1').type(this.mockData.StreetAddress);

        cy.get('#line2').clear();
        
        cy.get('#city').clear();
        cy.get('#city').type(this.mockData.City);

        cy.get('#country').select(this.mockData.Country)
        cy.get('#state').select(this.mockData.State);

        cy.get('#zip_code').clear();
        cy.get('#zip_code').type(this.mockData.ZipCode);

        cy.get('#phone_number').clear();
        
        cy.get('#lovevery-address-form-submit').click();
        cy.get('#nav-back').click();

        cy.get('.css-crn95c').contains('Max').should('be.visible');
    })

    it('Cancels a change of address', () => {
        
        cy.get('.css-ca7cv9').contains('Account Settings').click();
        cy.get('.active').contains('Account Settings').should('be.visible');
        cy.get('#edit-address-0').click();

        cy.get('#first_name').clear();
        cy.get('#first_name').type(this.defaultData.FirstName);

        cy.get('#last_name').clear();
        cy.get('#last_name').type(this.defaultData.LastName);

        cy.get('#company').clear();
        cy.get('#company').type(this.defaultData.Company);
        
        cy.get('#line1').clear();
        cy.get('#line1').type(this.defaultData.StreetAddress);

        cy.get('#line2').clear();
        cy.get('#line2').type(this.defaultData.Apt);
        
        cy.get('#city').clear();
        cy.get('#city').type(this.defaultData.City);

        cy.get('#country').select(this.defaultData.Country)
        cy.get('#state').select(this.defaultData.State);

        cy.get('#zip_code').clear();
        cy.get('#zip_code').type(this.defaultData.ZipCode);

        cy.get('#phone_number').clear();
        cy.get('#phone_number').type(this.defaultData.PhoneNumber);
        
        cy.get('#lovevery-address-form-cancel').click();

        cy.get('.css-crn95c').contains('Max').should('be.visible');
    })

    it('Revert all data', () => {
        cy.get('.css-ca7cv9').contains('Account Settings').click();
        cy.get('.active').contains('Account Settings').should('be.visible');
        cy.get('#edit-address-0').click();

        cy.get('#first_name').clear();
        cy.get('#first_name').type(this.defaultData.FirstName);

        cy.get('#last_name').clear();
        cy.get('#last_name').type(this.defaultData.LastName);

        cy.get('#company').clear();
        cy.get('#company').type(this.defaultData.Company);
        
        cy.get('#line1').clear();
        cy.get('#line1').type(this.defaultData.StreetAddress);

        cy.get('#line2').clear();
        cy.get('#line2').type(this.defaultData.Apt);
        
        cy.get('#city').clear();
        cy.get('#city').type(this.defaultData.City);

        cy.get('#country').select(this.defaultData.Country)
        cy.get('#state').select(this.defaultData.State);

        cy.get('#zip_code').clear();
        cy.get('#zip_code').type(this.defaultData.ZipCode);

        cy.get('#phone_number').clear();
        cy.get('#phone_number').type(this.defaultData.PhoneNumber);
        
        cy.get('#lovevery-address-form-submit').click();
        cy.get('#nav-back').click();

        cy.get('.css-crn95c').contains('James').should('be.visible');
    })
})
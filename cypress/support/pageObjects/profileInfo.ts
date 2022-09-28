export function visit(): void {
  cy.get('a').contains('Profile Info').click();
  cy.get('.active').contains('Profile Info').should('be.visible');
}

export function editContactDetails(): void {
  cy.get('#edit-contact-details').click();
}

export function editFirstName(fn: string): void {
  cy.get('#lovfield-first_name').clear();
  cy.get('#lovfield-first_name').type(fn);
}

export function editLastName(ln: string): void {
  cy.get('#lovfield-last_name').clear();
  cy.get('#lovfield-last_name').type(ln);
}

export function submitUserDetails(): void {
  cy.get('#user-details-submit').click();
  cy.get('#nav-back').click();
}

export function cancelUserDetailsChanges(): void {
  cy.get('#user-details-cancel').click();
}

export function verifyUserDetailsChanges(Name: string): void {
  cy.get('.css-4h4xb1').contains(Name).should('be.visible');
}

// Child Detail Functions
export function editChildDetails(): void {
  cy.get('#child-0-edit').click();
}

export function editChildName(childName: string): void {
  cy.get('#lovfield-name').clear();
  cy.get('#lovfield-name').type(childName);
}

export function submitChildName(): void {
  cy.get('#child-details-submit').click();
  cy.get('#nav-back').click();
}

export function cancelChildNameChanges(): void {
  cy.get('#child-details-cancel').click();
}

export function verifyChildNameChanges(childName: string): void {
  cy.get('.css-1a2u417 > .css-14cfphp > .css-11jj6cr')
    .contains(childName)
    .should('be.visible');
}

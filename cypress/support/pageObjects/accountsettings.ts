export const pageElements = {
  firstName: '#first_name',
  lastName: '#last_name',
  company: '#company',
  address1: '#line1',
  address2: '#line2',
  city: '#city',
  country: '#country',
  state: '#state',
  zipCode: '#zip_code',
  phoneNumber: '#phone_number'
};

export function visitAccountSettings(): void {
  cy.get('.css-ca7cv9').contains('Account Settings').click();
  cy.get('.active').contains('Account Settings').should('be.visible');
}

export function clickEditButton(): void {
  cy.get('#edit-address-0').click();
}

export function clearfields(): void {
  cy.get(pageElements.firstName).clear();
  cy.get(pageElements.lastName).clear();
  cy.get(pageElements.company).clear();
  cy.get(pageElements.address1).clear();
  cy.get(pageElements.address2).clear();
  cy.get(pageElements.city).clear();
  cy.get(pageElements.zipCode).clear();
  cy.get(pageElements.phoneNumber).clear();
}

export function selectField(field: string, value: string): void {
  cy.get(field).select(value);
}

export function addTextValue(field: string, value: string): void {
  cy.get(field).type(value);
}

export function addMockData(
  firstName: string,
  lastname: string,
  address1: string,
  city: string,
  country: string,
  state: string,
  zipCode: string
): void {
  clearfields();
  addTextValue(pageElements.firstName, firstName);
  addTextValue(pageElements.lastName, lastname);
  addTextValue(pageElements.address1, address1);
  addTextValue(pageElements.city, city);
  selectField(pageElements.country, country);
  selectField(pageElements.state, state);
  addTextValue(pageElements.zipCode, zipCode);
}

export function addDefaultData(
  firstName: string,
  lastname: string,
  company: string,
  address1: string,
  address2: string,
  city: string,
  country: string,
  state: string,
  zipCode: string,
  phoneNumber: string
): void {
  clearfields();
  addTextValue(pageElements.firstName, firstName);
  addTextValue(pageElements.lastName, lastname);
  addTextValue(pageElements.company, company);
  addTextValue(pageElements.address1, address1);
  addTextValue(pageElements.address2, address2);
  addTextValue(pageElements.city, city);
  selectField(pageElements.country, country);
  selectField(pageElements.state, state);
  addTextValue(pageElements.zipCode, zipCode);
  addTextValue(pageElements.phoneNumber, phoneNumber);
}

export function submitAddressChanges(): void {
  cy.get('#lovevery-address-form-submit').click();
  cy.get('#nav-back').click();
}

export function cancelAddressChanges(): void {
  cy.get('#lovevery-address-form-cancel').click();
}

export function verifyAddressChanges(firstname: string): void {
  cy.get('.css-crn95c').contains(firstname).should('be.visible');
}

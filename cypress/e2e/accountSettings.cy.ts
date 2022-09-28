import * as accountSettings from 'cypress/support/pageObjects/accountSettings';
import { login } from 'cypress/support/pageObjects/login';

describe('Edit Child Info Tests', () => {
  beforeEach(() => {
    cy.fixture('mockUser.json').then((mockData) => {
      this.mockData = mockData;
    });
    cy.fixture('defaultUser.json').then((defaultData) => {
      this.defaultData = defaultData;
    });
    login();
  });

  it('Edits the Address', () => {
    accountSettings.visitAccountSettings();
    accountSettings.clickEditButton();

    accountSettings.addMockData(
      this.mockData.FirstName,
      this.mockData.LastName,
      this.mockData.StreetAddress,
      this.mockData.City,
      this.mockData.Country,
      this.mockData.State,
      this.mockData.ZipCode
    );

    accountSettings.submitAddressChanges();

    accountSettings.verifyAddressChanges('Max');
  });

  it('Cancels a change of address', () => {
    accountSettings.visitAccountSettings();
    accountSettings.clickEditButton();

    accountSettings.addDefaultData(
      this.defaultData.FirstName,
      this.defaultData.LastName,
      this.defaultData.Company,
      this.defaultData.StreetAddress,
      this.defaultData.Apt,
      this.defaultData.City,
      this.defaultData.Country,
      this.defaultData.State,
      this.defaultData.ZipCode,
      this.defaultData.PhoneNumber
    );

    accountSettings.cancelAddressChanges();

    accountSettings.verifyAddressChanges('Max');
  });

  it('Revert all data', () => {
    accountSettings.visitAccountSettings();
    accountSettings.clickEditButton();

    accountSettings.addDefaultData(
      this.defaultData.FirstName,
      this.defaultData.LastName,
      this.defaultData.Company,
      this.defaultData.StreetAddress,
      this.defaultData.Apt,
      this.defaultData.City,
      this.defaultData.Country,
      this.defaultData.State,
      this.defaultData.ZipCode,
      this.defaultData.PhoneNumber
    );

    accountSettings.submitAddressChanges();

    accountSettings.verifyAddressChanges('James');
  });
});

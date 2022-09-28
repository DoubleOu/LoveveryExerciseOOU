import { login } from 'cypress/support/pageObjects/login';
import * as profileInfo from 'cypress/support/pageObjects/profileInfo';

describe("Edit User's Profile Info Tests", () => {
  beforeEach(() => {
    login();
  });
  it('Changes Users First Name', () => {
    profileInfo.visit();
    profileInfo.editContactDetails();
    profileInfo.editFirstName('Max');
    profileInfo.submitUserDetails();
    profileInfo.verifyUserDetailsChanges('Max');
  });

  it('Cancel a First Name change', () => {
    profileInfo.visit();
    profileInfo.editContactDetails();
    profileInfo.editFirstName('James');
    profileInfo.cancelUserDetailsChanges();
    profileInfo.verifyUserDetailsChanges('Max');
  });

  it('Changes Users Last Name', () => {
    profileInfo.visit();
    profileInfo.editContactDetails();
    profileInfo.editLastName('Tracey');
    profileInfo.submitUserDetails();
    profileInfo.verifyUserDetailsChanges('Tracey');
  });

  it('Cancel a Last Name change', () => {
    profileInfo.visit();
    profileInfo.editContactDetails();
    profileInfo.editLastName('Bach');
    profileInfo.cancelUserDetailsChanges();
    profileInfo.verifyUserDetailsChanges('Tracey');
  });

  it('Reverts both the first and last Names, changing both at once', () => {
    profileInfo.visit();
    profileInfo.editContactDetails();
    profileInfo.editFirstName('James');
    profileInfo.editLastName('Bach');
    profileInfo.submitUserDetails();
    profileInfo.verifyUserDetailsChanges('James');
  });
});

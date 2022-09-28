import { login } from 'cypress/support/pageObjects/login';
import * as childInfo from 'cypress/support/pageObjects/profileInfo';

describe('Edit Child Info Tests', () => {
  beforeEach(() => {
    login();
  });
  it('Changes Child Name', () => {
    childInfo.visit();
    childInfo.editChildDetails();
    childInfo.editChildName('Max Tracey Jr');
    childInfo.submitChildName();
    childInfo.verifyChildNameChanges('Max Tracey Jr');
  });

  it('Cancels the child name change', () => {
    childInfo.visit();
    childInfo.editChildDetails();
    childInfo.editChildName('James Bach Jr');
    childInfo.cancelChildNameChanges();
    childInfo.verifyChildNameChanges('Max Tracey Jr');
  });

  it('Revert Child Name', () => {
    childInfo.visit();
    childInfo.editChildDetails();
    childInfo.editChildName('James Bach Jr');
    childInfo.submitChildName();
    childInfo.verifyChildNameChanges('Max Tracey Jr');
  });
});

# Lovevery Exercise

## What I was able to do
For this exercise, I was able to create working tests for login, editing the user's name, editing the child's name, and editing the account address.  All four test files also tested the cancel button and tested if the changed data was retained in a new session. Finally, I performed a pseudo after() test to revert the information back.

I also wanted to show an example of fixture use, but I could have also entered the data in either the page object or the test file as consts.  This would make both files look a bit cluttered though.

Use 
'''
npm run open
'''
To get started with cypress.  I do have a headless run avaialble via npm run headless

Oh, and the username and password I put in a cypress.env.json.  All you need to do to set up the file is:

'''
{
    "username": "devtest+automation@lovevery.com",
    "password": "test@1234"
}
'''

### Why I choose to create the test as shown
So I chose to make this page object style because this is essentially e2e prod tests.  If I was working in the dev repo, there would be a number of changes made:
- API usage and App Actions to ensure test stability (login without the UI, minimizing and disabling iframes and the chat, injecting data-attributes)
- More tests related to smaller resolutions (mock mobile tests as I like to call them)

## Difficulties
- Getting the test to pass due to the unexpected error (see below) was a doozy.  I try not to ignore errors in tests, but without doing so, all the tests fail.
- The iframes (chat, the activities modal).  I was tempted to use cypress-iframe to make sure they stop obscuring buttons, but for time contrainst reasons I chose to use focus() instead.  This costs the stability of the tests, especially when running headless. 
- Lack of element selection clarity. I used a mix of IDs and Classes to select elements, with mixed results.  Mostly because the "css-*" names reminded me of dynamic elements, which make for very brittle tests without data-attributes or other ways to tag them.
- Due to the unique ID in the links, I chose to avoid using visit in my page object files (besides login)

## Defects

### Out of Memory during tests
During the tests, the browser would stop due to running out of memory, forcing me to reset cypress.  

Replication Steps:
- Open Cypress UI
- Enter the E2E test suite
- Run contactDetails.cy.ts multiple times

Expected result: The tests run as expected each time.
Actual result: Eventually, the browser runs out of memory, closing out that instance of cypress.

### Locksmith and the unexpected error
On the homepage during login.cy.ts, I would run into a "locksmith is not defined" unexpected error that would automatically fail my tests.  There is a cypress workaround, and I'm not sure what it affects. 

Replication Steps:
- Open www.lovevery.com with the console open

### The account name on the My Account popover updates inconsistently
When I performed the contactDetails.cy.ts tests, I had to remove the verification of the My Account popover because when I would revert the name back to "James Bach", the name would still say Max.

Replication Steps:
- Login to Lovevery.com using the devtest+automation@lovevery.com account.
- Enter the profile info page
- Click on edit button next to Contact Details
- Change the first name
- Save
- Go back to Profile Info
- Click on edit button next to Contact Details
- Change the first name
- Save
- Go back to Profile Info

Expected result: The name on the Nav Bar should be the same as the current name in the contact details.
Actual result: The nav bar name does not match


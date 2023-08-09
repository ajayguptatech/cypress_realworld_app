**Cypress-Automation**
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.

**How To Install Cypress**
Link : https://tinyurl.com/How-to-Install-Cypress

Version Installed : 12.17.0

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Real World Application Test cases
Below are few test scenarios identified for the Real world application 

link : https://react-redux.realworld.io. 

[RealWorld_TC.xlsx](https://github.com/ajayguptatech/cypress_realworld_app/files/12193270/RealWorld_TC.xlsx)

CYPRESS Commands

npx cypress run --> runs headless (without invoking the browser)

npx cypress open --> Opens GUI of Cypress to run on selected browser 

Default browser --> Electron 

Test Case execution

Scenario 1 : Launch the browser

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('My First Cypress Test', function() {
    it('Opens the Real Worrl application', function() {
    //Visit the Demo QA Website
    cy.visit(" https://react-redux.realworld.io");
})
})

 ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        1                                                                                │
  │ Passing:      1                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     5 seconds                                                                        │
  │ Spec Ran:     Test1.js 






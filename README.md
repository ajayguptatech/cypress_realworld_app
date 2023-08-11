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

// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Search for Google Wiki page from Wikipedia website', () => {
    it('Validate Page Title', () => {
        cy.visit('https://react-redux.realworld.io/#/?_k=a3ydux')
        cy.get(':nth-child(2) > .nav-link').click();
    })
    it('login', () => {
        cy.visit('https://react-redux.realworld.io/#/login?_k=ivucf4')
        cy.get(':nth-child(1) > .form-control').type('ajaygupta.tech@gmail.com');
        cy.get(':nth-child(2) > .form-control').type('Solapur@123');
        cy.get('.btn').click();

        cy.get('.container > .nav > :nth-child(2) > .nav-link').click();
    })
    it('Publish the new Article', ()=>{
        cy.visit('https://react-redux.realworld.io/#/editor?_k=zeu258')
        cy.get(':nth-child(1) > .form-control').type('Cypress')
        cy.get(':nth-child(2) > .form-control').type('about cypress')
        cy.get(':nth-child(3) > .form-control').type('Cypress is a web and api automation tool')
        cy.get(':nth-child(4) > .form-control').type('Cypress is a web')
    //    cy.get('.btn').dblclick()
        cy.wait(1000)
        cy.get('.btn').dblclick()
        })
})


Problem : Not able to publish the article , trying find out issue related to session and fix it.
     Execution Results
     
     Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  Test1.js                                 00:21        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:21        3        3        -        -        -






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


describe('Login to Real World Application', () => {
    before(function(){
     // cy.visit('https://react-redux.realworld.io')
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('Validate Page Title', function() {
      //cy.visit('https://react-redux.realworld.io/#/?_k=a3ydux')
        cy.visit('https://react-redux.realworld.io')
        cy.url().should('include','realworld') 
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(this.data.username);
        cy.get(':nth-child(2) > .form-control').type(this.data.password);
        cy.get('.btn').click();


        //Clicks on new post and publish the article
        cy.contains('New Post').trigger('mouseover')
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type(this.data.articletitle)
        cy.get(':nth-child(2) > .form-control').type(this.data.articleabout)
        cy.get(':nth-child(3) > .form-control').type(this.data.writearticle)
        cy.get(':nth-child(4) > .form-control').type(this.data.tags)
        cy.get('.btn').click()
  
    
    //Edit Article
    cy.contains('Edit Article').click()
        cy.get('.btn').click()
    })

 /*
    it('Publish the new Article', ()=>{
       // cy.visit('https://react-redux.realworld.io/#/editor?_k=zeu258')
        cy.get(':nth-child(1) > .form-control').type('Cypress')
        cy.get(':nth-child(2) > .form-control').type('about cypress')
        cy.get(':nth-child(3) > .form-control').type('Cypress is a web and api automation tool')
        cy.get(':nth-child(4) > .form-control').type('Cypress is a web')
    //    cy.get('.btn').dblclick()
        cy.wait(1000)
        cy.get('.btn').dblclick()
        })*/
})
     
     Spec                                              Tests  Passing  Failing  Pending  Skipped
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  Test1.js                                 00:21        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:21        3        3        -        -        -






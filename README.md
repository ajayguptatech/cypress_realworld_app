![image](https://github.com/ajayguptatech/cypress_realworld_app/assets/140374002/a5c08cec-5466-42c8-8371-4f2e0598fad5)**Cypress-Automation**
Cypress is a next generation front end testing tool built for the modern web. This is a sample project which you can use to start your E2E testing with Cypress.

**How To Install Cypress**
Link : https://tinyurl.com/How-to-Install-Cypress

Version Installed : 12.17.0

**Total Test cases to be automated 8 till date automated 4 TC also added parameeters and passed data using JSON file.**

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

    //Login Using Credentials
    it('Validate Page Title', function() {
        cy.visit('https://react-redux.realworld.io')
        cy.url().should('include','realworld') //Assertion
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
     cy.get('.btn-outline-secondary').click()
 
    //Verify the Pubblished Articles details
    cy.get(':nth-child(1) > .form-control').should('have.value',this.data.articletitle)
    cy.get(':nth-child(2) > .form-control').should('have.value',this.data.articleabout)
    cy.get(':nth-child(3) > .form-control').should('have.value',this.data.writearticle)
    //cy.get(':nth-child(4) > .form-control').should('have.value',this.data.tags)
    

    //Mark an Article as Favourite
    cy.get(':nth-child(4) > .nav-link').click()
    cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').click()
    cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click().then(function()
    {
        console.log('marked as favourite')
    })
   
    //Delete the Article
    
    cy.get('h1').click().then(function(){
    console.log('abc')
    })
 //   cy.get('h1').click()
  //  cy.get('.btn-outline-danger').click()
   
/*
    //Post a comment the Article
    cy.get('h1').click()
    cy.get('.form-control').type(this.data.articletitle)
    cy.get('.card-footer > .btn').click()
    cy.get('.card-text').should('have.value',this.data.articletitle)
   

    //Delete the comment
    cy.get('.mod-options > .ion-trash-a').click()

    //Delete the Article
    cy.get('.btn-outline-danger').click()*/
})


    })

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  Real_World_Script.js                     00:16        1        1        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    √  All specs passed!                        00:16        1        1        -        -        -  





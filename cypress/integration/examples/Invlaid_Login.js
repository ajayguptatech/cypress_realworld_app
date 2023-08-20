// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('Login to Real World Application', () => {
    before(function(){
     // cy.visit('https://react-redux.realworld.io')
        cy.fixture('login').then(function(data){
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
        cy.get('.error-messages > li').should('have.value',this.data.articletitle)
        cy.log('Logged In to the application Sucessfully')  
})
    })
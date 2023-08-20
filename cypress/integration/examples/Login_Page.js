// type definitions for Cypress object "cy"
/// <reference types="cypress" />


describe('Login to Real World Application', () => {
    before(function(){
        cy.fixture('login').then(function(data){
            this.data=data
        })
    })

    //Login Using Credentials
    it('Validate Page Title', function() {
        cy.visit(this.data.url)
        cy.url().should('include','realworld') //Assertion
        cy.get(':nth-child(2) > .nav-link').click();
        cy.get(':nth-child(1) > .form-control').type(this.data.username);
        cy.get(':nth-child(2) > .form-control').type(this.data.password);
        cy.get('.btn').click();
        cy.get(':nth-child(4) > .nav-link').should('be.visible')
        cy.log('Verified if user is landed on homepage')
        cy.log('Logged In to the application Sucessfully')  
})
    })
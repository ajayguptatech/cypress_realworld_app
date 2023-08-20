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
        cy.log('Logged In to the application Sucessfully')  

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
        cy.log('marked as favourite')
    })

    //Delete the Article
    cy.once('uncaught:exception', () => false);
    cy.get('h1').click();
    cy.contains('Delete Article').click()

})


    })
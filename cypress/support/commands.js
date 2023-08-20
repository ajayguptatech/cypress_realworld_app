// type definitions for Cypress object "cy"
/// <reference types="cypress" />



//Login Using Credentials
const sync = 5000;
Cypress.Commands.add('loginportal', (url, username, password) => {
    cy.visit(url)
    cy.get(':nth-child(2) > .nav-link').click(); //Click on sign button
    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(password);
    cy.get('.btn').click();
    // cypress/support/commands.js
});

Cypress.Commands.add('postanarticle', (articletitle, articleabout, writearticle, tags, emptyvalue) => {

    // cypress/support/commands.js

    cy.contains('New Post').trigger('mouseover')
    if (emptyvalue == 'true') {
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(1) > .form-control').type(articletitle)
        cy.get(':nth-child(2) > .form-control').type(articleabout)
        cy.get(':nth-child(3) > .form-control').type(writearticle)
        cy.get(':nth-child(4) > .form-control').type(tags)
        cy.get('.btn').click()
    }
    else {
        cy.get('.container > .nav > :nth-child(2) > .nav-link').click()
        cy.get(':nth-child(2) > .form-control').type(articleabout)
        cy.get('.btn').click()
    }
});

Cypress.Commands.add('deletearticle', () => {

    //Delete the Article
    //cy.once('uncaught:exception', () => false);
    cy.get('p').click()
    cy.wait(sync)
    cy.contains('Delete Article').click()

})

Cypress.Commands.add('favouritearticle', () => {
    cy.get(':nth-child(4) > .nav-link').click()
    cy.wait(sync)
    cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').click()
    cy.wait(sync)
    cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link').click().then(function () {
        cy.log('marked as favourite')
    })


    Cypress.Commands.add('updatearticle', (updatewritearticle) => {
        cy.contains('Edit Article').click()
        cy.wait(sync)
        cy.get(':nth-child(3) > .form-control').clear()
        cy.get(':nth-child(3) > .form-control').type(updatewritearticle)
        cy.get('.btn').click()
        cy.wait(sync)

    })

})
// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('Login to Real World Application', () => {
    const sync = 4000;
    beforeEach(function () {
        //This will read test url and credentials from JSON file 

        cy.fixture('login').then(function (data) {
            this.data = data
        })

        //This will read test locators from JSON file 
        cy.fixture('homepage_locators').then(function (locators) {
            this.locators = locators
        })

        cy.fixture('postatricle').then(function (padata) {
            this.padata = padata
        })

        cy.fixture('favourite').then(function (favdata) {
            this.favdata = favdata
        })
    })

    it('Validate Page Title', function () {
        cy.loginportal(this.data.url, this.data.username, this.data.password)
        //imlpicit wait is handled by should 
        cy.get(this.locators.conduit).should('have.text', this.locators.homepage)
        cy.log('Logged In to the application Sucessfully')
    });


    it('Post an New Article', function () {
        cy.loginportal(this.data.url, this.data.username, this.data.password)
        cy.get(this.locators.conduit).should('have.text', this.locators.homepage)

        //Clicks on new post and publish the article
        cy.postanarticle(this.padata.articletitle, this.padata.articleabout, this.padata.writearticle, this.padata.tags, "true")
        cy.get(this.padata.articletitle_loc).should('have.text', this.padata.articletitle)
        cy.log(('Article published successfully'))
        cy.deletearticle()
        cy.log(('Delete'))

        cy.get(this.padata.noarticles_loc).should('have.text', this.padata.noarticles)
    });

    it('Blank values are not allowed', function () {
        cy.loginportal(this.data.url, this.data.username, this.data.password)
        cy.get(this.locators.conduit).should('have.text', this.locators.homepage)

        //Clicks on new post and publish the article
        cy.postanarticle(this.padata.articletitle, this.padata.articleabout, this.padata.writearticle, this.padata.tags, "false")
        cy.get(this.padata.errorarticletitle_loc).should('have.text', this.padata.errormsg)
    });

    it('Mark an Article as favourite', function () {
        cy.loginportal(this.data.url, this.data.username, this.data.password)
        cy.get(this.locators.conduit).should('have.text', this.locators.homepage)

        cy.postanarticle(this.padata.articletitle, this.padata.articleabout, this.padata.writearticle, this.padata.tags, "true")
        cy.favouritearticle()
        cy.get(this.favdata.article_loc).should('have.text', this.favdata.articletitle)
        cy.wait(sync)
        cy.get(this.favdata.article_loc).click()
        cy.deletearticle()
        cy.log("delete fav artcile")
        cy.get(this.padata.noarticles_loc).should('have.text', this.padata.noarticles)
    });


    it('Edit & Verify the Article Details', function () {
        cy.loginportal(this.data.url, this.data.username, this.data.password)
        cy.get(this.locators.conduit).should('have.text', this.locators.homepage)

        cy.postanarticle(this.padata.articletitle, this.padata.articleabout, this.padata.writearticle, this.padata.tags, "true")

        cy.updatearticle(this.padata.updatewritearticle)
        cy.get('p').should('have.text', this.padata.updatewritearticle)

        cy.deletearticle()
        cy.get(this.padata.noarticles_loc).should('have.text', this.padata.noarticles)
    });
})
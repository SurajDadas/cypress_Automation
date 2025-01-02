///<reference types="cypress"/>

describe('Verify the iframe functionality',function(){
    it('Verify iframe',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let body = iframe.contents().find('body')
            cy.wrap(body).as('bdy')
            cy.get('@bdy').within(function(){
                cy.get('.sub-heading').eq(1).should('have.text','GREAT SERVICE!')
            })
        })
    })

    it('Verify iframe',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function(iframe){
            let body = iframe[0].contentDocument.body
            cy.wrap(body).as('bdy')
            cy.get('@bdy').within(function(){
                cy.get('.sub-heading').eq(1).should('have.text','GREAT SERVICE!')
            })
        })
    })

    it.only('Verify iframe',function(){
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.get('#singleframe').then(function(iframe){
            let bdy = iframe.contents().find('body')
            cy.wrap(bdy).as('body')
            cy.get('@body').within(function(){
                cy.get('[type="text"]').first().type('Suraj')
            })
        })
    })

    it.only('Verify iframe',function(){
        cy.visit('https://demo.automationtesting.in/Frames.html')
        cy.contains('Iframe with in an Iframe').click({force : true})

        cy.get('iframe[style="float: left;height: 300px;width:600px"]').then(function(iframe){
            let bdy = iframe[0].contentDocument.body
            cy.wrap(bdy).as('body')
            cy.get('@body').within(function(){
                cy.get('iframe[style="float: left;height: 250px;width: 400px"]').then(function(iframe){
                    let bdy = iframe[0].contentDocument.body
                    cy.wrap(bdy).as('body')
                    cy.get('@body').within(function(){
                        cy.get('[type="text"]').last().type('Suraj Dadas')
                    })
                })
            })
        })
    })


})



















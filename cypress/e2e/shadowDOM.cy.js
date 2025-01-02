///<reference types="Cypress"/>
Cypress.config('includeShadowDom',true)
describe('Verify The shadowDOM',function(){
    it('Verify ShadowDOM',function(){
  
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html')
        cy.get('[onclick="attachShadowDom()"]').click()
        cy.get('#shadowHost').within(function(){
            cy.get('#name').type('I am Suraj Dadas')
        })
    })

})













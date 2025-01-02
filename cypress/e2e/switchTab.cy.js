///<reference types="cypress"/>

describe('verify the Different tab Switching Methods',function(){
    it('Verify Tab Switching',function(){
        cy.visit('https://www.webdriveruniversity.com/')
        cy.url().should('include','eruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('include','contactus.html')
        cy.get('[name="first_name"]').should('have.attr','placeholder','First Name')
    })

    it('Verify Tab Switching',function(){
        cy.visit('https://www.webdriveruniversity.com/')
        cy.url().should('include','eruniversity.com/')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('include','contactus.html')
        
    })

    it('Verify Tab Switching',function(){
        cy.visit('https://www.webdriveruniversity.com/')
        cy.url().should('include','eruniversity.com/')
        cy.get('#contact-us').invoke('attr','href').then(function(ref){
            cy.visit(`https://www.webdriveruniversity.com/${ref}`)
        })
        cy.url().should('include','contactus.html')
    })
})

















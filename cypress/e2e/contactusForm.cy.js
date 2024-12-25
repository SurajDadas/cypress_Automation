///<reference types="cypress"/>

describe('Verify the contactUs Form login functionality',function(){
    it('Verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Suraj')
        cy.get('[name="last_name"]').type('Dadas')
        cy.get('[name="email"]').type('suraj@gmail.com')
        cy.get('[name="message"]').type('I am new to cypress')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
    })
})















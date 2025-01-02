///<reference types="cypress"/>
describe('Verify the different window commands',function(){
    it('Verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Suraj')
        cy.get('[name="last_name"]').type('Dadas')
        cy.get('[name="email"]').type('suraj@gmail.com')
        cy.get('[name="message"]').type('I am new to cypress')
        cy.reload()
        cy.get('[name="first_name"]').invoke('text').should('be.empty')
        cy.get('[name="first_name"]').should('have.text','')
    })
    it.only('Verify the contact us form',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Suraj')
        cy.get('[name="last_name"]').type('Dadas')
        cy.get('[name="email"]').type('suraj@gmail.com')
        cy.get('[name="message"]').type('I am new to cypress')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
        cy.go('back')
        cy.url().should('include','Contact-Us/contactus.html')
        cy.go('forward')
        cy.contains('Thank You for your Message!').should('be.visible')
        cy.url().should('include','y.com/Contact-Us/contact-form-thank-you.html')

        cy.location().then(function(resp){
            cy.log(resp)
        })
    })
})















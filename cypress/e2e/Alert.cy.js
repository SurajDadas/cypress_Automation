///<reference types="cypress"/>

describe('Verify the Different Alert Functionalities',function(){
    it('Verify the Alert',function(){
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.on('window:alert',function(resp){
            expect(resp).to.eql('I am an alert box!')
        })
        cy.get('#alertexamples').click()
        cy.contains('You triggered and handled the alert dialog').should('be.visible')
    })

    it('Verify the Confirm BOX',function(){
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.on('window:confirm',function(resp){
            expect(resp).to.eql('I am a confirm alert')
            return true
        })
        cy.get('#confirmexample').click()
        cy.contains('You clicked OK, confirm returned ').should('be.visible')
    })

    it('Verify the Confirm BOx',function(){
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.window().then(function(obj){
            cy.stub(obj,'confirm').returns(true)
        })
        cy.get('#confirmexample').click()
        cy.contains('You clicked OK, confirm returned ').should('be.visible')
    })

    it('Verify the PROMPT Box',function(){
        cy.visit('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        cy.window().then(function(obj){
            cy.stub(obj,'prompt').returns('Suraj')
        })
        cy.get('#promptexample').click()
        cy.contains('Suraj').should('be.visible')
    })
})





























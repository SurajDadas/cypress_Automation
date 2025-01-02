///<reference types="cypress"/>

describe('verify The X path',function(){
    it('Verify the Xpath',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.xpath('//input[@ class="oxd-input oxd-input--active" and @ name="username"]').type('Admin')
        cy.xpath('//input[@ class="oxd-input oxd-input--active" and @ name="password"]').type('admin123')
        cy.xpath('//button[@type="submit" ]').click()
        cy.contains('Dashboard').should('be.visible')
    })

    it('Verify Xpath',function(){
        cy.visit('https://www.google.com/')
        // cy.xpath('//textarea[@id="APjFqb"]').type('Cypress{enter}')
        // cy.xpath('//h3[@class="LC20lb MBeuO DKV0Md" and contains(text(),"Cypress: Testing Frameworks for Javascript | Write, Run, Debug")]').click()
        cy.xpath(`//div[@id="SIvCob" and contains(text(),'Google offered in:  ')]/a[contains(text(),'हिन्दी')]`).click()
        cy.xpath('//div[@class="uU7dJb"]').should('have.text','भारत')
    })


})


















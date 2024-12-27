///<reference types="cypress"/>

describe('Verify the different Cookies',function(){
    it('Verify the different cookies',function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.getCookies().should('have.length',1)
        cy.getCookie('orangehrm').should('have.property','value')
        cy.setCookie('Suraj','suraj123')
        cy.getCookies().should('have.length',2)
        cy.getCookie('Suraj').should('have.property','value','suraj123')
        cy.getCookie('Suraj').then(function(resp){
            cy.log(resp.value)
        })

        cy.clearCookie('Suraj')
        cy.getCookies().should('have.length',1)
        cy.clearCookies()
        cy.getCookies().should('be.empty')
    })
})















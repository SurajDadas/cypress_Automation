///<reference types="cypress"/>

describe('Verify the different hooks methods',function(){
    before(function(){
        cy.log('I am FIRST')
    })

    beforeEach(function(){
        cy.log('Before Each TEST CASE')
    })

    afterEach(function(){
        cy.log('After EACH TEST CASE')
    })

    after(function(){
        cy.log('I am LAST')
    })

    it('AAA',function(){
        cy.log('1111111111111111')
    })

    it('BBB',function(){
        cy.log('2222222222222222')
    })
})












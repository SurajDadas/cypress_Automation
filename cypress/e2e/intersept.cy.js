///<reference types="cypress"/>

describe('Verify the intersept and stubbing',function(){
    it('Get the user information',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2',
        }).as('Get')
        cy.visit('https://reqres.in/')
        cy.get('.url').first().click()
        cy.wait('@Get').then(function({response,request}){
            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql('OK')
           // expect(resp.body.name).to.eql('morpheus')
        })    
    })

    it('Get User Information by using intersept',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        }).as('GetUser')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetUser').then(function({response,request}){
            expect(response.statusCode).to.eql(200)
            expect(response.statusMessage).to.eql('OK')
            cy.log(response)
            expect(response.body.id).to.eql(1)
        })
    })

    it('Create new user y using intersept method',function(){
        cy.intercept({
            method : 'POST',
            url : 'https://jsonplaceholder.cypress.io/comments'
        }).as('Create')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-post.btn.btn-success').click()
        cy.wait('@Create').then(function({response,request}){
            expect(response.statusCode).to.eql(201)
            expect(response.statusMessage).to.eql('Created')
            cy.log(response)
        })
    })

    it('Verify stubbing',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1'
        },{
            "name" : "Suraj"
        }).as('GetUser')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@GetUser').then(function({response,request}){
            expect(response.statusCode).to.eql(200)
            // expect(response.statusMessage).to.eql('OK')
            // cy.log(response)
            // expect(response.body.id).to.eql(1)
            cy.log(response.body)
        })
    })

    it.only('Create the new User but Stub the information',function(){
        cy.intercept({
            method : 'GET',
            url : 'https://jsonplaceholder.cypress.io/comments/1s'
    },       { "name" : "Suraj",
                "job" : "Instructor"
}).as('POST')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.get('.network-btn.btn.btn-primary').click()
        cy.wait('@POST').then(function({response,request}){
            expect(response.statusCode).to.eql(200)
            expect(response.body.name).to.eql('Suraj')
        })
    })

})






















///<reference types="cypress"/>

describe('Verify the different API request',function(){
    let id = null
    it('verify the GET request, get the Users information from page no 2',function(){
        cy.request({
            method : 'GET',
            url : 'https://reqres.in/api/users?page=2'
        }).then(function(response){
            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql('OK')
        })
    })

    it('Create the new user',function(){
        cy.request({
            method : 'POST',
            url : 'https://reqres.in/api/users',
            body : {
                    "name": "Suraj",
                     "job": "leader"
            }
        }).then(function(response){
            expect(response.status).to.eql(201)
            expect(response.statusText).to.eql('Created')
            expect(response.body.name).to.eql('Suraj')
            id = response.body.id
            cy.log(id)
        })
    })

    it('Update the user information',function(){
        cy.request({
            method : 'PUT',
            url : `https://reqres.in/api/users/2`,
            body : {
                "name" : "Arjun",
                "job" : "Sport Person"
            }
        }).then(function(response){
            expect(response.status).to.eql(200)
            expect(response.body.name).to.eql('Arjun')
        })
    })

    it('Verify the Patch Request',function(){
        cy.request({
            method : 'PATCH',
            url : `https://reqres.in/api/users/2`,
            body : {
                "job" : "Wrestling"
            }
        }).then(function(resp){
            expect(resp.status).to.eql(200)
            expect(resp.body.job).to.eql('Wrestling')
            cy.log(resp.body)
            //expect(resp.body.data.first_name).to.eql('Janet')
        })
    })

    it('Verify the GET Request',function(){
        cy.request({
            method : 'GET',
            url : `https://reqres.in/api/users/2`
        }).then(function(resp){
            expect(resp.status).to.eql(200)
            // expect(resp.body.job).to.eql('Wrestling')
            cy.log(resp.body)
            //expect(resp.body.data.first_name).to.eql('Janet')
        })
    })


    it('Verify the DELETE Request',function(){
        cy.request({
            method : 'DELETE',
            url : `https://reqres.in/api/users/2`
        }).then(function(resp){
            expect(resp.status).to.eql(204)
        })
    })
})


















///<reference types="cypress"/>

describe('Verify the different API request', function () {
    let id = null
    it('verify the GET request, get the Users information from page no 2', function () {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then(function (response) {
            expect(response.status).to.eql(200)
            expect(response.statusText).to.eql('OK')
        })
    })

    it('Create the new user', function () {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: {
                "name": "Suraj",
                "job": "leader"
            }
        }).then(function (response) {
            expect(response.status).to.eql(201)
            expect(response.statusText).to.eql('Created')
            expect(response.body.name).to.eql('Suraj')
            id = response.body.id
            cy.log(id)
        })
    })

    it('Update the user information', function () {
        cy.request({
            method: 'PUT',
            url: `https://reqres.in/api/users/2`,
            body: {
                "name": "Arjun",
                "job": "Sport Person"
            }
        }).then(function (response) {
            expect(response.status).to.eql(200)
            expect(response.body.name).to.eql('Arjun')
        })
    })

    it('Verify the Patch Request', function () {
        cy.request({
            method: 'PATCH',
            url: `https://reqres.in/api/users/2`,
            body: {
                "job": "Wrestling"
            }
        }).then(function (resp) {
            expect(resp.status).to.eql(200)
            expect(resp.body.job).to.eql('Wrestling')
            cy.log(resp.body)
            //expect(resp.body.data.first_name).to.eql('Janet')
        })
    })

    it('Verify the GET Request', function () {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users/2`
        }).then(function (resp) {
            expect(resp.status).to.eql(200)
            // expect(resp.body.job).to.eql('Wrestling')
            cy.log(resp.body)
            //expect(resp.body.data.first_name).to.eql('Janet')
        })
    })


    it('Verify the DELETE Request', function () {
        cy.request({
            method: 'DELETE',
            url: `https://reqres.in/api/users/2`
        }).then(function (resp) {
            expect(resp.status).to.eql(204)
        })
    })
})


context('Verify the different goREST API', function () {
    let token = 'Bearer 380a70c84ea7d717a50f1ed7a912579b01b5e9b43a41056307f08b735284d60f'
    let randomName = Math.random().toString(30).substring(5)
    let email = randomName + '@gmail.com'
    it('Create the new user', function () {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                "Authorization": token
            },
            body: {
                "name": randomName,
                "gender": "male",
                "email": email,
                "status": "active"

            }
        }).then(function (resp) {
            expect(resp.status).to.eql(201)
            expect(resp.body.name).to.eql(randomName)
            expect(resp.body.email).to.eql(email)
            let id = resp.body.id
            return id
        }).then(function (id) {
            cy.request({
                method: 'GET',
                url: `https://gorest.co.in/public/v2/users/${id}`,
                headers: {
                    "Authorization": token
                }
            }).then(function (resp) {
                let id = resp.body.id
                expect(resp.status).to.eql(200)
                expect(resp.body.id).to.eql(id)

                return id
            }).then(function (id) {
                cy.request({
                    method: 'PUT',
                    url: `https://gorest.co.in/public/v2/users/${id}`,
                    headers: {
                        "Authorization": token
                    },
                    body: {
                        "name": "Suraj",
                        "gender": "male",
                        "email": email,
                        "status": "active"

                    }
                }).then(function (resp) {
                    expect(resp.status).to.eql(200)
                    expect(resp.body.name).to.eql('Suraj')
                    let id = resp.body.id
                    return id
                }).then(function (id) {
                    cy.request({
                        method: 'PATCH',
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers: {
                            "Authorization": token
                        },
                        body : {
                            "name" : "Suraj_Dadas"
                        }
                    }).then(function(resp){
                        expect(resp.status).to.eql(200)
                        expect(resp.body.name).to.eql('Suraj_Dadas')
                        expect(resp.body.email).to.eql(email)
                        let id =resp.body.id
                        return id
                    })
                }).then(function (id) {
                    cy.request({
                        method: 'DELETE',
                        url: `https://gorest.co.in/public/v2/users/${id}`,
                        headers: {
                            "Authorization": token
                        }
                    }).then(function(resp){
                        expect(resp.status).to.eql(204)
                        expect(resp.statusText).to.eql('No Content')
                    })
                })
            })
        })
    })
})


















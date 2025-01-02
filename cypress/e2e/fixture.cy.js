///<reference types="cypress"/>

describe('Verify the Different methods of data extraction from fixture folder',function(){
    it('Insert manually',function(){
        cy.visit('https://www.webdriveruniversity.com/index.html')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('include','/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Suraj')
        cy.get('[name="last_name"]').type('Dadas')
        cy.get('[name="email"]').type('suraj@gmail.com')
        cy.get('[name="message"]').type('I am Suraj Dadas')
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
    })

    it('Insert data from array',function(){
        let data = ['Suraj','Dadas','suraj@gmail.com','I am suraj Dadas']
        cy.visit('https://www.webdriveruniversity.com/index.html')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('include','/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data[0])
        cy.get('[name="last_name"]').type(data[1])
        cy.get('[name="email"]').type(data[2])
        cy.get('[name="message"]').type(data[3])
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
    })

    it('Insert the data from object',function(){
        let obj = {
            fname : 'Suraj',
            lname : 'Dadas',
            email : 'suraj@gmail.com',
            message : 'I am Suraj Dadas'
        }
        cy.visit('https://www.webdriveruniversity.com/index.html')
        cy.get('#contact-us').invoke('attr','target','_self').click()
        cy.url().should('include','/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(obj.fname)
        cy.get('[name="last_name"]').type(obj.lname)
        cy.get('[name="email"]').type(obj.email)
        cy.get('[name="message"]').type(obj.message)
        cy.get('[type="submit"]').click()
        cy.contains('Thank You for your Message!').should('be.visible')
    })

    it.only('extract data from fixture folder',function(){
        cy.fixture('data').then(function(info){
            cy.visit('https://www.webdriveruniversity.com/index.html')
            cy.get('#contact-us').invoke('attr','target','_self').click()
            cy.url().should('include','/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(info.fname)
            cy.get('[name="last_name"]').type(info.lname)
            cy.get('[name="email"]').type(info.email)
            cy.get('[name="message"]').type(info.message)
            cy.get('[type="submit"]').click()
            cy.contains('Thank You for your Message!').should('be.visible')
        })
    })

    
    it('Extract multiple data from fixture',function(){
        cy.fixture('multi').then(function(data){
            data.forEach(function(info){
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.url().should('include','/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(info.fname)
                cy.get('[name="last_name"]').type(info.lname)
                cy.get('[name="email"]').type(info.email)
                cy.get('[name="message"]').type(info.message)
                cy.get('[type="submit"]').click({force:true})
                cy.contains('Thank You for your Message!').should('be.visible')
            })

        })
    })



    it('validate the contact us form',()=>{
        cy.fixture('multi').then((data)=>{
        data.forEach((info)=>{
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(info.fname)
            cy.get('[name="last_name"]').type(info.lname)
            cy.get('[name="email"]').type(info.email)
            cy.get('[name="message"]').type(info.message)
            cy.get('[value="SUBMIT"]').click()
        })
        })
   })
})



















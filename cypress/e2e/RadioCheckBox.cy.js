///<reference types="cypress"/>

describe('Verify the different functionalites',function(){
    it('Verify the Radio Button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('.section-title').eq(2).within(function(){
            cy.get('[type="radio"]').each(function(el,index,arr){
                if(index ==4){
                    cy.wrap(el).click().should('be.checked')
                }else{
                    cy.wrap(el).should('not.be.checked')
                }
            })
        })
    })

    it('Verify the Different Check Boxes',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('label>[type="checkbox"]').each(function(el,index,arr){
             if(el.attr('checked')){
                cy.wrap(el).uncheck().should('not.be.checked')
             }else{
                cy.wrap(el).check().should('be.checked')
             }
        })
        cy.get('[type="checkbox"]').check({multiple:true}).should('be.checked')
        cy.get('[type="checkbox"]').uncheck({multiple:true}).should('not.be.checked')
    })

    it('Verify the Static Dropdown',function(){
        cy.visit('https://demo.mobiscroll.com/select/country-picker')
        cy.get('#demo155-country-picker').click()
        cy.get('.mbsc-select-filter-cont.mbsc-ios.mbsc-ltr').type('Ind')
        cy.get('.md-country-picker-item').each(function(el,index,arr){
            if(el.text() == 'India'){
                cy.wrap(el).click({force:true})
            }
        })
        cy.contains('India').should('be.visible')
    })

    it.only('Verify the Dynamic DropDown',function(){
        cy.visit('https://www.amazon.in/')
        cy.get('#twotabsearchtextbox').type('Gadgets')
        cy.get('.s-heavy').each(function(el,index,arr){
            if(el.text() == ' for home'){
                cy.wrap(el).click({force : true})
            }
        })
        cy.contains('1-48 of over 50,000 results for').should('be.visible')
    })
})






















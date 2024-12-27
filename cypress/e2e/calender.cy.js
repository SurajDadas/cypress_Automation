///<reference types="cypress"/>

describe('Verify the Date Selection Functionality',function(){
    it('Select The Date 15/01/2030',function(){
        cy.visit('https://www.globalsqa.com/demo-site/datepicker/')
        // cy.get('.demo-frame.lazyloaded').first().then(function(iframe){
        //     let body = iframe.contents('body')
        //     cy.wrap(body).as('bdy')
        //     cy.get('@bdy').within(function(){
        //         cy.get('#datepicker').click()
        //         function SelectYearMonth(){
        //             cy.get('.ui-datepicker-year').first().then(function(el,index,arr){
        //                 if(!el.text().includes('2030')){
        //                     cy.get('[data-handler="next"]').first().click()
        //                     SelectYearMonth()
        //                 }
        //             }).then(function(){
        //                 cy.get('.ui-datepicker-month').first().then(function(el,index,arr){
        //                     if(!el.text().includes('January')){
        //                         cy.get('[data-handler="next"]').first().click()
        //                         SelectYearMonth()
        //                     }
        //                 })
        //             })
        //         }
        //         SelectYearMonth()
        //     })
            
        // })
       
    })
})




















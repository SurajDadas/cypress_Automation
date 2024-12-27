///<reference types="cypress"/>

describe('Verify the Table Functionalities',function(){
    it('Verify the Multiplication Table of 295',function(){
        cy.visit('https://testbook.com/maths-table/table-of-295')
        cy.get('.card.lms-custom-style.ui-js-external-links').eq(2).within(function(){
            cy.get('tbody>tr').each(function(el,index,arr){
               let text = el.find('td').first().text()
               let num = 295 * (index+1)                                // CODE NOT WORKING
              // cy.log(num)
               expect(text).to.eql(`295 x ${index+1} = ${num}`)
               cy.log(typeof(text))
               cy.log(typeof(`295 x ${index+1} = ${num}`))
            })
        })
    })


    it.only('Verify the Addition Of tables',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let total = 0
        cy.get('#t01').find('tr').each(function(el,index,arr){
            if(index !=0){
                let text = Number(el.find('td').last().text())
                total = total + text
            }
        }).then(function(){
            expect(total).to.eql(159)
        })
    })

    it.only('Verify tha addition',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').each(function(el,index,arr){
            if(index !=0){
                let text = Number(el.find('td').last().text())
                sum = sum + text
            }
        }).then(function(){
            expect(sum).to.eql(163)
        })
    })
})

















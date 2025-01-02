///<reference types="cypress"/>

describe('Verify The Different Mouse Events',function(){
    it('Verify the drag and Drop Functionality',function(){
        let dataTransfer = new DataTransfer()
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
            cy.get('#menu-hamburger').trigger('dragstart',{dataTransfer})
            cy.get('#plate-items').trigger('drop',{dataTransfer})
            cy.get('#menu-hamburger').trigger('dragend',{dataTransfer})
            cy.get('#plate-hamburger').should('have.text','Hamburger')
    })

    it('Verify the drag and drop',function(){
        cy.visit('https://www.webdriveruniversity.com/Actions/index.html')
        cy.get('#draggable').trigger('mousedown',{which:1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force : true})
        cy.contains('Dropped!').should('be.visible')
    })

})

















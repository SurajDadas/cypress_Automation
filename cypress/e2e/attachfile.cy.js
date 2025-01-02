///<reference types="cypress"/>

describe('Verify the Upload File Functionality',function(){
    it('Verify uplOAD fILE',function(){
        let file = 'abc.jpeg'
        let file1 = 'abcd.jpeg'
        cy.visit('https://practice.expandtesting.com/upload')
         cy.get('#fileInput').attachFile(file1)
         cy.get('#fileSubmit').click()
         cy.contains('File Uploaded!').should('be.visible')
    })

    it.only('Verify multiple file upload',function(){
        let file = 'abc.jpeg'
        let file1 = 'abcd.jpeg'
        cy.visit('https://www.igniteui.com/file-upload/multiple-upload')
        cy.get('#igUpload1_ibb_lbl').attachFile(file,{subjectType : "drag-n-drop"})
        cy.get('#igUpload1_spbtncncl_lbl').click()
        cy.get('#igUpload1_spbtncncl_lbl').should('have.text','Done')
    })
})






















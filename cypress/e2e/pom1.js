const userID = '[name="username"]'
const pass = '[name="password"]'
const submit_btn = '[type="submit"]'



class Log{
    Visit(url){
       cy.visit(url)
    }

    EnterCredentials(username,password){
        cy.get(userID).type(username)
        cy.get(pass).type(password)
    }

    Submit(){
        cy.get(submit_btn).click()
    }
    validate(data){
        cy.contains(data).should('be.visible')
    }

}
export default Log
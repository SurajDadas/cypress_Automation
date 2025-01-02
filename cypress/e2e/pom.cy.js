///<reference types="cypress"/>
import Login from "./pom"
import Log from "./pom1"
let login1 = new Log()
let login = new Login()
describe('Verify the different POM',function(){
    it('verify POM',function(){
        login.Visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login.EnterCredentials('Admin','admin123')
        login.Submit()
        login.validate('Dashboard')
    })

    it('verify POM',function(){
        login1.Visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        login1.EnterCredentials('Admin','admin123')
        login1.Submit()
        login1.validate('Dashboard')
    })
})



























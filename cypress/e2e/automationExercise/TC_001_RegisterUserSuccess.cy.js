// < reference types="cypress" />
import BasePage from "../../PageObject/automationExercise/Common/BasePage"
import LoginPage from "../../PageObject/automationExercise/LoginPage.js"
describe('Register User Success', () => {
    before(() => {
        cy.wrap(BasePage.createPage('LoginPage')).as('loginPage')

    })
 
    it('Register User Success', () => {
        const lp = new LoginPage()
        cy.visit('https://automationexercise.com/')
        // loginPage.then(page => {
        //     page.inputUsername('sampleTest@gmail.com')
        //     page.inputPassword('sampleTest123!@#')
        //     page.clickSignUpButton()
        //     page.clickSignUpButton()
        // })                // will remove hardcode data later
        lp.inputEmail('aabc')
                
    })
})
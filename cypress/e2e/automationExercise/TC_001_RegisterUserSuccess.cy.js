// < reference types="cypress" />
import { basePage as bp} from "../../PageObject/automationExercise/Common/BasePage"
describe('Register User Success', () => {
 
    it('Register User Success', () => {
        cy.visit('https://automationexercise.com/')
        const loginPage = bp.getLoginPage()
        loginPage.clickSignUpButton()
    })
})
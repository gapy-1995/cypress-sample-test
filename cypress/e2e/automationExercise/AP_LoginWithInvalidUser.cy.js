/// <reference types="cypress" />
import loginPage from '../../PageObject/LoginPage';
import HeaderBar from '../../PageObject/automationExercise/Common/HeaderBar';
import LoginPage from '../../PageObject/automationExercise/LoginPage';

describe('As an fragment user, i can not login to automation exercise website', ()=>{

    beforeEach(() => {
       cy.visit('')
    })

    it('Login with correct email and password', () => {
        HeaderBar.navigateToLoginPage()
        LoginPage.inputEmail('abczzz@gmail.com')
        LoginPage.inputPassword('abc123!@#')
        LoginPage.clickLogin()
        LoginPage.verifyLoginSuccess()
    })

})

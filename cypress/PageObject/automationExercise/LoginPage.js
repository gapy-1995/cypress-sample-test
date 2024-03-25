// Object locator sector
let emailTxtField = () => cy.get('input[data-qa="login-email"]')
let passwordTxtField = () => cy.get('input[data-qa="login-password"]')
let loginButton = () => cy.get('button[data-qa="login-button"]')
let logoutButton = () => cy.get('.shop-menu > .nav > :nth-child(4) > a')
let signUpButton = () => cy.get('a[data-qa="sign-up-link"]')
class LoginPage {
    inputEmail = email =>{
        emailTxtField().type(email)
    }

    inputPassword = password => {
        passwordTxtField().type(password)
    }

    clickLogin() {
        loginButton().click()
    }

    verifyLoginSuccess = () => {
        logoutButton().should('be.visible')
    }

    clickSignUpButton() {
        signUpButton().click()
        return new RegisterPage()
    }
}

export default LoginPage
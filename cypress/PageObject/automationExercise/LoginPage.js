// Object locator sector
let emailTxtField = () => cy.get('input[data-qa="login-email"]')
let passwordTxtField = () => cy.get('input[data-qa="login-password"]')
let loginButton = () => cy.get('button[data-qa="login-button"]')
let logoutButton = () => cy.get('.shop-menu > .nav > :nth-child(4) > a')
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
}

export default LoginPage = new LoginPage()
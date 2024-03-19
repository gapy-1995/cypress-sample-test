/// < reference types="cypress" />
import { lockedUser, problemUser, glitchUser, errorUser} from '../../fixtures/credentials'
import loginPage from '../../PageObject/LoginPage'
import inventoryItem from '../../PageObject/HomePage'
import cartPage from '../../PageObject/CartPage'
import checkoutPage from '../../PageObject/CheckOutStepOne'
describe('Validate screen of all kind of user', () => {
    beforeEach(() => {
        cy.visit('')
    })
    it('Validate locked out user can not access to home page', () => {
        cy.get(loginPage.inputUsername).type(lockedUser.userName)
        cy.get(loginPage.inputPassword).type(lockedUser.password)
        cy.get(loginPage.buttonLogin).click()
        cy.get(loginPage.errorButton).should('be.visible')
    })

    it('Validate problem user can not input last name', () => {
        cy.get(loginPage.inputUsername).type(problemUser.userName)
        cy.get(loginPage.inputPassword).type(problemUser.password)
        cy.get(loginPage.buttonLogin).click()

        cy.get(inventoryItem.firstThumbnails).should('be.visible')
        cy.get(inventoryItem.addToCartBackPackButton).click()
        cy.get(inventoryItem.shoppingCartLink).click()
        cy.get(cartPage.checkoutButton).click()
        
        cy.get(checkoutPage.firstName).type('John')
        cy.get(checkoutPage.lastName).type('Doe')  // error occur here
        cy.get(checkoutPage.postalCode).type('12345')
        cy.get(checkoutPage.continueButton).click()
    })
})
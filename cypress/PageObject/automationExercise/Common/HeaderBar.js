/// <reference types="cypress" />

// Object locator sector
let navBar = { 
    homeNav: () =>  cy.get('.fa fa-home'),
    productNav: () => cy.get('a[href="/product"]'),
    loginNav: () => cy.get('a[href="/login"]'),
}
let homeNav = {}
let productNav = {}


class HeaderBar extends BasePage {

    navigateToHomePage = () => {
        navBar.homeNav().click()
    };

    navigateToLoginPage = () => {
        navBar.loginNav().click()
        BasePage.createPage('LoginPage')
    };
}


/// <reference types="cypress" />
import LoginPage from "../LoginPage";


function navigateToHomePage() {
    cy.visit('')

}

class BasePage {
    getLoginPage() {
        return new LoginPage();
    }
    // Add other methods to return instances of other page objects as needed
}

export const basePage = new BasePage();

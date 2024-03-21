/// <reference types="cypress" />


class BasePage {
    //definne base object factory in here
                
    // locator sector
    navigateToHomePage = () => {
        cy.visit('http://automationexercise.com')
    }   

    
}
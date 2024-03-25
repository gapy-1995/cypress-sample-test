/// <reference types="cypress" />


class BasePage {
    //definne base object factory in here
    static async create(pageName) {
        pageName = pageName.charAt(0).toUpperCase()
        try {
            const pageInstance = await import(`cypress\/PageObject\/automationExercise\/${pageName}Page.js`)
            return new pageInstance.default();
        } catch(error) {
            throw new Error(`Page ${pageName} not found`)
        }
    }      

    // locator sector
    navigateToHomePage = () => {
        cy.visit('')
    }   

    
}
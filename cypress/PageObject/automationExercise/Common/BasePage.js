/// <reference types="cypress" />


export default class BasePage {
  
    static pageInstances = {}; // Assign an empty object to the pageInstances property
    //definne base object factory in here
    static async createPage(pageName) {
        if (!this.pageInstances[pageName]) {
            try {
                const pageInstance = await import(`./cypress/PageObject/automationExercise/${pageName}.js`);
                console.log('Imported:', pageInstance);
                this.pageInstances[pageName] = new pageInstance.default();
            } catch (error) {
                throw new Error(`Page ${pageName} not found`);
            }
        }
        return this.pageInstances[pageName]
  }

  // locator sector
  navigateToHomePage() {
    cy.visit("");
  };
}

// < reference types="cypress" />

describe('Register User Success', () => {
    it('Register User Success', () => {
        cy.visit('')

        cy.get('a[href="/login"]').click()

        cy.get('input[name="email"]').type('abc');
    })
})
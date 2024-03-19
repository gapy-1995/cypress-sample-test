/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress
import { validUser  } from '../../fixtures/credentials'
describe('As an Standard user i want to proceed buy Backpack success', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/')
      cy.get('input[data-test=username]').type(validUser.userName)
      cy.get('input[data-test=password]').type(validUser.password)
      cy.get('input[type=submit]').click()
      
      cy.get('.title').should('contain', 'Products')
    })
  
    it('displays two todo items by default', () => {
        
        // verify backpack image not broken to interact
        cy.get('img[alt="Sauce Labs Backpack"]').should('have.attr', 'src')
          .then((src) => {
              cy.request(src)
              .its('status')
              .should('eq', 200)
          })

        // process to buy backpack
        cy.get('button[data-test=add-to-cart-sauce-labs-backpack]').click()
        cy.get('#remove-sauce-labs-backpack').should('have.text', 'Remove')
        cy.get('.shopping_cart_link').click()

        cy.get('.inventory_item_price').each(($el) => {
          cy.wrap($el).should('contain.text', '29.99')
        })

        cy.get('button[data-test="checkout"]').click()

        // input credentials
        cy.get('#first-name').type('John')
        cy.get('#last-name').type('Doe')
        cy.get('#postal-code').type('12345')
        cy.get('input[type=submit]').click()

        // verify checkout overview
        cy.get('.cart_item').should(($cartItems) => {
          expect($cartItems).to.have.length.greaterThan(0)
          expect($cartItems.eq(0)).to.contain('Sauce Labs Backpack')
          expect($cartItems.eq(0)).to.contain('29.99')
        } )

        cy.get('button[data-test=finish]').click()
    })
  })

  
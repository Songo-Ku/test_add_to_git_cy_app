/// <reference types="cypress" />

describe('first test', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io')
      cy.visit('/')

    })
  })
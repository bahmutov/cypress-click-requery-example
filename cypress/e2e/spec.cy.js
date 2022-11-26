// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('clicks on the Go button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Go').click()
  cy.contains('output', 'Gone')
})

it.only('clicks on the Ready button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Ready').click()
  cy.contains('output', 'Ready')
  cy.contains('button', 'Go')
    .should('be.visible')
    .wait(1000)
    .click()
  cy.contains('output', 'Gone')
})

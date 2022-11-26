// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

it('clicks on the Go button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Go').click()
  cy.contains('output', 'Gone')
})

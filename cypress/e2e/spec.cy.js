// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

import { registerDetachedElementFix } from './util'
registerDetachedElementFix()

// no detached DOM error
it('clicks on the Go button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Go').click()
  cy.contains('output', 'Gone')
})

// the "go" button is detached if you click the "ready" button
it.only('clicks on the Ready button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Ready').click()
  cy.contains('output', 'Ready')
  cy.contains('button', 'Go').wait(1000).click()
  cy.contains('output', 'Gone')
})

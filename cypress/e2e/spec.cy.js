// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

const currentSubject = cy.currentSubject.bind(cy)
cy.currentSubject = (chainerId) => {
  const subject = currentSubject(chainerId)
  if (
    subject &&
    Cypress.dom.isElement(subject) &&
    Cypress.dom.isDetached(subject)
  ) {
    console.warn('detached element', subject)
    // replace the subject with new DOM element with the same ID
    // or CSS selector if found
    const doc = cy.state('document')
    const newElement = doc.getElementById(
      subject.attr('id'),
    )
    if (newElement) {
      console.warn(
        'replaced with current element',
        newElement,
      )
      const newSubject = Cypress.$(newElement)
      cy.state('subjects')[chainerId] = newSubject

      return newSubject
    }
  }
  return subject
}

it('clicks on the Go button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Go').click()
  cy.contains('output', 'Gone')
})

it('clicks on the Ready button', () => {
  cy.visit('index.html')
  cy.contains('button', 'Ready').click()
  cy.contains('output', 'Ready')
  cy.contains('button', 'Go').wait(1000).click()
  cy.contains('output', 'Gone')
})

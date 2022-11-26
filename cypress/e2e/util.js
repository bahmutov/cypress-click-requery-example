export const registerDetachedElementFix = () => {
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
}

it('logs in', () => {
  cy.intercept('GET', '**/notes**').as('getNotes')

  cy.login()

  cy.wait('@getNotes')
  cy.contains('h1', 'Your Notes').should('be.visible')
})

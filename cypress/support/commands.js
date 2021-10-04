Cypress.Commands.add('login', () => {
  cy.log(`Logging in as ${Cypress.env('userType') ? Cypress.env('userType') : 'non-admin'}`)

  if (Cypress.env('userType') === 'admin') {
    Cypress.env('user', Cypress.env('admin'))
  } else {
    Cypress.env('user', Cypress.env('nonAdmin'))
  }

  cy.visit('/login')

  cy.get('#email')
    .should('be.visible')
    .type(Cypress.env('user').email, { log: false })
  cy.get('#password')
    .should('be.visible')
    .type(Cypress.env('user').password, { log: false })
  cy.contains('button', 'Login')
    .should('be.visible')
    .click()
})

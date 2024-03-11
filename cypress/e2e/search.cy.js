describe('search', () => {
  beforeEach(() => {
    cy.intercept(/characters/).as('characters')
    cy.visit('/')
  })

  describe('initially', () => {
    it('shows all (50) characters', () => {
      cy.wait('@characters').then(() => {
        cy.get('article').should('have.length', 50)
      })
    })
  })

  describe('text is input', () => {
    it('shows only matching characters', () => {
      cy.get('[data-testid=search-box]').type('a')
      cy.wait('@characters').then(() => {
        cy.get('article').should('have.length', 3)
      })
    })
  })
})

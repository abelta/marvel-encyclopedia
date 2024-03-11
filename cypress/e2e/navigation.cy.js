describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('lands on the home page', () => {
    cy.hash().should('be.empty')
  })

  describe('click on character', () => {
    it('navigates to the character page', () => {
      cy.intercept(/characters/).as('characters')
      cy.wait('@characters').then(() => {
        cy.get('article').first().click()
      })
      cy.url().should('include', '/character/')
    })
  })

  describe('logo', () => {
    it('navigates to the home page', () => {
      cy.intercept(/characters/).as('characters')
      cy.wait('@characters').then(() => {
        cy.get('article').first().click()
      })
      cy.get('header a').click()
      cy.hash().should('be.empty')
    })
  })
})

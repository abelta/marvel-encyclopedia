describe('favorites', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('initially', () => {
    it('shows no favorites', () => {
      cy.get('[data-testid=favorites-counter]').should('contain', '0')
    })
  })

  describe('a favorite is added', () => {
    it('goes up', () => {
      cy.get('[data-testid=fav-button]').first().click()
      cy.get('[data-testid=favorites-counter]').should('contain', '1')
    })
  })

  describe('a favorite is removed', () => {
    it('goes down', () => {
      cy.get('[data-testid=fav-button]').first().click()
      cy.get('[data-testid=fav-button]').first().click()
      cy.get('[data-testid=favorites-counter]').should('contain', '0')
    })
  })

  describe('navigating through the pages', () => {
    it('keeps the favorites', () => {
      cy.get('[data-testid=fav-button]').first().click()
      cy.get('[data-testid=favorites-counter]').should('contain', '1')
      cy.get('article').first().click()
      cy.get('[data-testid=favorites-counter]').should('contain', '1')
      cy.get('header a').click()
      cy.get('[data-testid=favorites-counter]').should('contain', '1')
    })
  })

  describe('favorites filter', () => {
    it('shows only favorites', () => {
      cy.get('[data-testid=fav-button]').first().click()
      cy.get('[data-testid=favorites-counter]').should('contain', '1')
      cy.get('[data-testid=favs-filter]').click()
      cy.get('[data-testid=character-card]').should('have.length', 1)
    })
  })
})

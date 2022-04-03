describe('Link', () => {
  it('Should be in the page', () => {
    cy.visit('/coffee-store/1');
    cy.get('a')
      .should('have.length', 1)
      .should('have.text', 'Back to home!')
      .should('have.attr', 'href')
      .and('include', '/');
  })
})
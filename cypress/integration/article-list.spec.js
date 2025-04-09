describe('Article List', () => {
  it('displays articles on page load', () => {
    cy.visit('http://localhost:3000');
    cy.get('ul').should('exist'); // Check if the article list is rendered
    cy.get('.article-card').should('have.length', 2); // Assuming 2 articles are shown
    cy.get('.article-card').first().should('contain', 'Article 1');
  });
});

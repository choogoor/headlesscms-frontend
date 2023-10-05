describe('Title Check', () => {
  it('Should check if title is correct', () => {
    cy.visit('http://localhost:5173/')
    cy.get('h1').contains('Vite + React')
  })
})

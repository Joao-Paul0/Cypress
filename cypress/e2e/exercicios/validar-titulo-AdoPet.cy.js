describe('Página principal', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })
  it('Validar titulo "AdoPet" na página inicial', () => {
    cy.title().should('eq', 'AdoPet')
  })
})
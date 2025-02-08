describe('Página principal', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Validar texto "Quem ama adota" na página principal', () => {
    cy.contains('p', 'Quem ama adota!');
  })

  it('Validar texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" na página principal', () => {
    cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!');
  })
})
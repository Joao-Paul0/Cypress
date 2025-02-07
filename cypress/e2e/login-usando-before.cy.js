describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })
  it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('chris@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Senha123');
    cy.contains('Entrar').click();
  })
})
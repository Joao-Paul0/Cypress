describe('Página cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('Deve preencher os campos do cadastro corretamente e clicar em cadastrar', () => {
    cy.cadastrar('Layne', 'layne@email.com', 'Senha123');
  })

  it('Deve preencher os campos do login corretamente e clicar em entrar', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    cy.login('layne@email.com', 'Senha123');
  })
})
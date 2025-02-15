describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos login corretamente e autentificar o usuário na página', () => {
    cy.login('jao@email.com', 'Qwe123');
  })
})
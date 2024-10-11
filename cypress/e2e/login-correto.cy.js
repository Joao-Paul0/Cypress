describe('Página de cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos login corretamente e autentificar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('jao@email.com');
    cy.get('[data-test="input-loginPassword"]').type('Qwe123');
    cy.get('[data-test="submit-button"]').click();
  })
})
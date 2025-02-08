describe('Aba mensagem', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

  it('Clicar na aba de mensagem, preencher os campo de E-mail e senha, e clicar em entrar', () => {
    cy.get('.header__message').click();
    cy.get('#email').type('chris@email.com');
    cy.get('#pass').type('Senha123');
    cy.get('[data-test="submit-button"]').click()
  })
})
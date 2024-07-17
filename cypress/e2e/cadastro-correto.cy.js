describe('Página de cadastro', () => {
  it('Preencher os campos de cadastro para um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('João Paulo');
    cy.get('[data-test="input-email"]').type('jao@email.com');
    cy.get('[data-test="input-password"]').type('Qwe123');
    cy.get('[data-test="input-confirm-password"]').type('Qwe123');
    cy.get('[data-test="submit-button"]').click();
  })
})
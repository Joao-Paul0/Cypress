describe('Página de cadastro', () => {
  it('Preencher os campos de cadastro para um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    // pega o elemento e o texto que está neste elemento.
    cy.contains('a', 'Cadastrar').click();
    // pega o elemento com o atributo nome.
    cy.get('input[name="nome"]').type('João Paulo');
    cy.get('input[name="email"]').type('jao@email.com');
    cy.get('input[name="password"]').type('Qwe123');
    cy.get('input[name="confirm_password"]').type('Qwe123');
    cy.contains('button', 'Cadastrar').click();
  })
})
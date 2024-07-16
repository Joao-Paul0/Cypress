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
});

describe('Visite a página de principal do AdoPet e clique no botão "Ver pets disponíveis para adoção”', () => {
  it('Ver pets disponíveis para adoção', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
});

describe('Visite a página de principal do AdoPet e teste os botões header', () => {
  it('Clicar nos botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('a[aria-label="Tela inicial"]').click();
    cy.get('a[aria-label="Ir para Mensagens"]').click();
  })
});

describe('Visite página de login do Adopet', () => {
  it('Deve carregar a página de login', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/login');
    cy.get('input[name="email"]').type('jao@email.com');
    cy.get('input[name="password"]').type('Qwe123');
    cy.contains('button', 'Entrar').click();
  })
})
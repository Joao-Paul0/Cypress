describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMzljY2NkNC0xOGYwLTQ1MDUtYmIzMy0yOGRjYTZkYzIzMDgiLCJhZG9wdGVyTmFtZSI6IkNocmlzIENvcm5lbGwiLCJpYXQiOjE3NDA4NTI0NzQsImV4cCI6MTc0MTExMTY3NH0.BnJhDn6RPUVeaCgVNZFKy4vsGRvt7mAN2t9iOa6ggZs`

  it('Nome do perfil do usuário', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/339cccd4-18f0-4505-bb33-28dca6dc2308',
      headers: { authorization }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).not.be.empty
      expect(res.body).to.have.property('perfil')
      expect(res.body.perfil.nome).to.be.equal('Chris Cornell')
    })
  })

  it('Consegue deletar todas as tarefas', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.contains('Mark all as complete').click()
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('not.have.text', 'Pay electric bill')
    cy.contains('Clear completed').click()
    cy.contains('Clear completed').should('not.exist')
  })

  it('Filtrar tarefas completas', () => {
    cy.visit('https://example.cypress.io/todo')
    cy.contains('Mark all as complete').click()
    cy.get('.todo-list li')
      .should('have.length', 2)
      .should('not.have.text', 'Pay electric bill')
    cy.contains('Clear completed').click()
    cy.contains('Clear completed').should('not.exist')

    cy.contains('Completed').click()
    cy.get('.todo-list li')
      .should('have.length', 0)
    cy.contains('Walk the dog').should('not.exist')
  })
})
describe('Api Adopet', () => {

  it('Mensagens', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/339cccd4-18f0-4505-bb33-28dca6dc2308',
      headers: Cypress.env()

    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  })
})
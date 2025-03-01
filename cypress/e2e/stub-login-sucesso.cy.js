describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMzljY2NkNC0xOGYwLTQ1MDUtYmIzMy0yOGRjYTZkYzIzMDgiLCJhZG9wdGVyTmFtZSI6IkNocmlzIENvcm5lbGwiLCJpYXQiOjE3NDA3OTUzNTgsImV4cCI6MTc0MTA1NDU1OH0.VxQnLBRHX5UJl4B5RM_IgmbmIh31b2xvIOs4qQRFv7E`

  it('Mensagens', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/339cccd4-18f0-4505-bb33-28dca6dc2308',
      headers: { authorization }

    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).is.not.empty
      expect(res.body).to.have.property('msg')
    })
  })
})
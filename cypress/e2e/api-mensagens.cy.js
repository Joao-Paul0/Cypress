describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzMzljY2NkNC0xOGYwLTQ1MDUtYmIzMy0yOGRjYTZkYzIzMDgiLCJhZG9wdGVyTmFtZSI6IkNocmlzIENvcm5lbGwiLCJpYXQiOjE3NDA0MzQzMTcsImV4cCI6MTc0MDY5MzUxN30.phCxb0ea_DUog0XWEcsu2nAhEgvCBi4YWDnguzVyAYY`

  it('Mensage da API', () => {
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
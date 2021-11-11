describe('Get empregados', () => {

   it('buscando api', () => {
        cy.request({
            method: 'GET', 
            url: 'http://localhost:8011/pessoas-ms/api/pessoas'
        }).then((res) => {
           expect(res.status).to.be.equal(200)  
        })
    })

   it('verificando se possui dados', () => {
        cy.request({
            method: 'GET', 
            url: 'http://localhost:8011/pessoas-ms/api/pessoas'
        }).then((res) => { 
            expect(res.body).is.not.empty 
        })
    })


    it('verificando se possui propriedade id', () => {
        cy.request({
            method: 'GET', 
            url: 'http://localhost:8011/pessoas-ms/api/pessoas'
        }).then((res) => { 
           expect(res.body[0]).to.have.property('id')
        })
    })

})

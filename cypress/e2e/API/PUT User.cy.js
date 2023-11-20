export function PUTUser(id) {
    describe('PUT User', () => {
        const bodyRequestPUT = {
            "name": "morpheus",
            "job": "zion resident"
        }

        cy.request({
            url: Cypress.env('URLREQRES') + 'users/' + id,
            method: 'PUT',
            body: bodyRequestPUT,
        }).as('PUTUser')
        
        cy.get('@PUTUser').then(res => {
            expect(res.status).to.equal(200)
            expect(res.body).to.exist
            expect(res.body).to.not.null
            expect(res.body).to.be.a('object')
            expect(res.body).to.have.all.keys('name','job','updatedAt')
        })
    })
}
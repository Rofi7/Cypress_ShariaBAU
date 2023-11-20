export function GETSingleUser(id) {
    describe('GET Single User', () => {
        cy.request({
            url: Cypress.env('URLREQRES') + 'users/' + id,
            method: 'GET',
        }).as('GETSingleUser')

        cy.get('@GETSingleUser').then(res => {
            expect(res.status).to.equal(200)
            expect(res.body).to.exist
            expect(res.body).to.not.null
            expect(res.body).to.be.a('object')
            expect(res.body).to.have.all.keys('data', 'support')
        })
    })
}
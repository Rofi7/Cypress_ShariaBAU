export function DELETEUser(id) {
    describe('DELETE User', () => {
        cy.request({
            url: Cypress.env('URLREQRES') + 'users/' + id,
            method: 'DELETE',
        }).as('DELETEUser')
        
        cy.get('@DELETEUser').then(res => {
            expect(res.status).to.equal(204)
            expect(res.body).to.exist
        })
    })
}
export function POSTLogin(bodyRequest) {
    describe('POST Login', () => {
        cy.request({
            url: Cypress.env('URLREQRES') + 'login',
            method: 'POST',
            body: bodyRequest,
        }).as('POSTLogin')
        
        cy.get('@POSTLogin').then(res => {
            expect(res.status).to.equal(200)
            expect(res.body).to.exist
            expect(res.body).to.not.null
            expect(res.body).to.be.a('object')
            expect(res.body).to.have.any.keys('token')
        })
    })
}
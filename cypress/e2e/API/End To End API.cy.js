/// <reference types="Cypress" />
import { POSTLogin } from './POST Login.cy'
import { GETSingleUser } from './GET Single User.cy'
import { PUTUser } from './PUT User.cy'
import { DELETEUser } from './DELETE User.cy'

describe('End To End API Testing', () => {

    it('Flow API', () => {
        cy.fixture('bodyRequest.json').then((data) => {
            const bodyRequest = {
                "email": data.email,
                "password": data.password
            }
            expect(data.email).to.eq('eve.holt@reqres.in')
            expect(data.password).to.eq('pistol')

            cy.log('dalam fixture ' + JSON.stringify(bodyRequest))

            // POST Register
            cy.request({
                url: Cypress.env('URLREQRES') + 'register',
                method: 'POST',
                body: bodyRequest,
            }).as('Register')

            cy.get('@Register').then(res => {
                expect(res.status).to.equal(200)
                expect(res.body).to.exist
                expect(res.body).to.not.null
                expect(res.body).to.be.a('object')
                expect(res.body).to.have.all.keys('id', 'token')

                const id = res.body.id

                // GET Single User
                GETSingleUser(id)

                // POST Login
                POSTLogin(bodyRequest)

                // PUT User
                PUTUser(id)

                // DELETE User
                DELETEUser(id)
            })
        })
    })
})
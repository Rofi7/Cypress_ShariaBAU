/// <reference types="Cypress" />

class Approval {

    buttonLoginApproval() {
        return cy.get(':nth-child(4) > .btn')
    }

    inputEmailUser() {
        return cy.get('[name="Email"]')
    }

    radioActive() {
        return cy.get('#active')
    }

    buttonProcess() {
        return cy.get('button[type="submit"]').contains('PROCESS')
    }

    buttonConfirm() {
        return cy.get('.confirm')
    }
}

export const approvalObject = new Approval() 
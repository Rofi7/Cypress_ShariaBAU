/// <reference types="Cypress" />

class Logout {

    buttonLogout() {
        return cy.get('[href="/auth/logout"]')
        .contains('Logout ')
    }

    buttonLogoutAdminCP() {
        return cy.get('[href="/auth/logout"]')
        .contains('Logout')
    }
}

export const logoutObject = new Logout()


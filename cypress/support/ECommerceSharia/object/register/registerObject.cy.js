/// <reference types="Cypress" />

class Register {

    visitDashboardPage() {
        return cy.OpenDashboardPage()
    }

    buttonRegisterHome() {
        return cy.get('.account-area > .btn-warning')
    }

    // Customer
    dropdownDaftarSebagai() {
        return cy.get('#Type')
    }

    inputNamaLengkap() {
        return cy.get('#Username');
    }

    inputAlamatEmail() {
        return cy.get('#Email');
    }

    inputNomorHp() {
        return cy.get('#PhoneNumber')
    }

    inputKataSandi() {
        return cy.get('#NewPassword')
    }

    inputKataSandiUlang() {
        return cy.get('#RetypePassword')
    }

    buttonDaftar() {
        return cy.get('[type="submit"]')
    }

    verifyRegister() {
        return cy.get('.error')
    }
}

export const registerObject = new Register()
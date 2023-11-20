/// <reference types="Cypress" />

class Login {

    buttonLoginHome(){
        return cy.get('.account-area > .btn-info')
    }

    inputEmail() {
        return cy.get('[name="Email"]')
    }

    inputPassword() {
        return cy.get('#Password')
    }

    checkboxIngatSaya() {
        return cy.get('[name="rememberme"]')
    }

    buttonLogin() {
        return cy.get('.btn.btn-primary.btn-block')
    }

    verifyLogin() {
        return cy.get('.error')
    }
}

export const loginObject = new Login()
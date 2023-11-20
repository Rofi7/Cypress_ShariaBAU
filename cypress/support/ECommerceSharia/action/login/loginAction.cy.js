/// <reference types="Cypress" />

import { loginObject } from "../../object/login/loginObject.cy"

class Login {

    clickLoginHome() {
        loginObject.buttonLoginHome()
            .click()
    }

    fillEmail(Email) {
        loginObject.inputEmail()
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name', 'Email')
            .type(Email)
    }

    fillPassword(Password) {
        loginObject.inputPassword()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'Password')
            .and('have.class','form-control')
            .and('have.attr', 'name', 'Password')
            .and('have.attr', 'type', 'password')
            .and('have.css','display','block')
            .type(Password)
    }

    checkIngatSaya() {
        loginObject.checkboxIngatSaya()
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name', 'rememberme')
            .check({ force: true })
            .should('be.checked')
    }

    clickLogin() {
        loginObject.buttonLogin()
            .should('exist')
            .and('be.visible')
            .click()
    }

    verifyLogin() {
        loginObject.verifyLogin()
            .should('exist')
            .and('be.visible')
    }

}

export const loginAction = new Login()
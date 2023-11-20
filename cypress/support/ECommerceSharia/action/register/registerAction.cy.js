/// <reference types="Cypress" />

import { registerObject } from "../../object/register/registerObject.cy"

class Register {

    clickRegisterHome() {
        registerObject.buttonRegisterHome()
            .click()
    }

    // Customer
    selectDaftarSebagai(daftarSebagai) {
        registerObject.dropdownDaftarSebagai()
            .should('exist')
            .and('have.id', 'Type')
            .select(daftarSebagai, { force: true })
    }

    fillNamaLengkap(namaLengkap) {
        registerObject.inputNamaLengkap()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'Username')
            .type(namaLengkap)
    }

    fillAlamatEmail(namaEmail) {
        registerObject.inputAlamatEmail()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'Email')
            .type(namaEmail)
    }

    fillNomorHp(NomorHp) {
        registerObject.inputNomorHp()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'PhoneNumber')
            .type(NomorHp)
    }

    fillKataSandi(KataSandi) {
        registerObject.inputKataSandi()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NewPassword')
            .type(KataSandi)
    }

    fillKataSandiUlang(KataSandiUlang) {
        registerObject.inputKataSandiUlang()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'RetypePassword')
            .type(KataSandiUlang)
    }

    clickDaftar() {
        registerObject.buttonDaftar()
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'type', 'submit')
            .click()
    }

    verifyRegister() {
        registerObject.verifyRegister()
            .should('exist')
    }

}

export const registerAction = new Register()
/// <reference types="Cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { registerAction } from "../../../../support/ECommerceSharia/action/register/registerAction.cy"

When('User click Register', () => {
    registerAction.clickRegisterHome()
})

When('User select Daftar Sebagai with {string}', (DaftarSebagai) => {
    registerAction.selectDaftarSebagai(DaftarSebagai)
})

When('User fill Nama Lengkap with {string}', (NamaLengkap) => {
    registerAction.fillNamaLengkap(NamaLengkap)
})

When('User fill Alamat Email with {string}', (AlamatEmail) => {
    registerAction.fillAlamatEmail(AlamatEmail)
})

When('User fill Nomor Handphone with {string}', (NomorHandphone) => {
    registerAction.fillNomorHp(NomorHandphone)
})

When('User fill Kata Sandi with {string}', (KataSandi) => {
    registerAction.fillKataSandi(KataSandi)
})

When('User fill Ulangi Kata Sandi with {string}', (KataSandi) => {
    registerAction.fillKataSandiUlang(KataSandi)
})

When('User click Daftar', () => {
    registerAction.clickDaftar()
})

Then('User verify Register', () => {
    var check, statusSuccess, statusFailed
    check = registerAction.verifyRegister()
    statusSuccess = 'Register Sukses'
    statusFailed = 'Register Failed'

    if (check) {
        console.log(statusFailed)
        cy.screenshot(statusFailed)
    } else {
        console.log(statusSuccess)
        cy.screenshot(statusSuccess)
    }
})

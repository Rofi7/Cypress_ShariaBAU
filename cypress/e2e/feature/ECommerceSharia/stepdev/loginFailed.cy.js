/// <reference types="Cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { loginAction } from "../../../../support/ECommerceSharia/action/login/loginAction.cy"

When('User click Masuk', () => {
    loginAction.clickLoginHome()
})

When('User fill Email with {string}', (Email) => {
    loginAction.fillEmail(Email)
})

When('User fill Password with {string}', (Password) => {
    loginAction.fillPassword(Password)
})

When('User check Ingat saya', () => {
    loginAction.checkIngatSaya()
})

When('User click login', () => {
    loginAction.clickLogin()
})

Then('User verify login', () => {
    var check = loginAction.verifyLogin()

    if (check) {
        console.log('login Failed')
    } else {
        console.log('login Success')
    }
})
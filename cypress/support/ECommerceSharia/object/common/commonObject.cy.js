/// <reference types="Cypress" />

class Common {

    // ---------------------- Visit URL ------------------------

    visitDashboard() {
        return cy.OpenDashboard()
    }

    // ---------------------- Menu ------------------------

    menuProduk() {
        return cy.get('[href="#"]')
            .contains('Produk')
    }

    subMenuMyHajat() {
        return cy.get('[href="/product/myhajat"]')
            .contains('My Hajat')
    }

    subMenuMyCars() {
        return cy.get('[href="/product/mycars"]')
            .contains('My CarS')
    }

    // ---------------------- AdminCP ------------------------

    tabAdminSyariah() {
        return cy.get('.dropdown-toggle.nav-link.dropdown-user-link')
    }

    // ---------------------- E-Commerce ------------------------

    tabUser() {
        return cy.get('.login-avatar')
    }

    // ---------------------- Intercept ------------------------

    interceptCabangMyCars() {
        cy.intercept('GET', 'http://sit-syariah-web.bfi.co.id//address/survey?&regId=05')
            .as('getResponseMyCars')
    }
}

export const commonObject = new Common()
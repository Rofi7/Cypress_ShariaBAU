/// <reference types="Cypress" />

import { commonObject } from "../../object/common/commonObject.cy"
import "cypress-real-events"

class Common {

    // ---------------------- Visit URL ------------------------

    visitingDashboard() {
        commonObject.visitDashboard()
    }

    // ---------------------- Menu ------------------------

    clickMenuProduk() {
        commonObject.menuProduk()
            .realHover()
    }

    clickSubMenuMyHajat() {
        commonObject.subMenuMyHajat()
            .click()
    }

    clickSubMenuMyCars() {
        commonObject.subMenuMyCars()
            .click()
    }

    // ---------------------- AdminCP ------------------------

    clickTabAdminSyariah() {
        commonObject.tabAdminSyariah()
            .click()
    }

    // ---------------------- E-Commerce ------------------------

    clickTabUser() {
        commonObject.tabUser()
            .realHover()
    }

    // ---------------------- E-Commerce ------------------------

    interceptCabangMyCars() {
        commonObject.interceptCabangMyCars()
        cy.wait('@getResponseMyCars').then(interception => {
            const { response } = interception

            expect(response.statusCode).to.equal(200)
            expect(response.body).not.null

            cy.fixture('cabangMyCars.json').then((myCars) => {
                for (let i = 0; i < response.body.length; i++) {
                    cy.log('Data = ' + response.body[i].Text)
                    expect(response.body[i].Value).to.equal(myCars[i].Value)
                    expect(response.body[i].Text).to.equal(myCars[i].Text)
                }
            })
            cy.writeFile('cypress/fixtures/cabangMyCars.json', response.body)
        })
    }
}

export const commonAction = new Common()
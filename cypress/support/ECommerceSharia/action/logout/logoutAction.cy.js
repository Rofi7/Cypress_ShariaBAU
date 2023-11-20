/// <reference types="Cypress" />

import { logoutObject } from "../../object/logout/logoutObject.cy"

class Logout {

    clickLogout() {
        logoutObject.buttonLogout()
            .click()
    }

    clickLogoutAdminCP() {
        logoutObject.buttonLogoutAdminCP()
            .click()
    }
}

export const logoutAction = new Logout()


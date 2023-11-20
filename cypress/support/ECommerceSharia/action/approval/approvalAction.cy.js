/// <reference types="Cypress" />

import { approvalObject } from "../../object/approval/approvalObject.cy"

class Approval {

    clickLoginApproval() {
        approvalObject.buttonLoginApproval()
    }

    fillEmailUser(Email) {
        approvalObject.inputEmailUser()
            .should('exist')
            .and('be.visible')
            .and('have.attr', 'name', 'Email')
            .type(Email)
    }

    selectActive() {
        approvalObject.radioActive()
            .should('be.visible')
            .and('have.id', 'active')
            .check()
    }

    clickProcess() {
        approvalObject.buttonProcess()
            .click()
    }

    clickConfirm() {
        approvalObject.buttonConfirm()
            .click()
    }

}

export const approvalAction = new Approval() 
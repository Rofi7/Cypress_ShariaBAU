/// <reference types="Cypress" />

class MyHajat {

    // --------------------- Data pengajuan ---------------------

    // TANGERANG SYARIAH
    dropdownCabangSurvey() {
        return cy.get('#BranchID')
    }

    // Jasa
    dropdownJenisPengadaan() {
        return cy.get('#ProcurementType')
    }

    // test my hajat no ins no adm
    dropdownDetailPengadaan() {
        return cy.get('#ProcurementName')
    }

    inputDeskripsi() {
        return cy.get('#ProcurementDescription')
    }

    // 150000000
    inputHargaJasa() {
        return cy.get('#HargaBeli')
    }

    // 60000000
    inputUangMuka() {
        return cy.get('#DownPayment')
    }

    // 36 Bulan
    dropdownLamaAngsuran() {
        return cy.get('#Tenor')
    }

    buttonAjukan() {
        return cy.get('[href="#next"');
    }

    // --------------------- Rincian Biaya ---------------------    

    // TOYOTA
    dropdownMerkKendaraan() {
        return cy.get('#MerkKendaraan')
    }

    // TOYOTA NEW AVANZA
    dropdownJenisKendaraan() {
        return cy.get('#JenisKendaraan')
    }

    // TOYOTA NEW AVANZA VVTI E 1.3 MT
    dropdownModelKendaraan() {
        return cy.get('#ModelKendaraan')
    }

    // 2010
    dropdownTahunKendaraan() {
        return cy.get('#TahunKendaraan')
    }

    // 553341
    inputNomorBPKB() {
        return cy.get('#BPKBNo')
    }

    // Parent
    dropdownStatusKepemilikan() {
        return cy.get('#StatusKepemilikan')
    }

    inputNamaPemilikBPKB() {
        return cy.get('#BPKBName')
    }

    checkData() {
        return cy.get('#Agree')
    }

    buttonSubmit() {
        return cy.get('[href="#finish"]');
    }

    buttonConfirm() {
        return cy.get('.confirm')
    }
}

export const myHajatObject = new MyHajat()
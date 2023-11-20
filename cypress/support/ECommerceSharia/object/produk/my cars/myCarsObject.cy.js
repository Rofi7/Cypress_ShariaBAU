/// <reference types="Cypress" />

class MyCars {

    // --------------------- Data pengajuan Mobil ---------------------

    // TANGERANG SYARIAH
    dropdownCabangSurvey() {
        return cy.get('#BranchID')
    }

    // Barang
    dropdownJenisPengadaan() {
        return cy.get('#ProcurementType')
    }

    // test my cars upping 1
    dropdownDetailPengadaan() {
        return cy.get('#ProcurementName')
    }

    inputDeskripsi() {
        return cy.get('#emailAddress5')
    }

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
        return cy.get('[href="#next"]');
    }

    // --------------------- Rincian Biaya ---------------------

    buttonSubmit() {
        return cy.get('[href="#finish"]');
    }

    buttonConfirm(){
        return cy.get('.confirm')
    }
}

export const myCarsObject = new MyCars()
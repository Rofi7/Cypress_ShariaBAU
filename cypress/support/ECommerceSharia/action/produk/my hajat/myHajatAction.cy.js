/// <reference types="Cypress" />

import { myHajatObject } from "../../../object/produk/my hajat/myHajatObject.cy"

class MyHajat {


    // --------------------- Data pengajuan Mobil ---------------------

    // TANGERANG SYARIAH   
    selectCabangSurvey(CabangSurvey) {
        myHajatObject.dropdownCabangSurvey()
            .should('exist')
            .and('have.id', 'BranchID')
            .realHover()
            .select(CabangSurvey, { force: true })
    }

    // Jasa
    selectJenisPengadaan(JenisPengadaan) {
        myHajatObject.dropdownJenisPengadaan()
            .should('exist')
            .and('have.id', 'ProcurementType')
            .select(JenisPengadaan, { force: true })
    }

    // test my hajat no ins no adm
    selectDetailPengadaan(DetailPengadaan) {
        myHajatObject.dropdownDetailPengadaan()
            .should('exist')
            .and('have.id', 'ProcurementName')
            .select(DetailPengadaan, { force: true })
    }

    fillDeskripsi(Deskripsi) {
        myHajatObject.inputDeskripsi()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'ProcurementDescription')
            .type(Deskripsi)
    }

    // 150000000
    fillHargaJasa(HargaJasa) {
        myHajatObject.inputHargaJasa()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'HargaBeli')
            .type(HargaJasa)
    }

    // 60000000
    fillUangMuka(UangMuka) {
        myHajatObject.inputUangMuka()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'DownPayment')
            .type(UangMuka)
    }

    // 36 Bulan
    selectLamaAngsuran(LamaAngsuran) {
        myHajatObject.dropdownLamaAngsuran()
            .should('exist')
            .and('have.id', 'Tenor')
            .select(LamaAngsuran, { force: true })
    }

    clickAjukan() {
        myHajatObject.buttonAjukan()
            .click({ force: true })
    }

    // --------------------- Rincian Biaya ---------------------    

    // TOYOTA
    selectMerkKendaraan(MerkKendaraan) {
        myHajatObject.dropdownMerkKendaraan()
            .should('exist')
            .and('have.id', 'MerkKendaraan')
            .select(MerkKendaraan, { force: true })
    }

    // TOYOTA NEW AVANZA
    selectJenisKendaraan(JenisKendaraan) {
        myHajatObject.dropdownJenisKendaraan()
            .should('exist')
            .and('have.id', 'JenisKendaraan')
            .select(JenisKendaraan, { force: true })
    }

    // TOYOTA NEW AVANZA VVTI E 1.3 MT
    selectModelKendaraan(ModelKendaraan) {
        myHajatObject.dropdownModelKendaraan()
            .should('exist')
            .and('have.id', 'ModelKendaraan')
            .select(ModelKendaraan, { force: true })
    }

    // 2010
    selectTahunKendaraan(TahunKendaraan) {
        myHajatObject.dropdownTahunKendaraan()
            .should('exist')
            .and('have.id', 'TahunKendaraan')
            .select(TahunKendaraan, { force: true })
    }

    // 553341
    fillInputNomorBPKB(NomorBPKB) {
        myHajatObject.inputNomorBPKB()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'BPKBNo')
            .type(NomorBPKB)
    }

    // Parent
    selectStatusKepemilikan(StatusKepemilikan) {
        myHajatObject.dropdownStatusKepemilikan()
            .should('exist')
            .and('have.id', 'StatusKepemilikan')
            .select(StatusKepemilikan, { force: true })
    }

    fillNamaPemilikBPKB(NamaPemilikBPKB) {
        myHajatObject.inputNamaPemilikBPKB()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'BPKBName')
            .type(NamaPemilikBPKB)
    }

    checkData() {
        myHajatObject.checkData()
            .check({ force: true })
    }

    clickSubmit() {
        myHajatObject.buttonSubmit()
            .click()
    }

    clickConfirm() {
        myHajatObject.buttonConfirm()
            .click()
    }

}

export const myHajatAction = new MyHajat()
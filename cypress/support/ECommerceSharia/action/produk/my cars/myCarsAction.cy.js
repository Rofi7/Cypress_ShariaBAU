/// <reference types="Cypress" />

import { myCarsObject } from "../../../object/produk/my cars/myCarsObject.cy"

class MyCars {

    // --------------------- Data pengajuan Mobil ---------------------

    // TANGERANG SYARIAH   
    selectCabangSurvey(CabangSurvey) {
        myCarsObject.dropdownCabangSurvey()
            .should('exist')
            .and('have.id', 'BranchID')
            .realHover()
            .select(CabangSurvey, { force: true })
    }

    // Barang  
    selectJenisPengadaan(JenisPengadaan) {
        myCarsObject.dropdownJenisPengadaan()
            .should('exist')
            .and('have.id', 'ProcurementType')
            .select(JenisPengadaan, { force: true })
    }

    // test my cars upping 1 
    selectDetailPengadaan(DetailPengadaan) {
        myCarsObject.dropdownDetailPengadaan()
            .should('exist')
            .and('have.id', 'ProcurementName')
            .select(DetailPengadaan, { force: true })
    }

    fillDeskripsi(Deskripsi) {
        myCarsObject.inputDeskripsi()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'emailAddress5')
            .type(Deskripsi)
    }

    // TOYOTA
    selectMerkKendaraan(MerkKendaraan) {
        myCarsObject.dropdownMerkKendaraan()
            .should('exist')
            .and('have.id', 'MerkKendaraan')
            .select(MerkKendaraan, { force: true })
    }

    // TOYOTA NEW AVANZA
    selectJenisKendaraan(JenisKendaraan) {
        myCarsObject.dropdownJenisKendaraan()
            .should('exist')
            .and('have.id', 'JenisKendaraan')
            .select(JenisKendaraan, { force: true })
    }

    // TOYOTA NEW AVANZA VVTI E 1.3 MT
    selectModelKendaraan(ModelKendaraan) {
        myCarsObject.dropdownModelKendaraan()
            .should('exist')
            .and('have.id', 'ModelKendaraan')
            .select(ModelKendaraan, { force: true })
    }

    // 2010
    selectTahunKendaraan(TahunKendaraan) {
        myCarsObject.dropdownTahunKendaraan()
            .should('exist')
            .and('have.id', 'TahunKendaraan')
            .select(TahunKendaraan, { force: true })
    }

    // 150000000
    fillHargaJasa(HargaJasa) {
        myCarsObject.inputHargaJasa()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'HargaBeli')
            .type(HargaJasa)
    }

    // 60000000
    fillUangMuka(UangMuka) {
        myCarsObject.inputUangMuka()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'DownPayment')
            .type(UangMuka)
    }

    // 36 Bulan
    selectLamaAngsuran(LamaAngsuran) {
        myCarsObject.dropdownLamaAngsuran()
            .should('exist')
            .and('have.id', 'Tenor')
            .select(LamaAngsuran, { force: true })
    }

    clickAjukan() {
        myCarsObject.buttonAjukan()
            .click()
    }

    // --------------------- Rincian Biaya ---------------------

    clickSubmit() {
        myCarsObject.buttonSubmit()
            .click()
    }

    clickConfirm() {
        myCarsObject.buttonConfirm()
            .click()
    }
}

export const myCarsAction = new MyCars()
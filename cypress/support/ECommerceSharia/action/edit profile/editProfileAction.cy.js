/// <reference types="Cypress" />

import { editProfileObject } from "../../object/edit profile/editProfileObject.cy"

class EditProfile {

    // -------------------------- Menu Edit Profile -----------------------------

    clickEditProfile() {
        editProfileObject.menuEditProfile()
            .click()
    }

    // -------------------------- Data Pribadi -----------------------------

    // start => 3306140308900012
    fillNoKTP(NoKTP) {
        editProfileObject.inputNoKTP()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoKTP')
            .realHover()
            .type(NoKTP)
    }

    // Optional
    fillNamaKTP(NamaKTP) {
        editProfileObject.inputNamaKTP()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NamaKTP')
            .type(NamaKTP)
    }

    // Optional
    fillNomorHandphone(NomorHandphone) {
        editProfileObject.inputNomorHandphone()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoHandPhone')
            .type(NomorHandphone)
    }

    fillNomorPasspor(NomorPasspor) {
        editProfileObject.inputNomorPasspor()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoPasspor')
            .type(NomorPasspor, { force: true })
    }

    fillTempatLahir(TempatLahir) {
        editProfileObject.inputTempatLahir()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'TempatLahir')
            .type(TempatLahir)
    }

    // Format => 03/08/1990
    fillTanggalLahir(TanggalLahir) {
        editProfileObject.inputTanggalLahir()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'TanggalLahir')
            .type(TanggalLahir, { force: true })
    }

    // Laki-Laki
    selectJenisKelamin(JenisKelamin) {
        editProfileObject.dropdownJenisKelamin()
            .should('exist')
            .and('have.id', 'JenisKelamin')
            .select(JenisKelamin, { force: true })
    }

    // Diploma 3
    selectPendidikan(Pendidikan) {
        editProfileObject.dropdownPendidikan()
            .should('exist')
            .and('have.id', 'Pendidikan')
            .select(Pendidikan, { force: true })
    }

    // Kost
    selectStatusKepemilikanRumah(StatusKepemilikanRumah) {
        editProfileObject.dropdownStatusKepemilikanRumah()
            .should('exist')
            .and('have.id', 'StatusKepemilikanRumah')
            .select(StatusKepemilikanRumah, { force: true })
    }

    fillTinggalSejakTahun(TinggalSejakTahun) {
        editProfileObject.inputTinggalSejakTahun()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'LamaTinggal')
            .type(TinggalSejakTahun, { force: true })
    }

    fillKodeArea(KodeArea) {
        editProfileObject.inputKodeArea()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoAreaTelpRumah')
            .type(KodeArea)
    }

    fillTeleponRumah(TeleponRumah) {
        editProfileObject.inputTeleponRumah()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoTelpRumah')
            .type(TeleponRumah)
    }

    // -------------------------- Keluarga -----------------------------

    // Single
    selectMaritalStatus(MaritalStatus) {
        editProfileObject.dropdownMaritalStatus()
            .should('exist')
            .and('have.id', 'MaritalStatus')
            .select(MaritalStatus, { force: true })
    }

    fillNamaIbuKandung(NamaIbuKandung) {
        editProfileObject.inputNamaIbuKandung()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NamaIbuKandung')
            .type(NamaIbuKandung)
    }

    fillNomorKontakDarurat(NomorKontakDarurat) {
        editProfileObject.inputNomorKontakDarurat()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'EmergencyCallNumber')
            .type(NomorKontakDarurat)
    }

    fillNamaKontakDarurat(NamaKontakDarurat) {
        editProfileObject.inputNamaKontakDarurat()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'EmergencyCallName')
            .type(NamaKontakDarurat, { force: true })
    }

    // Parent
    selectHubunganKontakDarurat(HubunganKontakDarurat) {
        editProfileObject.dropdownHubunganKontakDarurat()
            .should('exist')
            .and('have.id', 'EmergencyContact')
            .select(HubunganKontakDarurat, { force: true })
    }

    // -------------------------- Alamat -----------------------------

    fillAlamatTinggal(AlamatTinggal) {
        editProfileObject.inputAlamatTinggal()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'AlamatResidence')
            .type(AlamatTinggal)
    }

    // KOTA TANGERANG SELATAN
    selectKotaTinggal(KotaTinggal) {
        editProfileObject.dropdownKotaTinggal()
            .should('exist')
            .and('have.id', 'KotaResidence')
            .select(KotaTinggal, { force: true })
    }

    // SERPONG
    selectKecamatanTinggal(KecamatanTinggal) {
        editProfileObject.dropdownKecamatanTinggal()
            .should('exist')
            .and('have.id', 'KecamatanResidence')
            .select(KecamatanTinggal, { force: true })
    }

    // LENGKONG GUDANG
    selectKelurahanTinggal(KelurahanTinggal) {
        editProfileObject.dropdownKelurahanTinggal()
            .should('exist')
            .and('have.id', 'KelurahanResidence')
            .select(KelurahanTinggal, { force: true })
    }

    // 15321
    selectKodePosTinggal(KodePosTinggal) {
        editProfileObject.dropdownKodePosTinggal()
            .should('exist')
            .and('have.id', 'KodePosResidence')
            .select(KodePosTinggal, { force: true })
    }

    fillRtTinggal(RtTinggal) {
        editProfileObject.inputRtTinggal()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'RTResidence')
            .type(RtTinggal, { force: true })
    }

    fillRwTinggal(RwTinggal) {
        editProfileObject.inputRwTinggal()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'RWResidence')
            .type(RwTinggal, { force: true })
    }

    checkAlamatKTPSama() {
        editProfileObject.checkAlamatKTPSama()
            .should('exist')
            .and('have.id', 'isAlamatKTP')
            .check({ force: true })
    }

    // -------------------------- Pekerjaan -----------------------------

    // WIRASWASTA
    selectJenisPekerjaan(JenisPekerjaan) {
        editProfileObject.dropdownJenisPekerjaan()
            .should('exist')
            .and('have.id', 'JenisPekerjaan')
            .select(JenisPekerjaan, { force: true })
    }

    fillJabatan(Jabatan) {
        editProfileObject.inputJabatan()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'Jabatan')
            .type(Jabatan, { force: true })
    }

    // JASA
    selectSektorEkonomi(SektorEkonomi) {
        editProfileObject.dropdownSektorEkonomi()
            .should('exist')
            .and('have.id', 'EkonomiSektor')
            .select(SektorEkonomi, { force: true })
    }

    // CATERING
    selectJenisIndustri(JenisIndustri) {
        editProfileObject.dropdownJenisIndustri()
            .should('exist')
            .and('have.id', 'IndustriType')
            .select(JenisIndustri, { force: true })
    }

    fillNamaPerusahaan(NamaPerusahaan) {
        editProfileObject.inputNamaPerusahaan()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NamaPerusahaan')
            .type(NamaPerusahaan, { force: true })
    }

    fillAlamatPerusahaan(AlamatPerusahaan) {
        editProfileObject.inputAlamatPerusahaan()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'AlamatPerusahaan')
            .type(AlamatPerusahaan, { force: true })
    }

    fillKodeNomorTelponPerusahaan(KodeNomorTelponPerusahaan) {
        editProfileObject.inputKodeNomorTelponPerusahaan()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NoTeleponPerusahaan')
            .type(KodeNomorTelponPerusahaan, { force: true })
    }

    fillBerdiriSejak(BerdiriSejak) {
        editProfileObject.inputBerdiriSejak()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'LamaKerja')
            .type(BerdiriSejak, { force: true })
    }

    fillPendapatan(Pendapatan) {
        editProfileObject.inputPendapatan()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'PendapatanGajiPerbulan')
            .type(Pendapatan)
    }

    // 363104621003000
    fillNPWP(NPWP) {
        editProfileObject.inputNPWP()
            .should('exist')
            .and('be.visible')
            .and('have.id', 'NPWP')
            .type(NPWP)
    }

    clickSimpan() {
        editProfileObject.buttonSimpan()
            .click()
    }

    clickConfirm() {
        editProfileObject.buttonConfirm()
            .click()
    }

}

export const editProfileAction = new EditProfile()
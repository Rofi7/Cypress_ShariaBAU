/// <reference types="Cypress" />

class EditProfile {

    // -------------------------- Menu Edit Profile -----------------------------

    menuEditProfile() {
        return cy.get('a[href="/account/profile"]').contains('Edit Profile ')
    }

    // -------------------------- Data Pribadi -----------------------------

    // start => 3306140308900012
    inputNoKTP() {
        return cy.get('#NoKTP')
    }

    // Optional
    inputNamaKTP() {
        return cy.get('#NamaKTP')
    }

    // Optional
    inputNomorHandphone() {
        return cy.get('#NoHandPhone')
    }

    inputNomorPasspor() {
        return cy.get('#NoPasspor')
    }

    inputTempatLahir() {
        return cy.get('#TempatLahir')
    }

    // Format => 03/08/1990
    inputTanggalLahir() {
        return cy.get('#TanggalLahir')
    }

    // Laki-Laki
    dropdownJenisKelamin() {
        return cy.get('#JenisKelamin')
    }

    // Diploma 3
    dropdownPendidikan() {
        return cy.get('#Pendidikan')
    }

    // Kost
    dropdownStatusKepemilikanRumah() {
        return cy.get('#StatusKepemilikanRumah')
    }

    inputTinggalSejakTahun() {
        return cy.get('#LamaTinggal')
    }

    inputKodeArea() {
        return cy.get('#NoAreaTelpRumah')
    }

    inputTeleponRumah() {
        return cy.get('#NoTelpRumah')
    }

    // -------------------------- Keluarga -----------------------------

    // Single
    dropdownMaritalStatus() {
        return cy.get('#MaritalStatus')
    }

    inputNamaIbuKandung() {
        return cy.get('#NamaIbuKandung')
    }

    inputNomorKontakDarurat() {
        return cy.get('#EmergencyCallNumber')
    }

    inputNamaKontakDarurat() {
        return cy.get('#EmergencyCallName')
    }

    // Parent
    dropdownHubunganKontakDarurat() {
        return cy.get('#EmergencyContact')
    }

    // -------------------------- Alamat -----------------------------

    inputAlamatTinggal() {
        return cy.get('#AlamatResidence')
    }

    // KOTA TANGERANG SELATAN
    dropdownKotaTinggal() {
        return cy.get('#KotaResidence')
    }

    // SERPONG
    dropdownKecamatanTinggal() {
        return cy.get('#KecamatanResidence')
    }

    // LENGKONG GUDANG
    dropdownKelurahanTinggal() {
        return cy.get('#KelurahanResidence')
    }

    // 15321
    dropdownKodePosTinggal() {
        return cy.get('#KodePosResidence')
    }

    inputRtTinggal() {
        return cy.get('#RTResidence')
    }

    inputRwTinggal() {
        return cy.get('#RWResidence')
    }

    checkAlamatKTPSama() {
        return cy.get('#isAlamatKTP')
    }

    // -------------------------- Pekerjaan -----------------------------

    // WIRASWASTA
    dropdownJenisPekerjaan() {
        return cy.get('#JenisPekerjaan')
    }

    inputJabatan() {
        return cy.get('#Jabatan')
    }

    // JASA
    dropdownSektorEkonomi() {
        return cy.get('#EkonomiSektor')
    }

    // CATERING
    dropdownJenisIndustri() {
        return cy.get('#IndustriType')
    }

    inputNamaPerusahaan() {
        return cy.get('#NamaPerusahaan')
    }

    inputAlamatPerusahaan() {
        return cy.get('#AlamatPerusahaan')
    }

    inputKodeNomorTelponPerusahaan() {
        return cy.get('#NoTeleponPerusahaan')
    }

    inputBerdiriSejak() {
        return cy.get('#LamaKerja')
    }

    inputPendapatan() {
        return cy.get('#PendapatanGajiPerbulan')
    }

    // 363104621003000
    inputNPWP() {
        return cy.get('#NPWP')
    }

    buttonSimpan() {
        return cy.get('[type="submit"]')
    }

    buttonConfirm() {
        return cy.get('.confirm')
    }

}

export const editProfileObject = new EditProfile()
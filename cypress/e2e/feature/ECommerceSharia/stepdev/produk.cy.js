/// <reference types="Cypress" />
const { Then, When } = require("@badeball/cypress-cucumber-preprocessor")
const { registerAction } = require("../../../../support/ECommerceSharia/action/register/registerAction.cy")
const { approvalAction } = require("../../../../support/ECommerceSharia/action/approval/approvalAction.cy")
const { loginAction } = require("../../../../support/ECommerceSharia/action/login/loginAction.cy")
const { commonAction } = require("../../../../support/ECommerceSharia/action/common/commonAction.cy")
const { logoutAction } = require("../../../../support/ECommerceSharia/action/logout/logoutAction.cy")
const { editProfileAction } = require("../../../../support/ECommerceSharia/action/edit profile/editProfileAction.cy")
const { myCarsAction } = require("../../../../support/ECommerceSharia/action/produk/my cars/myCarsAction.cy")
const { myHajatAction } = require("../../../../support/ECommerceSharia/action/produk/my hajat/myHajatAction.cy")

// Register
When('User register as a customer', () => {
    registerAction.clickRegisterHome()
    cy.fixture('register.json').then((register) => {
        registerAction.selectDaftarSebagai(register.daftarSebagai)
        registerAction.fillNamaLengkap(register.namaLengkap)
        registerAction.fillAlamatEmail(register.alamatEmail)
        registerAction.fillNomorHp(register.nomorHandphone)
        registerAction.fillKataSandi(register.kataSandi)
        registerAction.fillKataSandiUlang(register.kataSandi)
    })
    registerAction.clickDaftar()
    cy.screenshot('Register Sukses')
})

// Approval
When('Admin approve new email register', () => {
    loginAction.clickLoginHome()
    loginAction.fillEmail(Cypress.env('EMAILADMINCP'))
    loginAction.fillPassword(Cypress.env('PASSWORDADMINCP'))
    loginAction.checkIngatSaya()
    loginAction.clickLogin()
    cy.fixture('register.json').then((register) => {
        approvalAction.fillEmailUser(register.alamatEmail)
    })
    approvalAction.selectActive()
    approvalAction.clickProcess()
    approvalAction.clickConfirm()
    commonAction.clickTabAdminSyariah()
    logoutAction.clickLogoutAdminCP()
    cy.screenshot('Approval Sukses')
})

// Login
When('User Login as a customer', () => {
    loginAction.clickLoginHome()
    cy.fixture('register.json').then((register) => {
        loginAction.fillEmail(register.alamatEmail)
        loginAction.fillPassword(register.kataSandi)
    })
    loginAction.checkIngatSaya()
    loginAction.clickLogin()
    cy.screenshot('Login Sukses')
})

// Edit Profile
When('User edit profile', () => {
    commonAction.clickTabUser()
    cy.wait(2000)
    editProfileAction.clickEditProfile()

    // -------------------------- Data Pribadi -----------------------------

    cy.fixture('editProfile.json').then((editProfile) => {
        editProfileAction.fillNoKTP(editProfile.NoKTP)

        // Optional
        // editProfileAction.fillNamaKTP(NamaKTP)
        // editProfileAction.fillNomorHandphone(NomorHandphone)

        editProfileAction.fillNomorPasspor(editProfile.NomorPasspor)
        editProfileAction.fillTempatLahir(editProfile.TempatLahir)
        editProfileAction.fillTanggalLahir(editProfile.TanggalLahir)
        editProfileAction.selectJenisKelamin(editProfile.JenisKelamin)
        editProfileAction.selectPendidikan(editProfile.Pendidikan)
        editProfileAction.selectStatusKepemilikanRumah(editProfile.StatusKepemilikanRumah)
        editProfileAction.fillTinggalSejakTahun(editProfile.TinggalSejakTahun)
        editProfileAction.fillKodeArea(editProfile.KodeArea)
        editProfileAction.fillTeleponRumah(editProfile.TeleponRumah)

        // -------------------------- Keluarga -----------------------------

        editProfileAction.selectMaritalStatus(editProfile.MaritalStatus)
        editProfileAction.fillNamaIbuKandung(editProfile.NamaIbuKandung)
        editProfileAction.fillNomorKontakDarurat(editProfile.NomorKontakDarurat)
        editProfileAction.fillNamaKontakDarurat(editProfile.NamaKontakDarurat)
        editProfileAction.selectHubunganKontakDarurat(editProfile.HubunganKontakDarurat)

        // -------------------------- Alamat -----------------------------

        editProfileAction.fillAlamatTinggal(editProfile.AlamatTinggal)
        editProfileAction.selectKotaTinggal(editProfile.KotaTinggal)
        editProfileAction.selectKecamatanTinggal(editProfile.KecamatanTinggal)
        editProfileAction.selectKelurahanTinggal(editProfile.KelurahanTinggal)
        editProfileAction.selectKodePosTinggal(editProfile.KodePosTinggal)
        editProfileAction.fillRtTinggal(editProfile.RtTinggal)
        editProfileAction.fillRwTinggal(editProfile.RwTinggal)
        editProfileAction.checkAlamatKTPSama()

        // -------------------------- Pekerjaan -----------------------------

        editProfileAction.selectJenisPekerjaan(editProfile.JenisPekerjaan)
        editProfileAction.fillJabatan(editProfile.Jabatan)
        editProfileAction.selectSektorEkonomi(editProfile.SektorEkonomi)
        editProfileAction.selectJenisIndustri(editProfile.JenisIndustri)
        editProfileAction.fillNamaPerusahaan(editProfile.NamaPerusahaan)
        editProfileAction.fillAlamatPerusahaan(editProfile.AlamatPerusahaan)
        editProfileAction.fillKodeNomorTelponPerusahaan(editProfile.KodeNomorTelponPerusahaan)
        editProfileAction.fillBerdiriSejak(editProfile.BerdiriSejak)
        editProfileAction.fillPendapatan(editProfile.Pendapatan)
        editProfileAction.fillNPWP(editProfile.NPWP)
    })

    editProfileAction.clickSimpan()
    editProfileAction.clickConfirm()
    cy.screenshot('Edit Profile Sukses')
})

// My Cars
When('User pengajuan produk my cars', () => {
    commonAction.clickMenuProduk()
    commonAction.clickSubMenuMyCars()
    // commonAction.interceptCabangMyCars()

    cy.fixture('myCars.json').then((myCars) => {
        myCarsAction.selectCabangSurvey(myCars.CabangSurvey)
        myCarsAction.selectJenisPengadaan(myCars.JenisPengadaan)
        myCarsAction.selectDetailPengadaan(myCars.DetailPengadaan)
        myCarsAction.fillDeskripsi(myCars.Deskripsi)
        myCarsAction.selectMerkKendaraan(myCars.MerkKendaraan)
        myCarsAction.selectJenisKendaraan(myCars.JenisKendaraan)
        myCarsAction.selectModelKendaraan(myCars.ModelKendaraan)
        myCarsAction.selectTahunKendaraan(myCars.TahunKendaraan)
        myCarsAction.fillHargaJasa(myCars.HargaJasa)
        myCarsAction.fillUangMuka(myCars.UangMuka)
        myCarsAction.selectLamaAngsuran(myCars.LamaAngsuran)
    })
    cy.wait(2000)
    myCarsAction.clickAjukan()
    myCarsAction.clickAjukan()
    myCarsAction.clickSubmit()
    cy.wait(2000)
    myCarsAction.clickConfirm()
    cy.screenshot('Pengajuan Produk My Cars Sukses')
})

// My Hajat
When('User pengajuan produk my hajat', () => {
    commonAction.clickMenuProduk()
    commonAction.clickSubMenuMyHajat()

    cy.fixture('myHajat.json').then((myHajat) => {
        myHajatAction.selectCabangSurvey(myHajat.CabangSurvey)
        myHajatAction.selectJenisPengadaan(myHajat.JenisPengadaan)
        myHajatAction.selectDetailPengadaan(myHajat.DetailPengadaan)
        myHajatAction.fillDeskripsi(myHajat.Deskripsi)
        myHajatAction.fillHargaJasa(myHajat.HargaJasa)
        myHajatAction.fillUangMuka(myHajat.UangMuka)
        myHajatAction.selectLamaAngsuran(myHajat.LamaAngsuran)
        cy.wait(2000)
        myHajatAction.clickAjukan()
        myHajatAction.selectMerkKendaraan(myHajat.MerkKendaraan)
        myHajatAction.selectJenisKendaraan(myHajat.JenisKendaraan)
        myHajatAction.selectModelKendaraan(myHajat.ModelKendaraan)
        myHajatAction.selectTahunKendaraan(myHajat.TahunKendaraan)
        myHajatAction.fillInputNomorBPKB(myHajat.NomorBPKB)
        myHajatAction.selectStatusKepemilikan(myHajat.StatusKepemilikan)
        myHajatAction.fillNamaPemilikBPKB(myHajat.NamaPemilikBPKB)
        myHajatAction.checkData()
    })
    myHajatAction.clickSubmit()
    cy.wait(2000)
    myHajatAction.clickConfirm()
    cy.screenshot('Pengajuan Produk My Hajat Sukses')
})

// Logout
Then('User logout account', () => {
    commonAction.clickTabUser()
    logoutAction.clickLogout()
    cy.screenshot('Logout Sukses')
})
Feature: Register

    Scenario Outline: Register Email Duplicated

        # PRECONDITION
        Given User access ECommerce Sharia page

        # USER REGISTER
        When User click Register
        And User select Daftar Sebagai with "<DaftarSebagai>"
        And User fill Nama Lengkap with "<NamaLengkap>"
        And User fill Alamat Email with "<AlamatEmail>"
        And User fill Nomor Handphone with "<NomorHandphone>"
        And User fill Kata Sandi with "<KataSandi>"
        And User fill Ulangi Kata Sandi with "<KataSandi>"
        And User click Daftar
        Then User verify Register

        Examples:
            | DaftarSebagai | NamaLengkap | AlamatEmail                 | NomorHandphone | KataSandi |
            | Customer      | Rofi        | testautomation1@yopmail.com | 08578912323    | Test123   |
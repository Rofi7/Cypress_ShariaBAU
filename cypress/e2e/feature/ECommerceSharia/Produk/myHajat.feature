Feature: My Hajat

    Scenario Outline: Pengajuan Produk My Hajat

        # PRECONDITION
        Given User access ECommerce Sharia page

        # USER PENGAJUAN PRODUK MY HAJAT
        When User register as a customer
        And Admin approve new email register
        And User Login as a customer
        And User edit profile
        And User pengajuan produk my hajat
        Then User logout account

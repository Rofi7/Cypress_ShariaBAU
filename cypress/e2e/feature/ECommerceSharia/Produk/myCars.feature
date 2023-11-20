Feature: My Cars

    Scenario Outline: Pengajuan Produk My Cars

        # PRECONDITION
        Given User access ECommerce Sharia page

        # USER PENGAJUAN PRODUK MY CARS
        When User register as a customer
        And Admin approve new email register
        And User Login as a customer
        And User edit profile
        And User pengajuan produk my cars
        Then User logout account

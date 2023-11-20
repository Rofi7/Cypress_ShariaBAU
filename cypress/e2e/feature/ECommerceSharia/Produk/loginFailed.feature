Feature: Login

    Scenario Outline: Login Failed

        # PRECONDITION
        Given User access ECommerce Sharia page

        # USER LOGIN
        When User click Masuk
        And User fill Email with "<Email>"
        And User fill Password with "<Password>"
        And User check Ingat saya
        And User click login
        Then User verify login

        Examples:
            | Email                       | Password |
            | testautomation1@yopmail.com | salah    |

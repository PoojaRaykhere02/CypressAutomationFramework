@contact-us @regression
Feature: WebdriverUniversity contact us page

Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button

 Scenario Outline: Validate contact us form submission
        And I type a first name <firstName> and a last name '<lastName>'
        And I type a '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header text '<message>'

        Examples:
            | firstName | lastName | emailAddress            | comment                 | message                    |
            | Pooja     | ray      | pooja_r@gmail.com        | Hello how are you?      | Thank You for your Message!|
            | Gary      | Carter   | gary_carter123@gmail.com | Test123 Test321         | Thank You for your Message!|
            | Rebekha   | Merry    | Rebekha_M12@gmail       | Do you create websites? | Error: Invalid email address|
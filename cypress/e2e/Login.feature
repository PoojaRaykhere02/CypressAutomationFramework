@login @regression
Feature: webdriveruniversity - Login Page

Background: Pre conditions
        Given I navigate to the webdriveruniversity homepage
        When I click on the login portal button
        Then I wait for 1 seconds

Scenario Outline: Validate valid and invalid login credentials
And I type a '<username>' and '<password>'
And Click on the login button
Then I should be presented with an alert box which contains text '<expectedAlertText>'

Examples: 
|   username       |    password       |    expectedAlertText   |
|   webdriver      |    webdriver123   |    validation succeeded|
|   webdriver123   |    webdriver      |    validation failed   |


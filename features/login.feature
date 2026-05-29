Feature: Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I log in with valid credentials
    Then I should see the dashboard search field

  Scenario: Login with wrong credentials
    Given I am on the login page
    When I log in with username "Admin" and password "wrong-pass"
    Then I should see the error "Invalid credentials"

  Scenario: Login with empty fields
    Given I am on the login page
    When I log in with username "" and password ""
    Then I should see a "Required" error for "Username"
    And I should see a "Required" error for "Password"

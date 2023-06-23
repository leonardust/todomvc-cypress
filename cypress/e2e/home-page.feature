@regression @home-page
@REQ_TCC-8
Feature: Home page

  @id:7
  Scenario: See the home page

    When I navigate to the home page
    Then I see the home page

  @id:8
  Scenario: See my existing todos

    Given I have the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    When I navigate to the home page
    Then I see the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    And I see that I have "1 item left"
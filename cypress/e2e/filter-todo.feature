@regression @filter-todo
@REQ_TCC-4
Feature: Filters

  @TCC-17
  Background: I have the following todos on the home page

    Given I have the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    When  I navigate to the home page
    Then I see the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |

  @TCC-16
  Scenario: See only not yet completed todos

    When  I filter by "active"
    Then  I see the following todos:
      | title       | completed |
      | A test todo | false     |
    And   I see that I have "1 item left"

  @TCC-18
  Scenario: See only completed todos

    When  I filter by "completed"
    Then  I see the following todos:
      | title             | completed |
      | Another test todo | true      |
    And   I see that I have "1 item left"

  @TCC-19
  Scenario: See all todos

    When  I filter by "completed"
    And   I filter by "all"
    Then  I see the following todos:
      | title             | completed |
      | A test todo       | false     |
      | Another test todo | true      |
    And   I see that I have "1 item left"
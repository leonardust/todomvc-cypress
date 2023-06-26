@regression @remove-todo
@REQ_TCC-7
Feature: Remove a todo

  @TCC-22
  Scenario: Remove my only todo

    Given I have the following todos:
      | title       | completed |
      | A test todo | false     |
    When  I navigate to the home page
    And   I remove "A test todo"
    Then  I see that I have no existing todos

  @TCC-23
  Scenario: Remove a todo

    Given I have the following todos:
      | title                 | completed |
      | A test todo           | false     |
      | A different test todo | false     |
    When  I navigate to the home page
    And   I remove "A test todo"
    Then  I see the following todos:
      | title                 | completed |
      | A different test todo | false     |
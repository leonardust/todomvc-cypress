@regression @remove-todo
@REQ_TCC-7
Feature: Remove a todo

  @id:9
  Scenario: Remove my only todo

    Given I have the following todos:
      | title       | completed |
      | A test todo | false     |
    And I navigate to the home page
    When I remove "A test todo"
    Then I see that I have no existing todos

  @id:10
  Scenario: Remove a todo

    Given I have the following todos:
      | title                 | completed |
      | A test todo           | false     |
      | A different test todo | false     |
    And I navigate to the home page
    When I remove "A test todo"
    Then I see the following todos:
      | title                 | completed |
      | A different test todo | false     |
@regression @toggle-todo
@REQ_TCC-2
Feature: Toggle a todo

  @TCC-24 @toggle-single-todo
  Scenario: Complete a todo

    Given I have the following todos:
      | title       | completed |
      | A test todo | false     |
    When  I navigate to the home page
    And   I complete "A test todo"
    Then  I see the following todos:
      | title       | completed |
      | A test todo | true      |
    And   I see that I have "0 items left"

  @TCC-25 @toggle-single-todo
  Scenario: Un-complete a todo

    Given I have the following todos:
      | title       | completed |
      | A test todo | true      |
    When  I navigate to the home page
    And   I complete "A test todo"
    Then  I see the following todos:
      | title       | completed |
      | A test todo | false     |
    And   I see that I have "1 item left"

  @TCC-26 @toggle-all-todos
  Scenario: Complete all todos

    Given I have the following todos:
      | title              | completed |
      | A test todo        | true      |
      | A second test todo | false     |
      | A third test todo  | false     |
    When  I navigate to the home page
    And   I toggle all todos
    Then  I see the following todos:
      | title              | completed |
      | A test todo        | true      |
      | A second test todo | true      |
      | A third test todo  | true      |
    And   I see that I have "0 items left"

  @TCC-27 @toggle-all-todos
  Scenario: Un-complete all todos

    Given I have the following todos:
      | title              | completed |
      | A test todo        | true      |
      | A second test todo | true      |
      | A third test todo  | true      |
    When  I navigate to the home page
    And   I toggle all todos
    Then  I see the following todos:
      | title              | completed |
      | A test todo        | false     |
      | A second test todo | false     |
      | A third test todo  | false     |
    And   I see that I have "3 items left"
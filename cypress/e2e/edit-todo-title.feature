@regression @edit-todo
@REQ_TCC-3
Feature: Edit a todo's title

  @id:3
  Scenario: Edit a todo's title

    Given I have the following todos:
      | title       | completed |
      | A test todo | false     |
    And I navigate to the home page
    When I choose to edit "A test todo"
    And I submit "A new title" for my edit todo title
    Then I see the following todos:
      | title       | completed |
      | A new title | false     |
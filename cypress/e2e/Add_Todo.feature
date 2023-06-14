Feature: Todo 

Scenario: Add todo

    Given I navigate to the todo home page
    When  I add new todo item
    Then  I should see new todo item
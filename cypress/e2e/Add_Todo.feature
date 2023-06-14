Feature: Managing todo list 

    Scenario: User is able to add todo item

        Given I navigate to the todo home page
        When  I add new todo item
        Then  I should see new todo item

    Scenario: User is able to mark existing todo item as complete

        Given I navigate to the todo home page
        When  I add new todo item
        And   I mark todo item as complete   
        Then  I should todo item marked as complete
    
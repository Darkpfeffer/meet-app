Feature: Show/Hide an event's details

Scenario: An event element is collapsed by default
    Given the user didn't click on event details
    When the user is on the main page
    Then the user should see only the name, time, time zone and the city of the events

Scenario: User can expand an event to see its details
    Given the main page is open
    When the user clicks on the “Show details“ button
    Then the details of the clicked event should be seen

Scenario: The user can collapse an event to hide its details
    Given the user used the “Show details“ button
    When the user click on the “Hide details“ button
    Then the event's details should be hidden again
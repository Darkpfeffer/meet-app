# meet-app

This is an application that shows the users upcoming events on their city of choice. It is partly usable offline, if someone already searched for events.

Usable with any device.

This is a serverless web application, built with test-driven and behavior-driven development technique.

**Serverless provider: Amazon Web Services**

I use serverless functions as the server-side of my application to generate an OAuth token to the user in order to be authorized, and they are able to use the Google Calendar API

**API used:** Google Calendar API

The application is hosted at: https://darkpfeffer.github.io/meet-app/

### Tools I used
    - Frontend
        - React (with create-react-app)
            - create-react-app
        - Recharts
        - Test-driven development
            - Jest
            - Testing libaray/React
        - Behavior-driven development
            - Jest-cucumber
            - Puppeteer
        - Continuous Integration & Continuous Delivery
            - Atatus

### Feature 1: Filter events by city

**User story:**	
    As a user,
    I should be able to filter events by city,
    So that I can see the list of events that take place in that city

- Scenario 1: When user hasn't searched for a city, show upcoming events from all cities
    * **Given** user hasn't searched for any city
    + **When** the user opens the app
    + **Then** the user should see a list of all upcoming events

- Scenario 2: User should see a list of suggestions when they search for a city
    * **Given** the main page is open
    + **When** user starts typing in the city textbox
    + **Then** the user should see a list of cities (suggestions) that match what they've typed

- Scenario 3: User can select a city from the suggested list
    * **Given** the user was typing "Berlin" in the city textbox
    + **When** user selects a city (e.g., "Berlin, Germany") from the list
    + **Then** their city should be changed to that city (i.e., "Berlin, Germany") and the user should receive a list of upcoming events in that city

### Feature 2: Show/Hide an event's details
**User story:**
    As a user,
    I should be able to see and hide an event's details,
    so that I can see the event's details, and after I read them, I can hide it. 

- Scenario 1: An event element is collapsed by default
    * **Given** the user didn't click on event details
    + **When** the user is on the main page
    + **Then** the user should see only the name, time, time zone and the city of the events

- Scenario 2: The user can expand an event to see its details
    * **Given** the main page is open
    + **When** the user click on the "Show details" button
    + **Then** the details of the clicked event should be seen

- Scenario 3: The user can collapse an event to hide its details
    * **Given** the user used the "show details" button
    + **When** the user click on the "hide details" button
    + **Then** the event's details should be hidden again

### Feature 3: Specify number of events
**User story:**
    As a user,
    I should be able to define the number of events shown,
    So that I can see more or less events at once as I prefer.

- Scenario 1: When user hasn't specified a number, 32 is the default number
    * **Given** the main page is open
    + **When** the user doesn't specify the number of events visible
    + **Then** the default number should be 32

- Scenario 2: User can change the number of events they want to see	
    * **Given** the main page is open
    + **When** the user specifies the number of events visible
    + **Then** the user should be able to see events equal to the given number at once

### Feature 4: Use the app when offline
**User story:**
    As a user,
    I should be able to use the app when offline,
    So that I can check an event of my interest without network connection.

- Scenario 1: Show cached data when there's no internet connection
    * **Given** the app is closed
    + **When** the user opens it offline
    + **Then** the cached data should be loaded to be able to see the previous search results

- Scenario 2: Show error when user changes the settings (city, time range)
    * **Given** the app has been opened offline
    + **When** the user changes the settings
    + **Then** an error message should be shown

### Feature 5: Data visualization
**User story:**
    As a user,
    I should be able to see the number of upcoming event at the city I search,
    So that I can see how frequent are the event in that city.

- Scenario 1: Show a chart with the number of upcoming events in the searched city
    * **Given** the main page is open
    + **When** a user is searching for a city
    + **Then** they should be able to see a chart showing the number of upcoming events

## Thank you for checking out my application!
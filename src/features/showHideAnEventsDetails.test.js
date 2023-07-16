//import
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import components
import { App } from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        
        given('the user didn\'t click on event details', () => {
        });

        let AppComponent;
        let AppDOM;
        let EventListDOM;
        when('the user is on the main page', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list')
        });

        then('the user should see only the name, time, time zone and the city of the events', async() => {
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem')
                expect(EventListItems.length).toBe(32);

                const eventDetails = EventListDOM.querySelector('.show-details');
                expect(eventDetails).not.toBeInTheDocument();
            })
            
        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        given('the main page is open', () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');
        });

        let EventListItems;
        let showDetailsButton;
        when('the user clicks on the “Show details“ button', async() => {
            const user = userEvent.setup();

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem')
                expect(EventListItems.length).toBe(32)
            })
            
            showDetailsButton = within(EventListItems[0]).queryByText('Show details')
            await user.click(showDetailsButton);
        });

        then('the details of the clicked event should be seen', () => {
            const detailedEvent = EventListDOM.querySelector('.show-details')
            expect(detailedEvent).toBeInTheDocument();
        });
    });

    test('The user can collapse an event to hide its details', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        let EventListDOM;
        let EventListItems;
        let showDetailsButton;
        given('the user used the “Show details“ button', async() => {
            const user = userEvent.setup();
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;
            EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem')
                expect(EventListItems.length).toBe(32)
            })
            
            showDetailsButton = within(EventListItems[0]).queryByText('Show details')
            await user.click(showDetailsButton);
        });

        let detailedEvent;
        when('the user click on the “Hide details“ button', async() => {
            const user = userEvent.setup();
            detailedEvent = EventListDOM.querySelector('.show-details')

            const hideDetailsButton = within(detailedEvent).queryByText('Hide details')
            await user.click(hideDetailsButton);

        });

        then('the event\'s details should be hidden again', () => {
            expect(detailedEvent).not.toBeInTheDocument();
        });
    });
})
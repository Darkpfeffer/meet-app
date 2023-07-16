//import
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import components
import { App } from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the main page is open', () => {
            AppComponent = render(<App />)
            AppDOM = AppComponent.container.firstChild;
        });

        let NumberOfEventsDOM;
        let NOEInput;
        when('the user doesn\'t specify the number of events visible', () => {
            NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
            NOEInput = within(NumberOfEventsDOM).queryByRole('textbox');
        });

        then('the default number should be 32', () => {
            expect(Number(NOEInput.value)).toBe(32);
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        let AppComponent;
        let AppDOM;
        given('the main page is open', () => {
            AppComponent = render(<App />)
            AppDOM = AppComponent.container.firstChild;
        });

        let NumberOfEventsDOM;
        let NOEInput;
        when('the user specifies the number of events visible', async() => {
            const user = userEvent.setup();
            NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
            NOEInput = within(NumberOfEventsDOM).queryByRole('textbox');

            await user.type(NOEInput, "{backspace}{backspace}10");

            expect(NOEInput.value).toBe("10");
        });

        then('the user should be able to see events equal to the given number at once', async() => {
            const EventListDOM = AppDOM.querySelector('#event-list')
            let EventListItems;

            await waitFor(() => {
                EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(10);
            })
        });
    });
})
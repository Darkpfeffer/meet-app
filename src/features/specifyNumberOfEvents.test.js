//import
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within } from "@testing-library/react";

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
            expect(Number(NOEInput.value)).toBe(32)
        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('the user specifies the number of events visible', () => {

        });

        then('the user should be able to see events equal to the given number at once', () => {

        });
    });
})
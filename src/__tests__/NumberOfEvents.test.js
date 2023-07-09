//import
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import component to test
import { NumberOfEvents } from "../components/NumberOfEvents/NumberOfEvents";

describe('<NumberOfEvents /> component', () => {
    test('renders a textbox for the user to specify the number of events', () => {
        const NumberOfEventsComponent = render(<NumberOfEvents />);
        expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument();
    })

    test('32 is the default number of events', () => {
        const NumberOfEventsComponent = render(<NumberOfEvents />);
        const eventTextField = NumberOfEventsComponent.queryByRole('textbox');
        expect(eventTextField.value).toBe('32');
    })

    test('when the user enters a new number, the value of the textbox changes to that number', async() => {
        const NumberOfEventsComponent = render(<NumberOfEvents />);
        const eventTextField = NumberOfEventsComponent.queryByRole('textbox');
        const user = userEvent.setup();
        await user.type(eventTextField, '{backspace}{backspace}10');
        expect(eventTextField.value).toBe("10");
    })
})
//import
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//import components
import { Event } from "../components/Event/Event";

//import function
import { getEvents } from "../api";

describe ('<Event /> component', () => {
    let allEvents;
    let EventComponent;
    beforeEach(async() => {
        allEvents = await getEvents();
        EventComponent = render(<Event firstEvent={ allEvents[0]}/>)
    })

    test('renders event summary', async () => {
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    })

    test('renders event start time', async() => {
        expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
    })

    test('renders event end time', async() => {
        expect(EventComponent.queryByText(allEvents[0].end.dateTime)).toBeInTheDocument();
    })

    test('renders event time zone', async() => {
        expect(EventComponent.queryByText(allEvents[0].start.timeZone)).toBeInTheDocument();
    })

    test('renders event location', async() => {
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    })

    test('renders event details button with the title (Show details)', () => {
        expect(EventComponent.queryByText(`Show details`)).toBeInTheDocument();
    })

    test('renders event details when the "show events" button is pressed by the user', async() => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText(`Show details`);
        await user.click(showDetailsButton)
        expect(EventComponent.queryByText(`Hide details`)).toBeInTheDocument();
    })

    test('renders event details when "showDetails" is active', async() => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText(`Show details`);
        await user.click(showDetailsButton)
        expect(EventComponent.queryByTestId('description')).toBeInTheDocument();
    })

    test('renders events html link when "showDetails" is active', async() => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText(`Show details`);
        await user.click(showDetailsButton)
        expect(EventComponent.queryByText(allEvents[0].htmlLink)).toBeInTheDocument();
    })

    test('renders ICalendar ID when "showDetails" is active', async() => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText(`Show details`);
        await user.click(showDetailsButton)
        expect(EventComponent.queryByText(allEvents[0].iCalUID)).toBeInTheDocument();
    })

    test('collapse event details when the "hide" button is pressed by the user', async() => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText(`Show details`);
        await user.click(showDetailsButton)
        const hideDetailsButton = EventComponent.queryByText(`Hide details`);
        await user.click(hideDetailsButton)
        expect(EventComponent.queryByText(`Show details`)).toBeInTheDocument();
    })
})
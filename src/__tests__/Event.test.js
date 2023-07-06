//import
import { render } from "@testing-library/react";

//import components
import { Event } from "../components/Event/Event";

//import function
import { getEvents } from "../api";

describe ('<Event /> component', () => {
    test('renders event summary', async () => {
        const allEvents = await getEvents();
        const EventComponent = render(<Event firstEvent={ allEvents[0]}/>)
        expect(EventComponent.queryByText(allEvents[0].summary)).toBeInTheDocument();
    })

    test('renders event start time', async() => {
        const allEvents = await getEvents();
        const EventComponent = render(<Event firstEvent={ allEvents[0]}/>)
        expect(EventComponent.queryByText(allEvents[0].start.dateTime)).toBeInTheDocument();
    })

    test('renders event location', async() => {
        const allEvents = await getEvents();
        const EventComponent = render(<Event firstEvent={ allEvents[0]}/>)
        expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument();
    })

    test('renders event details button with the title (Show details)', () => {
        const EventComponent = render(<Event />)
        expect(EventComponent.queryByText(`Show details`)).toBeInTheDocument();
    })
})
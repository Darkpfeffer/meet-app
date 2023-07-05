//import
import { render } from '@testing-library/react';

//import components
import { EventList } from '../components/EventList/EventList';

//import functions
import { getEvents } from '../api';

describe('<EventList /> component', () => {
    let EventListComponent;
    beforeEach(() => {
        EventListComponent = render(<EventList />);
    })
    
    test('has an element with "list" role', () => {
        expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={ allEvents } />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
})
//import components
import { Event } from "../Event/Event"

export const EventList = ({ events }) => {
    return (
        <div role="list" id="event-list">
            {events ? 
                events.map(event => <Event key={event.id} event={event} />)
            : null}
        </div>
    )
}
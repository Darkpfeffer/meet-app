//import
import { useState } from "react"

export const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false)
    const toggleDetails = (e) => {
        e.preventDefault();
        setShowDetails(!showDetails);
    }

    return (
        <li>
            {event && !showDetails ? (
                <>
                    <p>{event.summary}</p>
                    <p>{event.start.dateTime}</p>
                    <p>{event.end.dateTime}</p>
                    <p>{event.start.timeZone}</p>
                    <p>{event.location}</p>
                    <button onClick={toggleDetails}>Show details</button>
                </>
            ) : null }

            {event && showDetails ? (
                <>
                    <p>{event.summary}</p>
                    <p>{event.start.dateTime}</p>
                    <p>{event.end.dateTime}</p>
                    <p>{event.start.timeZone}</p>
                    <p>{event.location}</p>
                    <p className="description">{event.description}</p>
                    <p>{event.htmlLink}</p>
                    <p>{event.iCalUID}</p>
                    <button onClick={toggleDetails}>Hide details</button>
                </>
            ) : null }
        </li>
    )
}
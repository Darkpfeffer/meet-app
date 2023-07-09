//import
import { useState } from "react"

export const Event = ({ firstEvent }) => {
    const [showDetails, setShowDetails] = useState(false)
    const toggleDetails = (event) => {
        event.preventDefault();
        setShowDetails(!showDetails);
    }

    return (
        <li>
            {firstEvent && !showDetails ? (
                <>
                    <p>{firstEvent.summary}</p>
                    <p>{firstEvent.start.dateTime}</p>
                    <p>{firstEvent.end.dateTime}</p>
                    <p>{firstEvent.start.timeZone}</p>
                    <p>{firstEvent.location}</p>
                    <button onClick={toggleDetails}>Show details</button>
                </>
            ) : null }

            {firstEvent && showDetails ? (
                <>
                    <p>{firstEvent.summary}</p>
                    <p>{firstEvent.start.dateTime}</p>
                    <p>{firstEvent.end.dateTime}</p>
                    <p>{firstEvent.start.timeZone}</p>
                    <p>{firstEvent.location}</p>
                    <p data-testid="description">{firstEvent.description}</p>
                    <p>{firstEvent.htmlLink}</p>
                    <p>{firstEvent.iCalUID}</p>
                    <button onClick={toggleDetails}>Hide details</button>
                </>
            ) : null }
        </li>
    )
}
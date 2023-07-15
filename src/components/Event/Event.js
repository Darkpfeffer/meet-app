/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable arrow-parens */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
//import
import { useState } from "react"

export const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = (e) => {
        e.preventDefault();
        setShowDetails(!showDetails);
    }

    return (
        <>
                {event && !showDetails ? (
                    <div role="listitem" className="event grid-item">
                        <h2>{event.summary}</h2>
                        <p>From<br/>
                            <span>{event.start.dateTime}</span><br />
                            <span> to </span><br />
                            <span>{event.end.dateTime}</span></p>
                        <p>Time zone: <span>{event.start.timeZone}</span></p>
                        <p>Location: <span>{event.location}</span></p>
                        <button onClick={toggleDetails} className="show-details-btn">Show details</button>
                    </div>
                ) : null }

                {event && showDetails ? (
                    <div role="listitem" className="event grid-item show-details">
                        <h2>{event.summary}</h2>
                        <p>From <span>{event.start.dateTime}</span><span> to </span><span>{event.end.dateTime}</span></p>
                        <p>Time zone: <span>{event.start.timeZone}</span></p>
                        <p>Location: <span>{event.location}</span></p>
                        <p className="description">{event.description}</p>
                        <p>Open in Google Calendar: <span><a href={event.htmlLink} rel={event.summary} target="_blank">{event.htmlLink.substring(0, 50)}...</a></span></p>
                        <p>ICalendar ID: <span>{event.iCalUID}</span></p>
                        <button onClick={toggleDetails} className="hide-details-btn">Hide details</button>
                    </div>
                ) : null }
        </>
    )
}
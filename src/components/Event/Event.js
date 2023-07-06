export const Event = ({ firstEvent }) => {
    return (
        <li>
            {firstEvent ? (
                <>
                    <p>{firstEvent.summary}</p>
                    <p>{firstEvent.start.dateTime}</p>
                    <p>{firstEvent.location}</p>
                    
                </>
            ) : null }
            <button>Show details</button>
        </li>
    )
}
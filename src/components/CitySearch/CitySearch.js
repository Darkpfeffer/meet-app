//import
import { useEffect, useState } from "react"

export const CitySearch = ({ allLocations, setCurrentCity, setInfoAlert }) => {
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChanged = (event) => {
        const value = event.target.value;
        const filteredLocations = allLocations ? allLocations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1
        }) : [];

        setQuery(value);
        setSuggestions(filteredLocations);

        let infoText;
        if (filteredLocations.length === 0) {
            infoText = "We can not find the city you are looking for. Please try another city"
        } else {
            infoText = ""
        }
        setInfoAlert(infoText);
    };

    const handleItemClicked = (event) => {
        const value = event.target.textContent;
        setQuery(value);
        setShowSuggestions(false); //to hide the list
        setCurrentCity(value);
        setInfoAlert("");
    }

    //make suggestion list disappear if the user clicks outside the input and suggestion list
    const hideSuggestionList = (event) => {
        if (event.target === document.querySelector('.suggestions') || event.target === document.querySelector('.city')) {
            //do nothing
        } else {
            setShowSuggestions(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', hideSuggestionList)
        return () => document.removeEventListener('click', hideSuggestionList)
    }, [window])



    useEffect(() => {
        setSuggestions(allLocations);
    }, [`${allLocations}`])

    return (
        <div 
            id="city-search"
            className='App-header__item'
        >
            <label>
                Search events by city:
            </label>
            <input 
                type="text"
                className="city"
                    placeholder="Search for a city"
                value={query}
                onFocus={() => setShowSuggestions(true)}
                onChange={handleInputChanged}
            />
            {showSuggestions ? 
                <ul className="suggestions">
                    {suggestions.map((suggestion) => {
                        return (<li onClick={handleItemClicked} 
                                    key={suggestion} 
                                    className="selection"
                        >
                            {suggestion}
                        </li>)
                    })}
                    <li 
                        key='See all cities' 
                        onClick={handleItemClicked}
                        className="selection last-selection"
                    >
                        <b>See all cities</b>
                    </li>
                </ul> : null}
        </div>
    )
}
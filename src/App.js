//import
import { useState, useEffect } from 'react';

//import components
import { CitySearch } from './components/CitySearch/CitySearch';
import { EventList } from './components/EventList/EventList';
import { NumberOfEvents } from './components/NumberOfEvents/NumberOfEvents';
import { InfoAlert, ErrorAlert } from './components/Alert/Alert';

//import functions
import { getEvents, extractLocations } from './api';

//import self css
import './App.css';

export const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities")

  //current number of events
  const [currentNOE, setCurrentNOE] = useState(32);

  //alert states
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const fetchData = async() => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className='App'>
      <header className='App-header'>
        <NumberOfEvents 
          setCurrentNOE={setCurrentNOE}
          setErrorAlert={setErrorAlert}
        />
        <CitySearch 
          allLocations={allLocations} 
          setCurrentCity={setCurrentCity}
          setInfoAlert={setInfoAlert}
        />
      </header>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <EventList events={events} currentNOE={currentNOE} />
    </div>
  )
}
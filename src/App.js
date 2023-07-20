//import
import { useState, useEffect } from 'react';

//import components
import { CitySearch } from './components/CitySearch/CitySearch';
import { EventList } from './components/EventList/EventList';
import { NumberOfEvents } from './components/NumberOfEvents/NumberOfEvents';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert/Alert';
import { CityEventsChart } from './components/CityEventsChart/CityEventsChart';

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
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async() => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    if (navigator.onLine) {
      setWarningAlert("")
    } else {
      setWarningAlert("The application is currently offline")
    }
    fetchData();
  }, [currentCity, currentNOE, navigator.onLine]);

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
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div className='chart-container'>
      <CityEventsChart allLocations={allLocations} events={events}/>
      </div>
      <EventList events={events} currentNOE={currentNOE} />
    </div>
  )
}
//import
import { useState, useEffect } from 'react';

//import components
import { CitySearch } from './components/CitySearch/CitySearch';
import { EventList } from './components/EventList/EventList';
import { NumberOfEvents } from './components/NumberOfEvents/NumberOfEvents';

//import functions
import { getEvents } from './api';

//import self css
import './App.css';

export const App = () => {
  const [events, setEvents] = useState([]);
  //current number of events
  const [currentNOE, setCurrentNOE] = useState(32);

  const fetchData = async() => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, currentNOE));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='App'>
      <EventList events={events} />
      <CitySearch />
      <NumberOfEvents/>
    </div>
  )
}
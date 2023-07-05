//import components
import { CitySearch } from './components/CitySearch/CitySearch';
import { EventList } from './components/EventList/EventList';

//import self css
import './App.css';

export const App = () => {
  return (
    <div className='App'>
      <EventList />
      <CitySearch />
    </div>
  )
}
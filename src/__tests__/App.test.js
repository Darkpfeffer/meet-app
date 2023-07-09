//import
import { render } from '@testing-library/react';
import { App } from '../App';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    })

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    })

    test('renders the 32 events by default', () => {
        expect(AppDOM.querySelector('#number-of-events')).toBeInTheDocument();
    })
});
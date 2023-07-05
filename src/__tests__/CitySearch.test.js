//import
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

//import components
import { CitySearch } from '../components/CitySearch/CitySearch'

//import functions
import { extractLocations, getEvents } from '../api';

describe('<CitySearch /> component', () => {
    let CitySearchComponent;
    let cityTextBox;

    beforeEach(() => {
        CitySearchComponent = render(<CitySearch />);
        cityTextBox = CitySearchComponent.queryByRole('textbox');
    })

    test('renders text input', () => {
        expect(cityTextBox).toBeInTheDocument();
        expect(cityTextBox).toHaveClass('city');
    })

    test('suggestion list is hidden by default', () => {
        const suggestionList = CitySearchComponent.queryByRole('list');
        expect(suggestionList).not.toBeInTheDocument();
    });

    test(
        'renders a list of suggestions when city textbox gains focus', async () => {
            const user = userEvent.setup();
            await user.click(cityTextBox);
            const suggestionList = CitySearchComponent.queryByRole('list');
            expect(suggestionList).toBeInTheDocument();
            expect(suggestionList).toHaveClass('suggestions');
    })

    test('updates list of suggestions correctly when user types in city textbox', 
        async () => {
            const user = userEvent.setup();
            const allEvents = await getEvents();
            const allLocations = extractLocations(allEvents);
            CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);
            
            //user types "Berlin" in city textbox
            await user.type(cityTextBox, "Berlin");

            // filter allLocations to locations matching "Berlin"
            const suggestions = allLocations? allLocations.filter((location) => {
                return location.toUpperCase().indexOf(cityTextBox.value.toUpperCase()) > -1;
            }) : [];

            // get all <li> elements inside the suggestion list
            const suggestionListItems = CitySearchComponent.queryAllByRole('listitem');
            expect(suggestionListItems).toHaveLength(suggestions.length + 1);
            for (let i = 0; i < suggestions.length; i += 1) {
                expect(suggestionListItems[i].textContent).toBe(suggestions[i]);
            }
        }
    )

    test('renders the suggestion text in the textbox upon clicking on the suggestion', 
        async () => {
            const user = userEvent.setup();
            const allEvents = await getEvents();
            const allLocations = extractLocations(allEvents);
            CitySearchComponent.rerender(<CitySearch allLocations={allLocations} />);

            await user.type(cityTextBox, "Berlin");

            // the suggestion's textContent look like this: "Berlin, Germany"
            const BerlinGermanySuggestion = CitySearchComponent.queryAllByRole('listitem')[0];

            await user.click(BerlinGermanySuggestion);

            expect(cityTextBox).toHaveValue(BerlinGermanySuggestion.textContent);
        }
    );
})
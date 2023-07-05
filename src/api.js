//import mock data
import { MockData } from "./mock-data";

//This function takes an events array, then uss map to create a new array with only locations
export const extractLocations = (events) => {
    const extractLocations = events.map((event) => event.location);
    const locations = [...new Set(extractLocations)];
    return locations;
};

//This function fetches all events
export const getEvents = async () => {
    return MockData;
}
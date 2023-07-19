import puppeteer from "puppeteer";

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    })

    afterAll(() => {
        browser.close();
    });

    test('An event is collapsed by default', async() => {
        const eventDetails = await page.$('.show-details');
        expect(eventDetails).toBeNull();
    });

    test('User can expand an event to see its details', async () => {
        await page.click('.event .show-details-btn');

        const eventDetails = await page.$('.show-details');
        expect(eventDetails).toBeDefined();
    })

    test('User can collapse an event to hide details', async () => {
        await page.click('.event .show-details-btn');

        await page.click('.hide-details-btn');

        const eventDetails = await page.$('.show-details');
        expect(eventDetails).toMatchObject({});
    })
})

describe('Filter events by city', () => {
    let browser;
    let page;
    beforeAll(async() => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(() => {
        browser.close();
    });

    test('When user hasn\'t searched for a city, show upcoming events from all cities', async() => {
        const eventListDOM = await page.$('#event-list');
        page.waitForFunction(() => {
            const eventListItems = eventListDOM.querySelectorAll('.event');
            expect(eventListItems.value).toBe(32);
        })
    });

    test('User should see a list of suggestions when they search for a city', async() => {
        await page.click('.city');

        const citySuggestions = await page.$('.suggestions');
        expect(citySuggestions).toBeDefined();
    })

    test('User can select a city from the suggested list', async() => {
        await page.click('.city');

        await page.type('.city', 'Berlin');
        
        await page.click('.selection');

        const eventListDOM = await page.$('#event-list');
        page.waitForFunction(() => {
            const eventListItems = eventListDOM.querySelectorAll('.event');
            expect(eventListItems.value).toBe(16);
        })
    })
})
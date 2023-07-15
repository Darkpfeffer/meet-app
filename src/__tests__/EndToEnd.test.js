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
        await page.click('.hide-details-btn');
        const eventDetails = await page.$('.show-details');
        expect(eventDetails).toBeNull();
    })
})
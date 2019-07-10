/* globals it describe expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port');

describe('Itinerary', () => {
    it('can have ports', () => {
        const port = jest.fn();
        const itinerary = new Itinerary(port);
        expect(itinerary.ports).toEqual(port);
    });
})    
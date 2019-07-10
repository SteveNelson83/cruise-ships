/* globals it describe expect */
const Itinerary = require('../src/Itinerary.js');
const Port = require('../src/Port');

describe('Itinerary', () => {
    it('can carry ports in ports property', () => {
        const calais = new Port('calais');
        const dover = new Port('dover');
        const thesePorts = [calais, dover];
        const itinerary = new Itinerary(thesePorts);
        expect(itinerary.ports).toEqual([calais, dover]);
    });
})    
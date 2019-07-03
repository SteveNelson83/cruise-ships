/* globals it describe expect */
const Ship = require('..src/Ship');

describe('Ship', () => {
    it('has a starting port', () => {
        const ship = new Ship ('Dover');
        expect(ship.startingPort).toBe('Dover');
    });
})
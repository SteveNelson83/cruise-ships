/* globals it describe expect */
const Port = require('../src/Port.js');

describe('Port', () => {
    let port;
    let ship;
    beforeEach(() => {
        port = new Port('Dover');
        ship = jest.fn();
    });
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('has a name', () => {
        expect(port.name).toBe('Dover');
    });
    it('can add a ship', () => {
        port.addShip(ship);
        expect(port.ships).toContain(ship);
    });
    it('can remove a ship', () => {
        port.addShip(ship);
        port.removeShip(ship);
        expect(port.ships).not.toBe(ship);
    });
})
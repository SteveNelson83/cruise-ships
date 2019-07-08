function Port (name) {
    this.name = name;
    this.ships = [];
}

Port.prototype = {
    addShip: function (ship) {
        this.ships.push(ship);
    },
    removeShip: function (ship) {
        for ( var i = 0; i < this.ships.length; i++) { 
            if ( this.ships[i] === ship) {
              this.ships.splice(i, 1); 
            }
        }
    },
};    

module.exports = Port;
(function exportPort() {
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
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Port;
    } else {
        window.Port = Port;
    }
}());
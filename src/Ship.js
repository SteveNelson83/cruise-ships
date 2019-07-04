function Ship (startingPort) {
    this.startingPort = startingPort;
}

Ship.prototype ={
    setSail: function () {
        this.startingPort = 0;
    }
};

module.exports = Ship;
function Ship (port) {
    this.currentPort = port;
}

Ship.prototype = {
    setSail: function () {
        this.currentPort = 0;
    },
    dock: function (port) {
        this.currentPort = port;
    },
};

module.exports = Ship;
var EventEmitter = require('events');
var Dispatcher = require('./AppDispatcher.js');
var Constants = require('./Constants.js');

var color = Symbol('color');
var colors = [
    'red',
    'cyan',
    'green',
    'yellow'
];

class MessageStore extends EventEmitter {
    constructor() {
        this[color] = colors[0];
        Dispatcher.register(payload => {
            switch (payload.actionType) {
                case Constants.ACTION_TYPES.COLOR_CHANGE:
                    this[color] = payload.color;
                    this.emit('change');
                    break;
                case Constants.ACTION_TYPES.CYCLE_COLOR:
                    var index = colors.indexOf(this[color]);
                    if (index > -1) {
                        this[color] = colors[(index + 1) % colors.length];
                        this.emit('change');
                    }
                    break;
            }
        });
    }

    getColor() {
        return this[color];
    }
}

module.exports = new MessageStore();

import EventEmitter from 'events';
import Dispatcher from './AppDispatcher.js';
import Constants from './Constants.js';

var color = Symbol('color');
var colors = [
    'red',
    'cyan',
    'green',
    'yellow'
];

class ColorStore extends EventEmitter {
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

export default new ColorStore();

import { SET_COLOR, CYCLE_COLOR } from '../actions/color.js';

const colors = [
    'red',
    'cyan',
    'green',
    'yellow'
];

export default (state = colors[0], action) => {
    switch (action.type) {
        case SET_COLOR:
            return action.color;
        case CYCLE_COLOR:
            const index = colors.indexOf(state);
            return index > -1 ? colors[(index + 1) % colors.length] : state;
        default:
            return state;
    }
};

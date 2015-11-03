export const SET_COLOR = Symbol('set_color');
export const CYCLE_COLOR = Symbol('cycle_color');

export function setColor(color) {
    return {
        type: SET_COLOR,
        color
    };
}

export function cycleColor() {
    return { type: CYCLE_COLOR };
}


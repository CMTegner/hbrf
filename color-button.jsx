import React, { Component } from 'react';
import ColorStore from './ColorStore.js';
import Dispatcher from './AppDispatcher.js';
import Constants from './Constants.js';

export default class ColorButton extends Component {
    constructor(props) {
        super(props);
        this.state = { color: ColorStore.getColor() };
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        ColorStore.on('change', this._onChange);
    }
    componentWillUnmount() {
        ColorStore.removeListener('change', this._onChange);
    }
    _onChange() {
        this.setState({ color: ColorStore.getColor() });
    }
    onClick() {
        const actionType = Constants.ACTION_TYPES.CYCLE_COLOR;
        Dispatcher.dispatch({ actionType });
    }
    render() {
        const style = {
            padding: 20,
            background: this.state.color
        };
        return (
            <input type="button"
                   style={style}
                   onClick={() => this.onClick()}
                   value="Click Me! ^^;;" />
        );
    }
}

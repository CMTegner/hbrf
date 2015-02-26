import React from 'react';
import ColorStore from './ColorStore.js';
import Dispatcher from './AppDispatcher.js';
import Constants from './Constants.js';

export default React.createClass({
    getInitialState() {
        return { color: ColorStore.getColor() };
    },
    componentDidMount() {
        ColorStore.on('change', this._onChange);
    },
    componentWillUnmount() {
        ColorStore.removeListener('change', this._onChange);
    },
    _onChange() {
        this.setState({ color: ColorStore.getColor() });
    },
    onClick() {
        const actionType = Constants.ACTION_TYPES.CYCLE_COLOR;
        Dispatcher.dispatch({ actionType });
    },
    render() {
        const style = {
            padding: '20px',
            background: this.state.color
        };
        return (
            <input type="button"
                   style={style}
                   onClick={this.onClick}
                   value="Click Me! ^^;;" />
        );
    }
});

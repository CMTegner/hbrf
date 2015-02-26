import React from 'react';
import ColorStore from './ColorStore.js';
import Dispatcher from './AppDispatcher.js';
import Constants from './Constants.js';

export default React.createClass({
    getInitialState: function () {
        return { color: ColorStore.getColor() };
    },
    componentDidMount: function () {
        ColorStore.on('change', this._onChange);
    },
    componentWillUnmount: function () {
        ColorStore.removeListener('change', this._onChange);
    },
    _onChange: function () {
        this.setState({ color: ColorStore.getColor() });
    },
    onClick: function () {
        var actionType = Constants.ACTION_TYPES.CYCLE_COLOR;
        Dispatcher.dispatch({ actionType });
    },
    render: function () {
        var style = {
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

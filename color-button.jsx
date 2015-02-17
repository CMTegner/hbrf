var React = require('react');
var ColorStore = require('./ColorStore.js');
var Dispatcher = require('./AppDispatcher.js');
var Constants = require('./Constants.js');

module.exports = React.createClass({
    getInitialState: function () {
        return { color: ColorStore.getColor() };
    },
    componentDidMount: function () {
        ColorStore.on('change', this._onChange);
    },
    componentDidUnmount: function () {
        ColorStore.off('change', this._onChange);
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

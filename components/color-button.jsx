import React, { Component, PropTypes } from 'react';

class ColorButton extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        onCycleColor: PropTypes.func.isRequired
    }
    render() {
        const { color, onCycleColor } = this.props;
        const style = {
            padding: 20,
            background: color
        };
        return (
            <input
                type="button"
                style={style}
                onClick={onCycleColor}
                value="Click Me! ^^;;"
            />
        );
    }
}

export default ColorButton;

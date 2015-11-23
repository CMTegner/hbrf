import React, { Component, PropTypes } from 'react';

class ColorButton extends Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    };
    render() {
        const { color, onClick } = this.props;
        const style = {
            padding: 20,
            background: color
        };
        return (
            <input
                type="button"
                style={style}
                onClick={onClick}
                value="Click Me! ^^;;"
            />
        );
    }
}

export default ColorButton;

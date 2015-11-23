import { connect } from 'react-redux';
import { cycleColor } from '../actions/color.js';
import ColorButton from '../components/color-button.jsx';

export default connect(
    ({ color }) => ({ color }),
    dispatch => ({ onClick() { dispatch(cycleColor()); } })
)(ColorButton);


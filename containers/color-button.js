import { connect } from 'react-redux';
import { cycleColor } from '../actions/color';
import ColorButton from '../components/color-button.jsx';

export default connect(
    ({ color }) => ({ color }),
    dispatch => ({ onCycleColor: () => dispatch(cycleColor()) })
)(ColorButton);


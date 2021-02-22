import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function AlertMUI(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Alert = ({ alerts }) =>
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map(({ id, alertType, msg, timeout }) => (
        <Snackbar key={id} open autoHideDuration={timeout} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <AlertMUI severity={alertType}>
                {msg}
            </AlertMUI>
        </Snackbar >
    ));


Alert.propTypes = {
    alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);

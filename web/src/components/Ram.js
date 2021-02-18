import React, { } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//import axios from 'axios';

const useStyles = makeStyles(() => ({
}));

const Ram = ({ setAlert }) => {


    const alert = (e) => { setAlert("Hola!", "error", 3000); }

    return (
        <div>
            Ram
            <button onClick={alert}></button>
        </div>
    )
};

Ram.propTypes = {
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { setAlert })(Ram);

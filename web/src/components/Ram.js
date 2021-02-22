import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import { format } from 'date-fns';
import RamUsage from './RamUsage';
import RamMonitor from './RamMonitor';
import axios from 'axios';

const useStyles = makeStyles(() => ({
    Paper: {
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
    },
    root: {
        flexGrow: 1,
    },
    mainTitle: {
        marginBottom: '20px'
    },
    pullRight: {
        marginLeft: 'auto'
    }
}));

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Ram = ({ setAlert }) => {

    const TEST = false;
    const classes = useStyles();

    const [state, setstate] = useState({
        lastUpdated: '',
        ram: TEST ? getRandomInt(100000, 567134) : 0,
        ram_percent: 0.0,
        ram_usage: 0,
        ram_points: [],
        ram_points_max_length: 10
    });

    const { ram, ram_usage, ram_points_max_length } = state;

    const loadData = async () => {
        let newData = {};
        const newDate = new Date();
        const currentDate = format(newDate, 'dd-mm-yyyy HH:mm:ss');
        const ram_points = state.ram_points;

        if (TEST) {
            newData.ram_usage = getRandomInt(0, ram);
            newData.ram_percent = newData.ram_usage * 100 / ram;
        }
        else {
            try {
                const { data } = await axios.get('/ram');
                newData = data;
            }
            catch (error) {
                console.log(error);
                setAlert('No se pudo conectar con el server :(', 'error', 1000);
            }
        };
        newData.ram = Math.floor(newData.ram / 1000);
        newData.ram_usage = Math.floor(newData.ram_usage / 1000);

        const newPoint = { x: new Date(), y: newData.ram_usage };

        if (ram_points_max_length <= ram_points.length) {
            ram_points.shift();
            ram_points[ram_points_max_length - 1] = newPoint;
        }
        else {
            ram_points.push(newPoint);
        }


        newData.ram_points = ram_points;
        newData.lastUpdated = `Actualizado el ${currentDate}`;

        setstate({ ...state, ...newData });
    }

    useEffect(() => {
        const timeoutId = setInterval(() => {
            loadData();
        }, 3000)

        loadData();

        return () => {
            clearInterval(timeoutId);
        };
    }, []);

    return (
        <Container maxWidth="lg">
            <Typography className={classes.mainTitle} variant="h4" component="h3">Monitor de memoria RAM</Typography>
            <Typography className={classes.pullRight} variant="caption" color="textSecondary" display="block" gutterBottom>
                {state.lastUpdated}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper variant="outlined" className={classes.Paper} elevation={3}>
                        <RamUsage total_ram={ram} used_ram={ram_usage} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper variant="outlined" className={classes.Paper} elevation={3}>
                        <RamMonitor points={state.ram_points} />

                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};

Ram.propTypes = {
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { setAlert })(Ram);

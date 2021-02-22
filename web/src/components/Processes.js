import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Container from '@material-ui/core/Container';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import HotelIcon from '@material-ui/icons/Hotel';
import DiscFullIcon from '@material-ui/icons/DiscFull';
import PanToolIcon from '@material-ui/icons/PanTool';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import FaceIcon from '@material-ui/icons/Face';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import BlockIcon from '@material-ui/icons/Block';
import RefreshIcon from '@material-ui/icons/Refresh';

import Tooltip from '@material-ui/core/Tooltip';
import TestData from '../utils/TestData';

import Chip from '@material-ui/core/Chip';

import { format } from 'date-fns';


import axios from 'axios';

const useTreeItemStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.secondary,
        '&:hover > $content': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:focus > $content, &$selected > $content': {
            backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
            color: 'var(--tree-view-color)',
        },
        '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
            backgroundColor: 'transparent',
        },
    },
    content: {
        color: theme.palette.text.secondary,
        borderTopRightRadius: theme.spacing(2),
        borderBottomRightRadius: theme.spacing(2),
        paddingRight: theme.spacing(1),
        fontWeight: theme.typography.fontWeightMedium,
        '$expanded > &': {
            fontWeight: theme.typography.fontWeightRegular,
        },
    },
    group: {
        '& $content': {
            paddingLeft: theme.spacing(2),
        },
    },
    expanded: {},
    selected: {},
    label: {
        fontWeight: 'inherit',
        color: 'inherit',
    },
    labelRoot: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
        marginRight: theme.spacing(1),
    },
    labelText: {
        fontWeight: 'inherit',
        flexGrow: 1,
    }
}));

function StyledTreeItem(props) {
    const classes = useTreeItemStyles();
    const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, description, ...other } = props;

    return (
        <TreeItem
            label={
                <Tooltip title={description} arrow placement="right-start">
                    <div className={classes.labelRoot}>
                        <LabelIcon color="primary" className={classes.labelIcon} />
                        <Typography variant="body2" className={classes.labelText}>
                            {labelText}
                        </Typography>
                        <Typography variant="caption" color="inherit">
                            {labelInfo}
                        </Typography>
                    </div>
                </Tooltip>
            }
            style={{
                '--tree-view-color': color,
                '--tree-view-bg-color': bgColor,
            }}
            classes={{
                root: classes.root,
                content: classes.content,
                expanded: classes.expanded,
                selected: classes.selected,
                group: classes.group,
                label: classes.label,
            }}
            on
            {...other}
        />
    );
}

StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelInfo: PropTypes.string,
    labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    mainTitle: {
        marginBottom: '20px'
    },
    pullRight: {
        marginLeft: 'auto'
    }
});

const states = {
    defaultState: {
        label: 'Unrecognized',
        icon: <BlockIcon />,
        color: "e3e3e3",
        bgColor: "f2f2f2"
    },
    "0": {
        label: "Running",
        icon: DirectionsRunIcon,
        color: "#3c8039",
        bgColor: "#e6f4ea"
    },
    "1": {
        label: "Sleeping",
        icon: HotelIcon,
        color: "#a250f5",
        bgColor: "#f3e8fd"
    },
    "2": {
        label: "Disk sleep",
        icon: DiscFullIcon,
        color: "e3e3e3",
        bgColor: "f2f2f2"
    },
    "4": {
        label: "Stopped",
        icon: PanToolIcon,
        color: "#e3742f",
        bgColor: "#fcefe3"
    },
    "8": {
        label: "Tracing Stop",
        icon: TimerOffIcon,
        color: "e3e3e3",
        bgColor: "f2f2f2"
    },
    "10": {
        label: "Dead",
        icon: SentimentVeryDissatisfiedIcon,
        color: "#1a73e8",
        bgColor: "#e8f0fe"
    },
    "20": {
        label: "Zombie",
        icon: FaceIcon,
        color: "#e81a1a",
        bgColor: "#fee8e8"
    },
    "40": {
        label: "Parked",
        icon: DriveEtaIcon,
        color: "e3e3e3",
        bgColor: "f2f2f2"
    },
    "80": {
        label: "Idle",
        icon: VisibilityOffIcon,
        color: "e3e3e3",
        bgColor: "f2f2f2"
    }
};

const Processes = ({ setAlert }) => {

    const classes = useStyles();
    const TEST = false;

    const [state, setstate] = useState({
        lastUpdated: "",

        processes: [],

        running: 0,
        sleeping: 0,
        stopped: 0,
        total: 0,
        zombie: 0
    });

    const [selected, setSelected] = useState([]);

    const loadData = async (filter) => {
        let newData = [];
        if (TEST) {
            newData = TestData;
        }
        else {
            try {
                const { data } = await axios.get('/cpu');
                newData = data.process;
                console.log(data);
            }
            catch (err) {
                setAlert('No se pudo conectar con el server :(', 'error', 1000);
            }
        };

        const stats = {
            running: newData.filter(p => p.state === 0).length,
            sleeping: newData.filter(p => p.state === 1).length,
            stopped: newData.filter(p => p.state === 4).length,
            zombie: newData.filter(p => p.state === 20).length,
            total: newData.length,
            lastUpdated: `Actualizado el ${format(new Date(), 'dd-mm-yyyy HH:mm:ss')}`
        };

        if (filter || filter === 0) {
            newData = newData.filter(p => p.state == filter).map(p => {
                p.pid_parent = 0;
                return p;
            });
        }

        setstate({ ...state, processes: newData, ...stats });
    }

    const deleteProcess = async (_e) => {
        const pid = selected;

        if (TEST) {
            const processes = state.processes.filter(p => p.pid != pid && p.pid_parent != pid);

            setstate({ ...state, processes });
        }
        else {
            try {
                await axios.delete(`/cpu/${pid}`);
                const processes = state.processes.filter(p => p.pid != pid && p.pid_parent != pid);
                setstate({ ...state, processes });
            }
            catch (err) {
                setAlert('No se pudo conectar con el server :(', 'error', 1000);
            }
        }
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => { loadData(); }, 15000);
        loadData();

        return () => {
            clearInterval(timeoutId);
        };

    }, []);

    const getTreeElement = (node, array) => {
        const { state, pid, name, ram, user } = node;
        const { label, icon, color, bgColor } = states[state] || states.defaultState;
        return (<StyledTreeItem
            nodeId={pid}
            labelText={`${pid} - ${name}`}
            labelIcon={icon}
            description={`Proceso ${label} - Usuario ${user} - RAM ${ram} `}
            labelInfo={`U${user} -${ram} MB`}
            color={color}
            bgColor={bgColor}
        >
            {array}
        </StyledTreeItem>);
    };

    const getTree = () => {
        const processes = state.processes.map(p => ({ ...p, childs: [] }));
        const search = (pid) => {
            if (pid === 0) {
                return null;
            }
            const coincidences = processes.filter(p => p.pid === pid);
            return coincidences.length > 0 ? coincidences[0] : null;
        };

        processes.forEach(p => {
            const { pid_parent } = p;
            const parent_node = search(pid_parent);
            if (parent_node) {
                parent_node.childs.push(p);
            }
        });

        const parents = processes.filter(p => p.pid_parent == 0);

        const result = [];

        const getElements = (node) => {
            if (!node.childs || node.childs.length === 0) {
                return getTreeElement(node, []);
            }

            const result = [];

            node.childs.forEach(n => {
                const inner = getElements(n);
                result.push(inner);
            });

            return getTreeElement(node, result);
        }

        parents.forEach(p => {
            const inner = getElements(p);
            result.push(inner);
        });

        return result;
    };

    return (
        <Container maxWidth="md">
            <Typography className={classes.mainTitle} variant="h4" component="h3">Procesos</Typography>
            <Typography className={classes.pullRight} variant="caption" color="textSecondary" display="block" gutterBottom>
                {state.lastUpdated}
            </Typography>
            <Card>
                <CardActions>
                    <Chip
                        icon={< DirectionsRunIcon />}
                        label={`${state.running} Running`}
                        onClick={() => loadData(0)}
                        variant="outlined"
                        clickable
                        color="primary"
                    />

                    <Chip
                        icon={<HotelIcon />}
                        label={`${state.sleeping} Sleeping`}
                        onClick={() => loadData(1)}
                        variant="outlined"
                        clickable
                        color="primary"
                    />

                    <Chip
                        icon={<PanToolIcon />}
                        label={`${state.stopped} Stopped`}
                        onClick={() => loadData(4)}
                        variant="outlined"
                        clickable
                        color="primary"
                    />

                    <Chip
                        icon={<FaceIcon />}
                        label={`${state.zombie} Zombie`}
                        onClick={() => loadData(20)}
                        variant="outlined"
                        clickable
                        color="primary"
                    />

                    <Chip
                        icon={<LocationSearchingIcon />}
                        label={`${state.total} Total`}
                        onClick={() => loadData(null)}
                        clickable
                        color="secondary"
                    />
                    <Button size="small" color="primary" onClick={(e) => loadData(null)} className={classes.pullRight} startIcon={<RefreshIcon />}>Recargar</Button>
                    <Button size="small" color="secondary" onClick={deleteProcess} className={classes.pullRight} startIcon={<DeleteIcon />}>Eliminar</Button>
                </CardActions>
                <CardContent>

                    <TreeView
                        className={classes.root}
                        defaultCollapseIcon={<ArrowDropDownIcon />}
                        defaultExpandIcon={<ArrowRightIcon />}
                        defaultEndIcon={<div style={{ width: 24 }} />}
                        onNodeSelect={(e, s) => { setSelected(s); }}
                    >
                        {getTree()}
                    </TreeView>

                </CardContent>
            </Card>
        </Container>

    )
};

Processes.propTypes = {
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, { setAlert })(Processes);

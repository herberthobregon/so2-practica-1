
import React from 'react';
import CanvasJSReact from './canvasjs.react';
import PropTypes from 'prop-types';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

const RamUsage = ({ used_ram, total_ram }) => {
    const options = {
        animationEnabled: true,
        title: {
            text: `RAM TOTAL ${total_ram} MB`
        },
        subtitles: [{
            text: `${Math.round(used_ram * 100 / total_ram)} % utilizada`,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "### MB",
            dataPoints: [
                { name: "Utilizada", y: used_ram },
                { name: "Libre", y: total_ram - used_ram },
            ]
        }]
    }

    return (<CanvasJSChart options={options} />);
};

RamUsage.propTypes = {
    used_ram: PropTypes.number.isRequired,
    total_ram: PropTypes.number.isRequired
};

export default RamUsage;
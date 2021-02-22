import React from 'react';
import CanvasJSReact from './canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const RamMonitor = ({ points }) => {
    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Monitor"
        },
        axisY: {
            title: "Utilización",
            includeZero: false,
            suffix: " MB"
        },
        axisX: {
            title: "Hora",

            interval: 0
        },
        data: [{
            type: "line",
            yValueFormatString: "#,### MB",
            xValueFormatString: "hh:mm TT",
            toolTipContent: "RAM Utilizada en {x}: {y}",
            dataPoints: points
        }]
    };

    return (<CanvasJSChart options={options} />);
};

export default RamMonitor;                           